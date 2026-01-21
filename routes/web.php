<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use Illuminate\Foundation\Application;

use App\Http\Controllers\BulletinController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/boletin', [BulletinController::class, 'index'])->name('boletin');
Route::get('/boletin/articulo/{id}', [BulletinController::class, 'show'])->name('boletin.show');
Route::get('/boletin/pdf', [BulletinController::class, 'downloadPdf'])->name('boletin.pdf');


Route::prefix('company')->group(function () {
    Route::get('/material-mayor', function () {
        return Inertia::render('company/material-mayor');
    })->name('company.material-mayor');

    Route::get('/bomberos', function () {
        return Inertia::render('company/bomberos');
    })->name('company.bomberos');

    Route::get('/oficialidad', function () {
        return Inertia::render('company/oficialidad');
    })->name('company.oficialidad');

    Route::get('/historia', function () {
        return Inertia::render('company/historia');
    })->name('company.historia');

    Route::get('/documentos', function () {
        return Inertia::render('company/documentos');
    })->name('company.documentos');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Redirect /admin to /admin/boletin
    Route::get('/admin', function () {
        return redirect('/admin/boletin');
    });

    Route::prefix('admin/boletin')->name('admin.bulletin.')->group(function () {
        Route::get('/', [BulletinController::class, 'adminIndex'])->name('index');

        // Articles
        Route::get('/articles/create', [BulletinController::class, 'createArticle'])->name('articles.create');
        Route::post('/articles', [BulletinController::class, 'storeArticle'])->name('articles.store');
        Route::get('/articles/{id}/edit', [BulletinController::class, 'editArticle'])->name('articles.edit');
        Route::put('/articles/{id}', [BulletinController::class, 'updateArticle'])->name('articles.update');
        Route::delete('/articles/{id}', [BulletinController::class, 'destroyArticle'])->name('articles.destroy');

        // Events
        Route::get('/events/create', [BulletinController::class, 'createEvent'])->name('events.create');
        Route::post('/events', [BulletinController::class, 'storeEvent'])->name('events.store');
        Route::delete('/events/{id}', [BulletinController::class, 'destroyEvent'])->name('events.destroy');

        // Acts Management
        Route::get('/acts/create', [BulletinController::class, 'createAct'])->name('acts.create');
        Route::post('/acts', [BulletinController::class, 'storeAct'])->name('acts.store');
        Route::get('/acts/{id}/edit', [BulletinController::class, 'editAct'])->name('acts.edit');
        Route::put('/acts/{id}', [BulletinController::class, 'updateAct'])->name('acts.update');
        Route::delete('/acts/{id}', [BulletinController::class, 'destroyAct'])->name('acts.destroy');

        // Acts Import
        Route::get('/acts/import', function () {
            return Inertia::render('admin/bulletin/import-acts');
        })->name('acts.import.view');
        Route::post('/acts/import', [BulletinController::class, 'importActs'])->name('acts.import');
    });
});

require __DIR__ . '/settings.php';
