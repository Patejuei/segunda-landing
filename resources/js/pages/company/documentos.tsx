import WebsiteLayout from '@/layouts/website-layout';
import { ArrowRight, Download, FileText, FolderOpen } from 'lucide-react';

export default function Documentos() {
    return (
        <WebsiteLayout title="Documentos">
            <div className="min-h-screen bg-stone-50 pt-[120px] pb-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 flex flex-col items-end justify-between md:flex-row">
                        <div>
                            <h1 className="mb-2 font-heading text-4xl font-bold text-brand-black">
                                Centro de Documentos
                            </h1>
                            <p className="text-gray-500">
                                Transparencia y acceso a la información pública.
                            </p>
                        </div>
                        <div className="mt-4 flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500 shadow-sm md:mt-0">
                            <FolderOpen className="mr-2 h-4 w-4" />
                            <span>Total: 4 Documentos</span>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                        <div className="divide-y divide-gray-100">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="group flex flex-col items-center justify-between p-6 transition-colors duration-200 hover:bg-brand-green/5 md:flex-row"
                                >
                                    <div className="flex w-full items-center space-x-6 md:w-auto">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-100 bg-brand-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                                            <FileText className="h-8 w-8 text-brand-green" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-brand-green">
                                                Reglamento General {2023 + i}
                                            </h3>
                                            <div className="mt-1 flex items-center space-x-3 text-sm text-gray-500">
                                                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                                                    PDF
                                                </span>
                                                <span>2.{i} MB</span>
                                                <span>•</span>
                                                <span>12 Ene 2026</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex w-full justify-end md:mt-0 md:w-auto">
                                        <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-brand-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-brand-gold hover:text-brand-black md:w-auto">
                                            <span>Descargar</span>
                                            <Download className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-100 bg-gray-50 p-4 text-center">
                            <a
                                href="#"
                                className="inline-flex items-center text-sm font-bold text-brand-green hover:underline"
                            >
                                Ver archivo histórico{' '}
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}
