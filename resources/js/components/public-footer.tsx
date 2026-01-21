import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Noticias', href: '/boletin' },
    { name: 'Contacto', href: '/#contacto' },
];

const linksInteres = [
    { name: 'Cuerpo de Bomberos Puente Alto', href: 'https://www.cbpa.cl' },
    { name: 'Junta Nacional', href: 'https://www.bomberos.cl' },
    { name: 'Academia Nacional', href: 'https://www.anb.cl' },
];

export default function PublicFooter() {
    return (
        <footer className="relative overflow-hidden border-t border-white/5 bg-brand-black pt-20 pb-10 text-white">
            {/* Background Pattern */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-5">
                <img
                    src="/logo.svg"
                    className="absolute -top-40 -right-40 h-[800px] w-[800px]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <div className="mb-6 flex flex-col">
                            <img
                                src="/images/02.svg"
                                alt="Logo"
                                className="mb-4 h-16 w-16 opacity-90"
                            />
                            <span className="font-heading text-xl leading-tight font-bold tracking-wider text-brand-white uppercase">
                                Segunda Compañía
                            </span>
                            <span className="text-xs font-medium tracking-widest text-brand-gold uppercase">
                                Puente Alto
                            </span>
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-gray-400">
                            Comprometidos con el servicio y la protección de
                            nuestra comunidad desde 1935. Valor, Disciplina y
                            Abnegación.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:bg-brand-gold hover:text-brand-black"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:bg-brand-gold hover:text-brand-black"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <h4 className="mb-6 text-sm font-bold tracking-widest text-brand-gold uppercase">
                            Navegación
                        </h4>
                        <ul className="space-y-3">
                            {links.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="inline-block transform text-sm text-gray-400 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h4 className="mb-6 text-sm font-bold tracking-widest text-brand-gold uppercase">
                            Vínculos de Interés
                        </h4>
                        <ul className="space-y-3">
                            {linksInteres.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="inline-block transform text-sm text-gray-400 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h4 className="mb-6 text-sm font-bold tracking-widest text-brand-gold uppercase">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="mt-0.5 h-5 w-5 text-brand-green" />
                                <span className="text-sm text-gray-400">
                                    Av. Ernesto Alvear 347
                                    <br />
                                    Puente Alto, Santiago
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-brand-green" />
                                <span className="text-sm text-gray-400">
                                    132
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} Segunda Compañía
                        Bomberos Puente Alto.
                    </p>
                    <p className="mt-2 md:mt-0">Desarrollado con orgullo.</p>
                </div>
            </div>
        </footer>
    );
}
