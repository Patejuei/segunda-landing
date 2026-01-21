import WebsiteLayout from '@/layouts/website-layout';

export default function Historia() {
    return (
        <WebsiteLayout title="Nuestra Historia" headerVariant="transparent">
            <div className="min-h-screen bg-brand-white">
                {/* Header with parallax feel */}
                <div
                    className="relative -mt-[80px] flex h-[60vh] items-center justify-center overflow-hidden bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: "url('/images/hero.png')" }}
                >
                    <div className="absolute inset-0 bg-brand-black/70 mix-blend-multiply"></div>
                    <div className="relative z-10 px-4 text-center">
                        <span className="mb-4 block animate-in text-sm font-bold tracking-[0.5em] text-brand-gold uppercase duration-1000 fade-in slide-in-from-bottom-4">
                            Legado
                        </span>
                        <h1 className="mb-6 animate-in font-heading text-6xl font-black tracking-tighter text-white uppercase delay-100 duration-1000 fade-in slide-in-from-bottom-8 md:text-8xl">
                            Nuestra Historia
                        </h1>
                        <div className="mx-auto h-1 w-24 bg-brand-green"></div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-24">
                    <div className="mx-auto max-w-4xl">
                        <div className="prose prose-lg prose-stone mx-auto leading-loose text-gray-600 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-brand-gold">
                            <p>
                                Fundada el [Fecha de Fundación], la Segunda
                                Compañía ha sido un pilar fundamental en la
                                seguridad de Puente Alto. Desde nuestros
                                humildes comienzos, donde el valor suplía la
                                falta de recursos, hasta convertirnos en una
                                unidad moderna y equipada, el espíritu de
                                servicio jamás ha vacilado.
                            </p>
                            <p>
                                Nuestra historia no es solo una cronología de
                                emergencias atendidas, sino el relato vivo de
                                hombres y mujeres que, generación tras
                                generación, han entregado lo mejor de sí por el
                                bienestar del prójimo.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative mt-24">
                            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-gray-200"></div>

                            {[
                                {
                                    year: '1935',
                                    title: 'Fundación',
                                    desc: 'Se constituye oficialmente la Segunda Compañía.',
                                },
                                {
                                    year: '1950',
                                    title: 'Primer Carro',
                                    desc: 'Llegada de la primera unidad motorizada.',
                                },
                                {
                                    year: '1985',
                                    title: 'Nuevo Cuartel',
                                    desc: 'Inauguración de las actuales dependencias.',
                                },
                                {
                                    year: '2024',
                                    title: 'Renovación',
                                    desc: 'Modernización completa de la flota vehicular.',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={item.year}
                                    className={`relative mb-16 flex items-center justify-between ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}
                                >
                                    <div className="w-5/12"></div>
                                    <div className="absolute left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-brand-gold shadow-lg">
                                        <div className="h-2 w-2 rounded-full bg-white"></div>
                                    </div>
                                    <div
                                        className={`w-5/12 rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}
                                    >
                                        <span className="pointer-events-none absolute top-4 right-4 z-0 text-4xl font-black text-brand-green/20">
                                            {item.year}
                                        </span>
                                        <div className="relative z-10">
                                            <span className="mb-1 block text-sm font-bold text-brand-gold">
                                                {item.year}
                                            </span>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}
