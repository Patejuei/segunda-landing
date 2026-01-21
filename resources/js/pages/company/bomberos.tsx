import WebsiteLayout from '@/layouts/website-layout';

export default function Bomberos() {
    return (
        <WebsiteLayout title="Bomberos">
            <div className="min-h-screen bg-brand-white pt-[80px]">
                {/* Hero */}
                <div className="relative overflow-hidden bg-brand-green py-20">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <span className="mb-4 block animate-in text-sm font-bold tracking-widest text-brand-gold uppercase duration-700 fade-in slide-in-from-bottom-4">
                            Abnegación y Sacrificio
                        </span>
                        <h1 className="mb-6 animate-in font-heading text-5xl font-black text-white delay-100 duration-700 fade-in slide-in-from-bottom-6 md:text-6xl">
                            Nuestro Cuerpo Activo
                        </h1>
                        <p className="mx-auto max-w-2xl animate-in text-xl font-light text-white/80 delay-200 duration-700 fade-in slide-in-from-bottom-6">
                            Hombres y mujeres que entregan su tiempo y
                            profesionalismo para la seguridad de Puente Alto.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-20">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
                        {/* Placeholder list with premium cards */}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                        {/* Placeholder Icon or Image */}
                                        <svg
                                            className="h-12 w-12"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-brand-black/80 to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span className="text-xs font-bold tracking-wider text-brand-gold uppercase">
                                            Ver Perfil
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-bold text-gray-900 transition-colors group-hover:text-brand-green">
                                        Voluntario {i}
                                    </h3>
                                    <p className="mt-1 text-xs tracking-wide text-gray-500 uppercase">
                                        Cargo / Especialidad
                                    </p>
                                    <div className="mx-auto mt-3 h-0.5 w-8 scale-0 bg-brand-gold transition-transform duration-300 group-hover:scale-100"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}
