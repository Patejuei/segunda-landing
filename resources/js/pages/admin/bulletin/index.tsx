import AdminLayout from '@/layouts/admin-layout';
import { Head, Link } from '@inertiajs/react';
import {
    BarChart,
    Calendar,
    Edit,
    FileText,
    Flame,
    Plus,
    Trash,
    Upload,
} from 'lucide-react';
import { route } from 'ziggy-js';

interface Props {
    articles: any[];
    events: any[];
    stats: any;
    acts: any; // Paginator
}

export default function BulletinAdminIndex({
    articles,
    events,
    stats,
    acts,
}: Props) {
    return (
        <AdminLayout>
            <Head title="Gestión Boletín" />

            {/* Header / Actions */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Panel de Control
                    </h1>
                    <p className="text-muted-foreground">
                        Gestiona el contenido de la edición actual del boletín.
                    </p>
                </div>
                <Link
                    href="/admin/boletin/acts/import"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                    <Upload className="size-4" />
                    Importar Excel (VIPER)
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Dynamic Stats Card (Read Only) */}
                <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-4 flex items-center space-x-3">
                        <div className="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                            <BarChart className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-card-foreground">
                            Estadísticas (Mes Actual)
                        </h3>
                    </div>

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between border-b border-border pb-2">
                            <span className="text-muted-foreground">Mes</span>
                            <span className="font-bold text-foreground capitalize">
                                {new Date().toLocaleString('es-ES', {
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-2">
                            <span className="text-muted-foreground">Actos</span>
                            <span className="font-bold text-foreground">
                                {acts?.total || 0}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Acts Management Card (Links & Import) */}
                <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-4 flex items-center space-x-3">
                        <div className="rounded-lg bg-red-100 p-2 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                            <Flame className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-card-foreground">
                            Gestión de Actos
                        </h3>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Link
                            href={route('admin.bulletin.acts.create')}
                            className="bg-brand-red inline-flex h-10 w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
                        >
                            <Plus className="mr-2 size-4" />
                            Nuevo Acto Manual
                        </Link>
                        <Link
                            href="/admin/boletin/acts/import"
                            className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            <Upload className="mr-2 size-4" />
                            Importar Excel
                        </Link>
                    </div>
                </div>

                {/* Upcoming Events Card */}
                <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="rounded-lg bg-yellow-100 p-2 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-card-foreground">
                                Eventos
                            </h3>
                        </div>
                        <Link
                            href="/admin/boletin/events/create"
                            className="flex size-8 items-center justify-center rounded-full bg-brand-gold text-brand-black transition hover:bg-brand-gold/80"
                            title="Nuevo Evento"
                        >
                            <Plus className="h-5 w-5" />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {events.length > 0 ? (
                            events.map((event) => (
                                <div
                                    key={event.id}
                                    className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3"
                                >
                                    <div className="flex flex-col items-center justify-center rounded bg-background px-2 py-1 text-center shadow-sm">
                                        <span className="text-xs font-bold text-muted-foreground uppercase">
                                            {new Date(
                                                event.event_date,
                                            ).toLocaleString('default', {
                                                month: 'short',
                                            })}
                                        </span>
                                        <span className="text-lg leading-none font-bold text-foreground">
                                            {new Date(
                                                event.event_date,
                                            ).getDate()}
                                        </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="truncate text-sm font-semibold text-foreground">
                                            {event.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            {event.time}
                                        </p>
                                    </div>
                                    <Link
                                        href={`/admin/boletin/events/${event.id}`}
                                        method="delete"
                                        as="button"
                                        className="text-muted-foreground hover:text-red-500"
                                    >
                                        <Trash className="size-4" />
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="py-6 text-center text-sm text-muted-foreground">
                                No hay eventos próximos.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Articles Section (Full Width) */}
            <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="rounded-lg bg-green-100 p-2 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">
                            Noticias & Artículos
                        </h2>
                    </div>
                    <Link
                        href="/admin/boletin/articles/create"
                        className="flex items-center gap-2 rounded-lg bg-brand-green px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-green/90"
                    >
                        <Plus className="h-4 w-4" />
                        <span>Nueva Noticia</span>
                    </Link>
                </div>

                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-muted/50 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                                <tr>
                                    <th className="px-6 py-4">Título</th>
                                    <th className="px-6 py-4">Categoría</th>
                                    <th className="px-6 py-4">Estado</th>
                                    <th className="px-6 py-4">Fecha</th>
                                    <th className="px-6 py-4 text-right">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {articles.length > 0 ? (
                                    articles.map((article) => (
                                        <tr
                                            key={article.id}
                                            className="group transition-colors hover:bg-muted/30"
                                        >
                                            <td className="px-6 py-4 font-medium text-foreground">
                                                {article.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                                                    {article.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {article.is_featured ? (
                                                    <span className="text-brand-gold-dark inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-2.5 py-0.5 text-xs font-bold dark:text-brand-gold">
                                                        <span className="size-1.5 rounded-full bg-brand-gold"></span>
                                                        Destacado
                                                    </span>
                                                ) : (
                                                    <span className="text-muted-foreground">
                                                        -
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {new Date(
                                                    article.published_at,
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                                    <Link
                                                        href={`/admin/boletin/articles/${article.id}/edit`}
                                                        className="rounded p-2 text-muted-foreground hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                                                    >
                                                        <Edit className="size-4" />
                                                    </Link>
                                                    <Link
                                                        href={`/admin/boletin/articles/${article.id}`}
                                                        method="delete"
                                                        as="button"
                                                        className="rounded p-2 text-muted-foreground hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                                                    >
                                                        <Trash className="size-4" />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-6 py-12 text-center text-muted-foreground"
                                        >
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <FileText className="size-8 opacity-20" />
                                                <p>
                                                    No hay noticias publicadas
                                                    aún.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Acts Section */}
            <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="rounded-lg bg-red-100 p-2 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                            <Flame className="h-6 w-6" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">
                            Registro de Actos
                        </h2>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-muted/50 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                                <tr>
                                    <th className="px-6 py-4">Fecha/Hora</th>
                                    <th className="px-6 py-4">Clave (Tipo)</th>
                                    <th className="px-6 py-4">Descripción</th>
                                    <th className="px-6 py-4">Dirección</th>
                                    <th className="px-6 py-4 text-right">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {acts?.data?.length > 0 ? (
                                    acts.data.map((act: any) => (
                                        <tr
                                            key={act.id}
                                            className="group transition-colors hover:bg-muted/30"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="font-medium text-foreground">
                                                    {act.date}
                                                </div>
                                                <div className="text-xs text-muted-foreground">
                                                    {act.time}
                                                </div>
                                            </td>
                                            <td className="text-brand-red px-6 py-4 font-bold">
                                                {act.key || '-'}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {act.service_type}
                                            </td>
                                            <td className="max-w-xs truncate px-6 py-4 text-muted-foreground">
                                                {act.address}{' '}
                                                {act.corner && (
                                                    <span className="opacity-70">
                                                        esq {act.corner}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                                    <Link
                                                        href={route(
                                                            'admin.bulletin.acts.edit',
                                                            act.id,
                                                        )}
                                                        className="rounded p-2 text-muted-foreground hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                                                    >
                                                        <Edit className="size-4" />
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            'admin.bulletin.acts.destroy',
                                                            act.id,
                                                        )}
                                                        method="delete"
                                                        as="button"
                                                        className="rounded p-2 text-muted-foreground hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                                                    >
                                                        <Trash className="size-4" />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-6 py-12 text-center text-muted-foreground"
                                        >
                                            No hay actos registrados.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* Basic Pagination info */}
                    {acts?.links && (
                        <div className="flex items-center justify-center p-4">
                            <div className="text-xs text-muted-foreground">
                                Mostrando {acts.from}-{acts.to} de {acts.total}{' '}
                                actos
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
