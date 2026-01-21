import WebsiteLayout from '@/layouts/website-layout';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    Award,
    BarChart3,
    Calendar,
    Download,
    FileText,
    Flame,
} from 'lucide-react';
import { route } from 'ziggy-js';

interface Props {
    stats: {
        month_year: string;
        // edition_number removed in favor of month only
        actos_count: number;
        capacitaciones_count: number;
    } | null;
    featuredArticle: {
        id: number;
        title: string;
        category: string;
        content: string;
        image_path: string;
    } | null;
    secondaryNews: {
        id: number;
        title: string;
        category: string;
        content: string;
        image_path: string;
    }[];
    upcomingEvents: {
        day: string;
        month: string;
        title: string;
        time: string;
    }[];
    acts: any[];
}

export default function Boletin({
    stats,
    featuredArticle,
    secondaryNews,
    upcomingEvents,
    acts,
}: Props) {
    return (
        <WebsiteLayout title="Boletín Mensual" headerVariant="transparent">
            {/* Hero Section */}
            <div className="relative -mt-[80px] flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero.png"
                        alt="Boletín Mensual"
                        className="h-full w-full object-cover brightness-50 contrast-125 filter"
                    />
                    <div className="absolute inset-0 bg-brand-green/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-transparent bg-linear-to-t from-brand-white" />
                </div>

                <div className="relative z-10 container mx-auto mt-20 px-4 text-center">
                    <div className="mb-4 flex justify-center gap-4">
                        <span className="inline-block animate-in rounded-full border border-brand-gold bg-brand-gold/20 px-3 py-1 text-xs font-bold tracking-widest text-brand-gold uppercase backdrop-blur-md fade-in slide-in-from-bottom-4">
                            {stats?.month_year || 'Noticias Recientes'}
                        </span>
                    </div>

                    <h1 className="mb-4 animate-in font-heading text-5xl font-black text-brand-black duration-700 fade-in slide-in-from-bottom-6 md:text-7xl">
                        Boletín{' '}
                        <span className="bg-linear-to-r from-brand-green to-teal-600 bg-clip-text text-transparent">
                            Mensual
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl animate-in text-xl text-gray-600 delay-100 duration-700 fade-in slide-in-from-bottom-6">
                        El resumen oficial de actividades, estadísticas y
                        novedades de la Segunda Compañía.
                    </p>
                </div>
            </div>

            <div className="relative z-20 container mx-auto -mt-20 px-4 py-16">
                {/* Statistics Row - Floating Cards */}
                <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-4">
                    {[
                        {
                            icon: Flame,
                            label: 'Actos del Mes',
                            value: stats?.actos_count || 0,
                            color: 'text-red-500',
                            bg: 'bg-red-50',
                        },
                        // "Voluntarios" removed as requested
                        {
                            icon: Award,
                            label: 'Capacitaciones',
                            value: stats?.capacitaciones_count || 0,
                            color: 'text-brand-gold',
                            bg: 'bg-yellow-50',
                        },
                        {
                            icon: BarChart3,
                            label: 'Total Emergencias', // Replaced with general count/active edition info if needed, or filler
                            value: stats?.actos_count || 0, // Duplicate for layout balance or use another metric
                            color: 'text-blue-500',
                            bg: 'bg-blue-50',
                        },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="flex transform items-center space-x-4 rounded-xl border border-gray-100 bg-white p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className={`rounded-full p-4 ${stat.bg}`}>
                                <stat.icon
                                    className={`h-8 w-8 ${stat.color}`}
                                />
                            </div>
                            <div>
                                <span className="mb-1 block text-3xl leading-none font-black text-brand-black">
                                    {stat.value}
                                </span>
                                <span className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Left Column: News & Activities (8 cols) */}
                    <div className="space-y-16 lg:col-span-8">
                        {/* Noticias Section */}
                        <section>
                            <div className="mb-8 flex items-center">
                                <h2 className="mr-4 font-heading text-3xl font-bold text-brand-black">
                                    Noticias Destacadas
                                </h2>
                                <div className="h-px grow bg-gray-200"></div>
                            </div>

                            <div className="space-y-8">
                                {/* Featured News Item (Large) */}
                                {featuredArticle && (
                                    <div className="group relative h-[400px] overflow-hidden rounded-2xl shadow-lg">
                                        <img
                                            src={
                                                featuredArticle.image_path ||
                                                '/images/hero.png'
                                            }
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            alt={featuredArticle.title}
                                        />
                                        <div className="absolute inset-0 bg-transparent bg-linear-to-t from-black via-black/50" />
                                        <div className="absolute bottom-0 p-8 text-white">
                                            <span className="mb-3 inline-block rounded bg-brand-gold px-2 py-1 text-xs font-bold tracking-wide text-brand-black uppercase">
                                                {featuredArticle.category}
                                            </span>
                                            <h3 className="mb-2 text-3xl leading-tight font-bold transition-colors group-hover:text-brand-gold">
                                                {featuredArticle.title}
                                            </h3>
                                            <div
                                                className="mb-4 line-clamp-2 text-gray-300"
                                                dangerouslySetInnerHTML={{
                                                    __html: featuredArticle.content,
                                                }}
                                            />
                                            <Link
                                                href={`/boletin/articulo/${featuredArticle.id}`}
                                                className="flex items-center text-sm font-bold tracking-wide uppercase transition-colors hover:text-brand-gold"
                                            >
                                                Leer más{' '}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                )}

                                {/* Secondary News Grid */}
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {(secondaryNews || []).map((news) => (
                                        <div
                                            key={news.id}
                                            className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-lg"
                                        >
                                            <div className="group relative h-48 overflow-hidden bg-gray-200">
                                                <img
                                                    src={
                                                        news.image_path ||
                                                        '/images/hero.png'
                                                    }
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    alt={news.title}
                                                />
                                                <div className="absolute inset-0 bg-brand-green/20 transition-colors group-hover:bg-transparent"></div>
                                            </div>
                                            <div className="grow p-6">
                                                <div className="mb-2 text-xs font-bold tracking-wide text-brand-green uppercase">
                                                    {news.category}
                                                </div>
                                                <h4 className="mb-2 text-xl leading-snug font-bold text-gray-900">
                                                    {news.title}
                                                </h4>
                                                <div
                                                    className="mb-4 line-clamp-3 text-sm text-gray-500"
                                                    dangerouslySetInnerHTML={{
                                                        __html: news.content,
                                                    }}
                                                />
                                                <Link
                                                    href={`/boletin/articulo/${news.id}`}
                                                    className="inline-flex items-center text-xs font-bold text-brand-black uppercase hover:text-brand-green"
                                                >
                                                    Leer Artículo completo
                                                    <ArrowRight className="ml-1 size-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Actos Concurridos Section (Placeholder for now) */}
                        <section>
                            <div className="mb-8 flex items-center">
                                <h2 className="mr-4 font-heading text-3xl font-bold text-brand-black">
                                    Actos Concurridos
                                </h2>
                                <div className="h-px grow bg-gray-200"></div>
                            </div>

                            <div className="space-y-4">
                                {acts && acts.length > 0 ? (
                                    acts.map((act: any) => (
                                        <div
                                            key={act.id}
                                            className="group relative flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
                                        >
                                            {/* Date & Time */}
                                            <div className="flex shrink-0 items-center gap-4 sm:w-32">
                                                <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 px-3 py-2 text-center group-hover:bg-brand-gold/10">
                                                    <span className="group-hover:text-brand-gold-dark text-xl leading-none font-bold text-gray-900">
                                                        {new Date(
                                                            act.date,
                                                        ).getDate()}
                                                    </span>
                                                    <span className="group-hover:text-brand-gold-dark text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                                                        {new Date(
                                                            act.date,
                                                        ).toLocaleString(
                                                            'es-ES',
                                                            { month: 'short' },
                                                        )}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-gray-400">
                                                        {act.time}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Info */}
                                            <div className="flex grow flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-brand-red text-lg font-bold">
                                                        {act.key}
                                                    </span>
                                                </div>
                                                <span className="text-sm font-medium text-gray-600 uppercase">
                                                    {act.service_type}
                                                </span>
                                                <div className="text-base text-gray-900">
                                                    {act.address}
                                                    {act.corner && (
                                                        <span className="ml-1 text-sm text-gray-500">
                                                            esq. {act.corner}
                                                        </span>
                                                    )}
                                                </div>
                                                {act.commune && (
                                                    <div className="text-xs font-bold text-brand-gold uppercase">
                                                        {act.commune}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Units */}
                                            <div className="flex shrink-0 flex-col items-end gap-2 sm:items-end">
                                                {act.vehicles && (
                                                    <div className="flex flex-wrap justify-end gap-1.5">
                                                        {act.vehicles
                                                            .split(',')
                                                            .map(
                                                                (
                                                                    unit: string,
                                                                    i: number,
                                                                ) => (
                                                                    <span
                                                                        key={i}
                                                                        className="rounded bg-brand-black px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm"
                                                                    >
                                                                        {unit.trim()}
                                                                    </span>
                                                                ),
                                                            )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center">
                                        <p className="mb-1 font-medium text-gray-900">
                                            No hay actos registrados
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            No se han cargado datos para esta
                                            edición.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Events & Sidebar (4 cols) */}
                    <div className="space-y-12 lg:col-span-4">
                        {/* PDF Download Widget (NEW) */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gray-900 p-6 text-white shadow-xl">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 rounded-full bg-white/10 p-24 blur-3xl transition-all duration-700 group-hover:scale-150"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-4 rounded-full bg-white/10 p-3 backdrop-blur-sm">
                                    <FileText className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="mb-2 font-heading text-xl font-bold text-white">
                                    Edición Impresa
                                </h3>
                                <p className="mb-6 max-w-[250px] text-sm text-gray-300">
                                    Descarga el boletín mensual completo en
                                    formato PDF con estilo periodístico.
                                </p>

                                {/* Selector Form */}
                                <form
                                    action={route('boletin.pdf')}
                                    method="GET"
                                    className="w-full space-y-3"
                                >
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="relative">
                                            <select
                                                name="month"
                                                defaultValue={
                                                    new Date().getMonth() + 1
                                                }
                                                className="focus:border-brand-red focus:ring-brand-red w-full cursor-pointer appearance-none rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-center text-sm font-bold text-white focus:ring-1"
                                            >
                                                {Array.from(
                                                    { length: 12 },
                                                    (_, i) => (
                                                        <option
                                                            key={i}
                                                            value={i + 1}
                                                        >
                                                            {new Date(0, i)
                                                                .toLocaleString(
                                                                    'es-ES',
                                                                    {
                                                                        month: 'long',
                                                                    },
                                                                )
                                                                .charAt(0)
                                                                .toUpperCase() +
                                                                new Date(0, i)
                                                                    .toLocaleString(
                                                                        'es-ES',
                                                                        {
                                                                            month: 'long',
                                                                        },
                                                                    )
                                                                    .slice(1)}
                                                        </option>
                                                    ),
                                                )}
                                            </select>
                                        </div>
                                        <div className="relative">
                                            <select
                                                name="year"
                                                defaultValue={new Date().getFullYear()}
                                                className="focus:border-brand-red focus:ring-brand-red w-full cursor-pointer appearance-none rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-center text-sm font-bold text-white focus:ring-1"
                                            >
                                                {Array.from(
                                                    { length: 5 },
                                                    (_, i) =>
                                                        new Date().getFullYear() -
                                                        i,
                                                ).map((y) => (
                                                    <option key={y} value={y}>
                                                        {y}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-brand-red inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl"
                                    >
                                        <Download className="h-4 w-4" />
                                        Descargar Edición
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Upcoming Events Widget */}
                        <div className="relative overflow-hidden rounded-2xl bg-brand-black p-8 text-white shadow-2xl">
                            <div className="absolute top-0 right-0 -mt-16 -mr-16 rounded-full bg-brand-green p-32 opacity-20 blur-3xl"></div>

                            <div className="relative z-10">
                                <h3 className="mb-6 flex items-center font-heading text-xl font-bold">
                                    <Calendar className="mr-2 h-5 w-5 text-brand-gold" />
                                    Calendario de Eventos
                                </h3>

                                <div className="space-y-6">
                                    {(upcomingEvents || []).map((event, i) => (
                                        <div
                                            key={i}
                                            className="group flex cursor-pointer items-start space-x-4"
                                        >
                                            <div className="min-w-14 rounded-lg bg-white/10 p-2 text-center transition-colors group-hover:bg-brand-gold group-hover:text-brand-black">
                                                <span className="block text-lg leading-none font-black">
                                                    {event.day}
                                                </span>
                                                <span className="text-[10px] font-bold uppercase">
                                                    {event.month}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="mb-1 text-lg leading-tight font-bold transition-colors group-hover:text-brand-gold">
                                                    {event.title}
                                                </h4>
                                                <p className="text-sm text-gray-400">
                                                    {event.time}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    {upcomingEvents.length === 0 && (
                                        <p className="text-sm text-gray-400">
                                            No hay eventos próximos.
                                        </p>
                                    )}
                                </div>
                                {/* Calendar View Trigger - Could link to full calendar page */}
                                <button className="mt-8 w-full rounded-lg bg-white/10 py-3 text-sm font-bold text-white uppercase transition-colors hover:bg-white/20">
                                    Ver Calendario Completo
                                </button>
                            </div>
                        </div>

                        {/* Quick Stats / Info */}
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 flex items-center font-bold text-gray-900">
                                <BarChart3 className="mr-2 h-5 w-5 text-gray-400" />
                                Resumen Anual {new Date().getFullYear()}
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">
                                        Total Emergencias
                                    </span>
                                    <span className="font-bold text-gray-900">
                                        {stats?.actos_count || 0}
                                    </span>
                                </li>
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                                    <div className="h-full w-[45%] rounded-full bg-brand-green"></div>
                                </div>

                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">
                                        Total Academias
                                    </span>
                                    <span className="font-bold text-gray-900">
                                        {stats?.capacitaciones_count || 0}
                                    </span>
                                </li>
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                                    <div className="h-full w-[35%] rounded-full bg-brand-gold"></div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}
