import WebsiteLayout from '@/layouts/website-layout';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    ChevronRight,
    Clock,
    Instagram,
    Shield,
    ShieldCheck,
    Users,
} from 'lucide-react';
import { units } from './company/material-mayor';

export default function Welcome() {
    return (
        <WebsiteLayout
            title="Inicio"
            headerVariant="transparent"
            description="Bienvenidos a la Segunda Compañía del Cuerpo de Bomberos de Puente Alto. Bomba Marcos Pérez. Somos profesionales de la emergencia al servicio de la comunidad."
            keywords="bomberos, puente alto, segunda compañia, emergencia, rescate vehicular, incendio estructural"
        >
            {/* Hero Section */}
            <section className="relative -mt-[80px] flex h-screen items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/fachada.jpg"
                        alt="Bomberos en acción"
                        className="h-full w-full scale-105 animate-in object-cover duration-[2000ms] zoom-in-50 fade-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-green/80 to-black/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-60" />
                </div>

                <div className="relative z-10 container mx-auto mt-20 px-4 text-center">
                    <div className="mb-8 inline-flex animate-in items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-gold uppercase backdrop-blur-md delay-100 duration-700 fade-in slide-in-from-bottom-4">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-gold"></span>
                        <span>Siempre Alerta • 24/7</span>
                    </div>

                    <h1 className="text-glow mb-6 animate-in font-heading text-6xl leading-none font-black tracking-tighter text-white uppercase delay-200 duration-700 fade-in slide-in-from-bottom-8 md:text-8xl">
                        Segunda <br />{' '}
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Compañía
                        </span>
                    </h1>

                    <p className="mx-auto mb-12 max-w-2xl animate-in py-4 text-xl font-light text-gray-200 delay-300 duration-700 fade-in slide-in-from-bottom-8 md:text-2xl">
                        Cuerpo de Bomberos de Puente Alto
                    </p>

                    <div className="flex animate-in flex-col justify-center gap-6 delay-500 duration-700 fade-in slide-in-from-bottom-8 md:flex-row">
                        <a
                            href="#contacto"
                            className="group relative overflow-hidden rounded-lg bg-brand-gold px-8 py-4 shadow-[0_0_20px_rgba(221,178,5,0.3)] transition-all hover:scale-105"
                        >
                            <div className="absolute inset-0 h-full w-full origin-left scale-x-0 bg-yellow-400/50 transition-transform duration-300 group-hover:scale-x-100"></div>
                            <span className="relative flex items-center font-bold tracking-wide text-brand-black uppercase">
                                Contáctanos{' '}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </a>
                        <a
                            href="#nosotros"
                            className="glass-panel flex items-center justify-center rounded-lg px-8 py-4 font-bold tracking-wide text-white uppercase transition-all hover:bg-white/20"
                        >
                            Saber Más
                        </a>
                    </div>
                </div>

                {/* Stats Ribbon */}
                <div className="absolute right-0 bottom-0 left-0 hidden border-t border-white/10 bg-brand-black/80 py-6 backdrop-blur-md md:block">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-4 divide-x divide-white/10">
                            {[
                                {
                                    icon: Clock,
                                    label: 'Fundada',
                                    value: '1935',
                                },
                                {
                                    icon: Users,
                                    label: 'Voluntarios',
                                    value: '50+',
                                },
                                {
                                    icon: ShieldCheck,
                                    label: 'Especialidad',
                                    value: 'Agua y Rescate',
                                },
                                { icon: Shield, label: 'Unidades', value: '3' },
                            ].map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center space-x-4 text-white"
                                >
                                    <stat.icon className="h-8 w-8 text-brand-gold opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="text-2xl leading-none font-bold">
                                            {stat.value}
                                        </span>
                                        <span className="text-xs tracking-widest text-gray-400 uppercase">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Asymmetrical About Section */}
            <section id="nosotros" className="relative bg-brand-white py-32">
                <div className="clip-diagonal absolute top-0 right-0 z-0 h-full w-1/3 bg-gray-50/50"></div>

                <div className="relative z-10 container mx-auto px-4">
                    <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
                        <div className="order-2 md:order-1 md:col-span-5">
                            <div className="group relative">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
                                    <img
                                        src="/images/hero.png"
                                        className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0"
                                        alt="Bomberos"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8">
                                        <p className="border-l-4 border-brand-gold pl-4 text-lg font-bold text-white">
                                            "Disciplina y Abnegación"
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-tl-3xl border-t-4 border-l-4 border-brand-green/30"></div>
                                <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-br-3xl border-r-4 border-b-4 border-brand-gold/30"></div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 md:col-span-7">
                            <h2 className="mb-4 flex items-center text-sm font-bold tracking-widest text-brand-gold uppercase">
                                <span className="mr-3 h-[2px] w-8 bg-brand-gold"></span>{' '}
                                Sobre Nosotros
                            </h2>
                            <h3 className="mb-8 font-heading text-5xl leading-tight font-black text-brand-black">
                                Guardianes de <br />
                                <span className="text-brand-green">
                                    Nuestra Comunidad
                                </span>
                            </h3>
                            <div className="prose prose-lg mb-8 text-gray-600">
                                <p className="mb-4">
                                    La Segunda Compañía del Cuerpo de Bomberos
                                    de Puente Alto representa décadas de
                                    tradición y servicio ininterrumpido. Nos
                                    caracterizamos por un entrenamiento riguroso
                                    y una vocación de servicio inquebrantable.
                                </p>
                                <p>
                                    Cada voluntario es un profesional dedicado,
                                    listo para arriesgarlo todo por la seguridad
                                    de sus vecinos.
                                </p>
                            </div>

                            <div className="mb-10 grid grid-cols-2 gap-6">
                                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                                    <ShieldCheck className="mb-4 h-8 w-8 text-brand-green" />
                                    <h4 className="mb-2 font-bold text-gray-900">
                                        Profesionalismo
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        Capacitación constante y certificación
                                        nacional.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                                    <Clock className="mb-4 h-8 w-8 text-brand-gold" />
                                    <h4 className="mb-2 font-bold text-gray-900">
                                        Respuesta Rápida
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        Tiempos de despacho optimizados.
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/company/historia"
                                className="inline-flex items-center border-b-2 border-brand-green pb-1 font-bold tracking-wide text-brand-black uppercase transition-colors hover:text-brand-green"
                            >
                                Conoce Nuestra Historia{' '}
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Units/Services Teaser - Dark Section */}
            <section className="relative overflow-hidden bg-brand-black py-32 text-white">
                {/* Decorative background logo */}
                <div className="pointer-events-none absolute top-1/2 -right-40 -translate-y-1/2 opacity-[0.03]">
                    <img src="/logo.svg" className="h-[800px] w-[800px]" />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    <div className="mb-16 flex flex-col items-end justify-between px-4 md:flex-row">
                        <div>
                            <h2 className="mb-4 text-sm font-bold tracking-widest text-brand-gold uppercase">
                                Nuestros Recursos
                            </h2>
                            <h3 className="font-heading text-4xl font-black text-white md:text-5xl">
                                Material Mayor
                            </h3>
                        </div>
                        <Link
                            href="/company/material-mayor"
                            className="hidden items-center rounded-full border border-white/20 px-6 py-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:inline-flex"
                        >
                            Ver todas las unidades{' '}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {units.map((item) => (
                            <div
                                key={item.id}
                                className="group relative h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-brand-green/20"
                            >
                                <div className="absolute inset-0 bg-stone-900/50 transition-colors group-hover:bg-stone-900/40"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                                    <h4 className="mb-2 translate-y-4 text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                                        Unidad {item.name}
                                    </h4>
                                    <p className="text-sm text-gray-400 opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link
                            href="/company/material-mayor"
                            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            Ver todas las unidades{' '}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Instagram/Social Widget Placeholder */}
            <section className="bg-brand-white py-24">
                <div className="container mx-auto px-4">
                    <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-[1px] shadow-2xl">
                        <div className="relative overflow-hidden rounded-[23px] bg-white p-12 text-center md:p-20">
                            <div className="animate-blob absolute top-0 right-0 h-64 w-64 rounded-full bg-pink-50 opacity-70 mix-blend-multiply blur-3xl filter"></div>
                            <div className="animate-blob animation-delay-2000 absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-50 opacity-70 mix-blend-multiply blur-3xl filter"></div>

                            <div className="relative z-10">
                                <Instagram className="mx-auto mb-6 h-12 w-12 text-pink-600" />
                                <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                                    Sigue nuestra actividad
                                </h3>
                                <p className="mx-auto mb-10 max-w-xl text-gray-500">
                                    Entérate de nuestras últimas emergencias,
                                    actividades y consejos de seguridad en
                                    nuestro Instagram oficial.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex transform items-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                                >
                                    @segundapuentealto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Contact Section */}
            <section
                id="contacto"
                className="relative flex h-[800px] items-center bg-stone-900"
            >
                {/* Styled Map Background (Static Image for now) */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/images/fachada.jpg"
                        className="h-full w-full object-cover brightness-50 contrast-125 grayscale"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    <div className="ml-auto md:w-1/2 lg:w-5/12">
                        <div className="rounded-2xl border border-white/10 bg-brand-black/90 p-10 shadow-2xl backdrop-blur-xl md:p-12">
                            <h2 className="mb-2 text-sm font-bold tracking-widest text-brand-gold uppercase">
                                Contacto
                            </h2>
                            <h3 className="mb-8 font-heading text-3xl font-bold text-white">
                                Estamos para servirte
                            </h3>

                            <form className="space-y-5">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="group">
                                        <input
                                            type="text"
                                            className="w-full border-b border-white/20 bg-white/5 px-0 py-3 text-white placeholder-gray-500 transition-colors focus:border-brand-gold focus:outline-none"
                                            placeholder="Nombre"
                                        />
                                    </div>
                                    <div className="group">
                                        <input
                                            type="email"
                                            className="w-full border-b border-white/20 bg-white/5 px-0 py-3 text-white placeholder-gray-500 transition-colors focus:border-brand-gold focus:outline-none"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="w-full border-b border-white/20 bg-white/5 px-0 py-3 text-white placeholder-gray-500 transition-colors focus:border-brand-gold focus:outline-none"
                                        placeholder="Asunto"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={4}
                                        className="w-full resize-none border-b border-white/20 bg-white/5 px-0 py-3 text-white placeholder-gray-500 transition-colors focus:border-brand-gold focus:outline-none"
                                        placeholder="Mensaje..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 w-full rounded-lg bg-brand-green py-4 font-bold tracking-wide text-white uppercase shadow-lg transition-colors hover:bg-brand-dark-green"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>

                            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">
                                <div className="text-sm text-gray-400">
                                    <p className="mb-1 font-bold text-white">
                                        Emergencias
                                    </p>
                                    <p>132</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </WebsiteLayout>
    );
}
