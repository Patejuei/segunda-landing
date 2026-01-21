import WebsiteLayout from '@/layouts/website-layout';
import { ShieldAlert, Star } from 'lucide-react';

export default function Oficialidad() {
    return (
        <WebsiteLayout title="Oficialidad">
            <div className="min-h-screen bg-stone-50 pt-[80px]">
                <div className="relative overflow-hidden bg-brand-black py-24 text-center">
                    <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-10"></div>
                    <div className="relative z-10 container mx-auto px-4">
                        <h1 className="mb-4 font-heading text-5xl font-black tracking-tight text-white uppercase">
                            Mando y Administración
                        </h1>
                        <p className="mx-auto max-w-xl text-gray-400">
                            La estructura jerárquica que guía el destino de
                            nuestra compañía.
                        </p>
                    </div>
                </div>

                <div className="relative z-20 container mx-auto -mt-10 px-4 py-16">
                    {/* Oficiales de Mando Section */}
                    <div className="mb-24">
                        <div className="mb-12 flex items-center justify-center space-x-4">
                            <div className="h-[1px] w-12 bg-brand-gold"></div>
                            <h2 className="flex items-center text-2xl font-bold tracking-widest text-brand-black uppercase">
                                <ShieldAlert className="mr-3 h-6 w-6 text-brand-green" />
                                Oficiales de Mando
                            </h2>
                            <div className="h-[1px] w-12 bg-brand-gold"></div>
                        </div>

                        <div className="flex flex-col justify-center gap-10 md:flex-row">
                            {/* Capitán (Center Highlight) */}
                            <div className="max-w-sm md:w-1/3">
                                <div className="transform overflow-hidden rounded-2xl border-t-4 border-brand-green bg-white shadow-xl transition-transform duration-300 hover:-translate-y-2">
                                    <div className="relative h-64 bg-gray-200">
                                        {/* Image placeholder */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            Foto Capitán
                                        </div>
                                    </div>
                                    <div className="bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] p-8 text-center">
                                        <h3 className="mb-1 text-2xl font-bold text-brand-black">
                                            Nombre Apellido
                                        </h3>
                                        <p className="mb-4 text-sm font-black tracking-widest text-brand-green uppercase">
                                            Capitán
                                        </p>
                                        <div className="mx-auto mb-4 h-1 w-12 bg-brand-gold"></div>
                                        <p className="text-sm text-gray-500 italic">
                                            "Liderazgo operativo y disciplina en
                                            el servicio."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                            {/* Tenientes */}
                            {['Teniente 1°', 'Teniente 2°', 'Teniente 3°'].map(
                                (role, idx) => (
                                    <div
                                        key={role}
                                        className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all hover:shadow-lg"
                                    >
                                        <div className="flex h-48 items-center justify-center bg-gray-100 text-gray-300">
                                            Foto
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="text-lg font-bold text-gray-900">
                                                Nombre Apellido
                                            </h3>
                                            <p className="mt-1 text-xs font-bold tracking-wider text-brand-green uppercase">
                                                {role}
                                            </p>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Oficiales Administrativos Section */}
                    <div>
                        <div className="mb-12 flex items-center justify-center space-x-4">
                            <div className="h-[1px] w-12 bg-brand-gold"></div>
                            <h2 className="flex items-center text-2xl font-bold tracking-widest text-brand-black uppercase">
                                <Star className="mr-3 h-6 w-6 text-brand-gold" />
                                Oficiales Administrativos
                            </h2>
                            <div className="h-[1px] w-12 bg-brand-gold"></div>
                        </div>

                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                            {['Director', 'Secretario', 'Tesorero'].map(
                                (role) => (
                                    <div
                                        key={role}
                                        className="overflow-hidden rounded-xl border-t-4 border-brand-gold bg-white shadow-md transition-all hover:shadow-lg"
                                    >
                                        <div className="flex h-56 items-center justify-center bg-gray-100 text-gray-300">
                                            Foto
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="text-lg font-bold text-gray-900">
                                                Nombre Apellido
                                            </h3>
                                            <p className="mt-1 text-xs font-bold tracking-wider text-brand-gold uppercase">
                                                {role}
                                            </p>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}
