<?php

namespace App\Http\Controllers;

use App\Models\BulletinArticle;
use App\Models\BulletinEvent;
use App\Models\BulletinStat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BulletinController extends Controller
{
    // Public View
    public function index(Request $request)
    {
        // 1. Dynamic Statistics (Current Month)
        // Defaults to current month unless we add date filtering later
        $startOfMonth = now()->startOfMonth()->format('Y-m-d');
        $endOfMonth = now()->endOfMonth()->format('Y-m-d');

        $currentMonthActs = \App\Models\BulletinAct::whereBetween('date', [$startOfMonth, $endOfMonth])->get();

        $stats = [
            'month_year' => ucfirst(now()->locale('es')->isoFormat('MMMM YYYY')),
            'actos_count' => $currentMonthActs->filter(function ($act) {
                $type = $act->service_type;
                return stripos($type, 'Academia') === false && stripos($type, 'Sesión') === false && stripos($type, 'Sesion') === false;
            })->count(),
            'capacitaciones_count' => $currentMonthActs->filter(function ($act) {
                return stripos($act->service_type, 'Academia') !== false;
            })->count(),
        ];

        // 2. Fetch Latest Acts (for "Actos Concurridos" display)
        $acts = \App\Models\BulletinAct::orderBy('date', 'desc')
            ->orderBy('time', 'desc')
            ->take(5)
            ->get();

        // 3. Fetch Featured Article
        $featuredArticle = BulletinArticle::where('is_featured', true)
            ->latest()
            ->first();

        if (!$featuredArticle) {
            $featuredArticle = BulletinArticle::latest()->first();
        }

        // 4. Fetch Secondary News
        $secondaryNews = BulletinArticle::where('id', '!=', $featuredArticle?->id)
            ->latest()
            ->take(4)
            ->get();

        // 5. Fetch Upcoming Events
        $upcomingEvents = BulletinEvent::where('event_date', '>=', now()->startOfMonth())
            ->orderBy('event_date', 'asc')
            ->take(5)
            ->get()
            ->map(function ($event) {
                return [
                    'day' => $event->event_date->format('d'),
                    'month' => strtoupper($event->event_date->format('M')),
                    'title' => $event->title,
                    'time' => $event->time,
                ];
            });

        // 6. Fetch Available Editions (for PDF Download)
        // Group by Year and Month of published articles to determine which editions exist
        $availableEditions = BulletinArticle::selectRaw('YEAR(published_at) as year, MONTH(published_at) as month')
            ->distinct()
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get()
            ->map(function ($date) {
                return [
                    'year' => $date->year,
                    'month' => $date->month,
                    'label' => ucfirst(\Carbon\Carbon::createFromDate($date->year, $date->month, 1)->locale('es')->isoFormat('MMMM YYYY'))
                ];
            });

        return Inertia::render('boletin', [
            'stats' => $stats,
            'featuredArticle' => $featuredArticle,
            'secondaryNews' => $secondaryNews,
            'upcomingEvents' => $upcomingEvents,
            'acts' => $acts,
            'availableEditions' => $availableEditions,
        ]);
    }

    public function show($id)
    {
        $article = BulletinArticle::findOrFail($id);

        // Fetch recent/related articles for sidebar/bottom
        $related = BulletinArticle::where('id', '!=', $id)
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('bulletin/show', [
            'article' => $article,
            'related' => $related
        ]);
    }

    // Admin Dashboard
    public function adminIndex()
    {
        return Inertia::render('admin/bulletin/index', [
            'articles' => BulletinArticle::latest()->get(),
            'events' => BulletinEvent::orderBy('event_date', 'asc')->get(),
            'acts' => \App\Models\BulletinAct::orderBy('date', 'desc')->paginate(10),
        ]);
    }

    public function createArticle()
    {
        return Inertia::render('admin/bulletin/create-article');
    }

    public function createEvent()
    {
        return Inertia::render('admin/bulletin/create-event');
    }

    public function editStats()
    {
        return Inertia::render('admin/bulletin/edit-stats', [
            'stats' => BulletinStat::latest()->first()
        ]);
    }

    public function editArticle($id)
    {
        $article = BulletinArticle::findOrFail($id);
        return Inertia::render('admin/bulletin/edit-article', [
            'article' => $article
        ]);
    }

    public function updateArticle(Request $request, $id)
    {
        $article = BulletinArticle::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'content' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'published_at' => 'required|date',
            'is_featured' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $mime = $file->getMimeType();
            $content = file_get_contents($file->getRealPath());
            $base64 = base64_encode($content);
            $imageData = 'data:' . $mime . ';base64,' . $base64;

            $article->image_data = $imageData;
            // $article->image_path = null; // Optional: clear legacy path if new image uploaded
        }

        $article->update([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'content' => $validated['content'],
            'published_at' => $validated['published_at'],
            'is_featured' => $validated['is_featured'] ?? false,
            // image_data is updated above if present
        ]);

        return redirect()->route('admin.bulletin.index');
    }

    // ARITCLES CRUD
    public function storeArticle(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'content' => 'required|string',
            'image' => 'nullable|image|max:2048', // Handle upload
            'published_at' => 'required|date',
            'is_featured' => 'boolean'
        ]);

        $imageData = null;
        $imagePath = null;

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            // Get file content and convert to base64
            $mime = $file->getMimeType();
            $content = file_get_contents($file->getRealPath());
            $base64 = base64_encode($content);
            $imageData = 'data:' . $mime . ';base64,' . $base64;

            // We can keep image_path null or use it as a fallback identifier if needed, 
            // but user asked for DB storage to save space (conceptually, though DB storage usually takes more space, 
            // but satisfying the request "almacene en bits dentro de la base de datos").
        }

        BulletinArticle::create([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'content' => $validated['content'],
            'image_path' => null, // Explicitly null or legacy
            'image_data' => $imageData,
            'published_at' => $validated['published_at'],
            'is_featured' => $validated['is_featured'] ?? false,
        ]);

        return redirect()->route('admin.bulletin.index');
    }

    public function destroyArticle($id)
    {
        BulletinArticle::findOrFail($id)->delete();
        return back();
    }

    // EVENTS CRUD
    public function storeEvent(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'event_date' => 'required|date',
            'time' => 'required|string|max:20',
        ]);

        BulletinEvent::create($validated);
        return back();
    }

    public function destroyEvent($id)
    {
        BulletinEvent::findOrFail($id)->delete();
        return back();
    }

    // ACTS CRUD
    public function createAct()
    {
        return Inertia::render('admin/bulletin/create-act');
    }

    public function storeAct(Request $request)
    {
        $validated = $request->validate([
            'date' => 'required|date',
            'time' => 'required|string',
            'service_type' => 'nullable|string', // Changed to nullable
            'address' => 'required|string',
            'corner' => 'nullable|string',
            'commune' => 'nullable|string',
            'vehicles' => 'nullable|string',
        ]);

        if (empty($validated['service_type'])) {
            $validated['service_type'] = 'Sin Descripción';
        }

        \App\Models\BulletinAct::create($validated);
        return redirect()->route('admin.bulletin.index')->with('success', 'Acto creado correctamente');
    }

    public function editAct($id)
    {
        $act = \App\Models\BulletinAct::findOrFail($id);
        return Inertia::render('admin/bulletin/edit-act', [
            'act' => $act
        ]);
    }

    public function updateAct(Request $request, $id)
    {
        $act = \App\Models\BulletinAct::findOrFail($id);

        $validated = $request->validate([
            'date' => 'required|date',
            'time' => 'required|string',
            'service_type' => 'nullable|string', // Changed to nullable
            'address' => 'required|string',
            'corner' => 'nullable|string',
            'commune' => 'nullable|string',
            'vehicles' => 'nullable|string',
        ]);

        if (empty($validated['service_type'])) {
            $validated['service_type'] = 'Sin Descripción';
        }

        $act->update($validated);
        return redirect()->route('admin.bulletin.index')->with('success', 'Acto actualizado correctamente');
    }

    public function destroyAct($id)
    {
        \App\Models\BulletinAct::findOrFail($id)->delete();
        return back()->with('success', 'Acto eliminado correctamente');
    }

    // PDF Export
    public function downloadPdf(Request $request)
    {
        // Filter by Month/Year or default to current
        // For simplicity, let's just grab the current month content
        // Or if user passes ?month=01&year=2026

        $month = $request->query('month', now()->month);
        $year = $request->query('year', now()->year);

        $startOfMonth = \Carbon\Carbon::createFromDate($year, $month, 1)->startOfMonth();
        $endOfMonth = $startOfMonth->copy()->endOfMonth();

        $acts = \App\Models\BulletinAct::whereBetween('date', [$startOfMonth, $endOfMonth])
            ->orderBy('date', 'asc')
            ->get();

        $stats = [
            'month_year' => ucfirst($startOfMonth->locale('es')->isoFormat('MMMM YYYY')),
            'actos_count' => $acts->filter(function ($act) {
                $type = $act->service_type;
                return stripos($type, 'Academia') === false && stripos($type, 'Sesión') === false && stripos($type, 'Sesion') === false;
            })->count(),
            'capacitaciones_count' => $acts->filter(function ($act) {
                return stripos($act->service_type, 'Academia') !== false;
            })->count(),
        ];

        $articles = BulletinArticle::whereBetween('published_at', [$startOfMonth, $endOfMonth])
            ->orderBy('category')
            ->orderBy('published_at', 'desc')
            ->get()
            ->groupBy('category');

        // You would need a blade view for this: 'pdf.bulletin'
        // For now let's assume we create it.
        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf.bulletin', [
            'stats' => $stats,
            'acts' => $acts,
            'groupedArticles' => $articles // Changed variable name to reflect structure
        ]);

        return $pdf->download('boletin-' . $startOfMonth->format('m-Y') . '.pdf');
    }

    // UPDATED IMPORT (Remove Stats Table Logic)
    public function importActs(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,xls'
        ]);

        $importer = new \App\Imports\ViperActsImport();
        $importer->import($request->file('file')->getPathname());

        // No need to calculate Stats Table anymore, dynamic only.
        return back()->with('success', 'Actos importados correctamente.');
    }
}
