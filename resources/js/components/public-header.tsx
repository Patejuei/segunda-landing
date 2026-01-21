import { Link } from '@inertiajs/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PublicHeader({
    variant = 'transparent',
}: {
    variant?: 'transparent' | 'solid';
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        // If solid variant, always treated as "scrolled" style or just explicitly solid
        if (variant === 'solid') {
            setIsScrolled(true);
        } else {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // check initial
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [variant]);

    const getHeaderClasses = () => {
        if (variant === 'solid') {
            return 'bg-brand-green shadow-lg border-white/10 py-3';
        }
        return isScrolled
            ? 'bg-brand-green/90 backdrop-blur-md shadow-lg border-white/10 py-3'
            : 'bg-transparent py-6';
    };

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Noticias', href: '/boletin' },
        { name: 'Nosotros', href: '/#nosotros' },
        { name: 'Contacto', href: '/#contacto' },
    ];

    const companyLinks = [
        { name: 'Material Mayor', href: '/company/material-mayor' },
        // { name: 'Bomberos', href: '/company/bomberos' },
        { name: 'Oficialidad', href: '/company/oficialidad' },
        { name: 'Historia', href: '/company/historia' },
        // { name: 'Documentos', href: '/company/documentos' },
    ];

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 border-b border-transparent transition-all duration-500 ${isScrolled ? 'border-white/10 bg-brand-green/90 py-3 shadow-lg backdrop-blur-md' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link href="/" className="group flex items-center space-x-3">
                    <img
                        src="/images/02.svg"
                        alt="Insignia Segunda Compañía"
                        className="h-14 w-14 transform drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="flex flex-col">
                        <span className="font-heading text-lg leading-tight font-bold tracking-wider text-white uppercase transition-colors group-hover:text-brand-gold">
                            Segunda Compañía
                        </span>
                        <span className="text-xs font-medium tracking-widest text-brand-gold uppercase">
                            Puente Alto
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="group relative text-sm font-medium tracking-wide text-white/90 uppercase transition-colors duration-200 hover:text-white"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className="group flex items-center space-x-1 text-sm font-medium tracking-wide text-white/90 uppercase transition-colors duration-200 hover:text-white focus:outline-none">
                                <span>Compañía</span>
                                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content
                                className="z-50 min-w-[220px] animate-in rounded-lg border border-gray-100 bg-white p-2 shadow-xl duration-300 fade-in slide-in-from-top-2"
                                sideOffset={10}
                            >
                                {companyLinks.map((link) => (
                                    <DropdownMenu.Item
                                        key={link.name}
                                        className="outline-none"
                                    >
                                        <Link
                                            href={link.href}
                                            className="block cursor-pointer rounded-md px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-brand-green/5 hover:text-brand-green"
                                        >
                                            {link.name}
                                        </Link>
                                    </DropdownMenu.Item>
                                ))}
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="p-2 text-white transition-colors hover:text-brand-gold md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-8 w-8" />
                    ) : (
                        <Menu className="h-8 w-8" />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="absolute w-full animate-in border-t border-white/10 bg-brand-green shadow-2xl duration-300 slide-in-from-top-5 md:hidden">
                    <div className="flex flex-col space-y-6 p-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-heading text-xl font-bold tracking-wider text-white uppercase hover:text-brand-gold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="border-t border-white/10 pt-4">
                            <span className="mb-4 block text-xs font-bold tracking-widest text-brand-gold uppercase">
                                Compañía
                            </span>
                            <div className="grid grid-cols-1 gap-4">
                                {companyLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block pl-4 text-lg text-white/80 hover:text-white"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
