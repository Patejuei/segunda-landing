import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Calendar, FileText, Share2 } from 'lucide-react';

interface Props {
    article: {
        id: number;
        title: string;
        content: string;
        image_path?: string;
        published_at: string;
        category: string;
        author?: string;
    };
    related: any[];
}

export default function ArticleShow({ article, related }: Props) {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
            <Head title={article.title} />

            {/* Header / Nav (Simplified) */}
            <header className="sticky top-0 z-50 bg-brand-black py-4 text-white shadow-md">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <Link
                        href="/boletin"
                        className="flex items-center gap-2 transition hover:text-brand-gold"
                    >
                        <ArrowLeft className="size-5" />
                        <span className="text-sm font-bold tracking-wide uppercase">
                            Volver al Boletín
                        </span>
                    </Link>
                    <div className="hidden text-xl font-bold tracking-tighter md:block">
                        El Segundino
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Main Article Content */}
                    <article className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-10 lg:col-span-8">
                        {/* Category & Date */}
                        <div className="mb-6 flex items-center gap-4 text-sm text-gray-500">
                            <span className="text-brand-gold-dark rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-bold uppercase">
                                {article.category}
                            </span>
                            <div className="flex items-center gap-1">
                                <Calendar className="size-4" />
                                <span>
                                    {new Date(
                                        article.published_at,
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="mb-8 text-3xl leading-tight font-black text-brand-black md:text-5xl">
                            {article.title}
                        </h1>

                        {/* Featured Image */}
                        {article.image_path && (
                            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl shadow-lg">
                                <img
                                    src={article.image_path}
                                    alt={article.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div
                            className="prose prose-lg prose-headings:font-bold prose-headings:text-[#1a1a1a] prose-a:text-brand-green prose-img:rounded-lg max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{
                                __html: article.content,
                            }}
                        />

                        {/* Share / Footer */}
                        <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <FileText className="size-4" />
                                <span>Fin del artículo</span>
                            </div>
                            <button className="flex items-center gap-2 font-bold text-brand-green hover:underline">
                                <Share2 className="size-4" />
                                Compartir
                            </button>
                        </div>
                    </article>

                    {/* Sidebar / Related */}
                    <aside className="space-y-8 lg:col-span-4">
                        {/* More News Widget */}
                        <div className="sticky top-24 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-6 border-b border-brand-gold pb-2 text-xl font-bold text-brand-black">
                                Más Noticias
                            </h3>
                            <div className="flex flex-col gap-6">
                                {related.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/boletin/articulo/${item.id}`}
                                        className="group block"
                                    >
                                        <div className="flex gap-4">
                                            {item.image_path && (
                                                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                                    <img
                                                        src={item.image_path}
                                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <span className="mb-1 block text-xs font-bold text-brand-green uppercase">
                                                    {item.category}
                                                </span>
                                                <h4 className="text-sm leading-snug font-bold text-gray-800 transition group-hover:text-brand-gold">
                                                    {item.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                                {related.length === 0 && (
                                    <p className="text-sm text-gray-500">
                                        No hay más noticias recientes.
                                    </p>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
