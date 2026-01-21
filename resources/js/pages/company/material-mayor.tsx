import WebsiteLayout from '@/layouts/website-layout';
import { Calendar, Droplets, User, Zap } from 'lucide-react';

export const units = [
    {
        id: 1,
        name: 'B-2',
        type: 'Bomba Primaria',
        brand: 'Renault',
        model: 'Camiva Midlum 220',
        image: '/images/B-2.jpg',
        description:
            'Especializada en combate de incendios estructurales. Cuenta con una capacidad de desalojo de 3.000 litros por minuto y equipamiento de rescate básico.',
        specs: [
            { label: 'Estanque', value: '4.000 litros', icon: Droplets },
            { label: 'Dotación', value: '8 + 1', icon: User },
            { label: 'Presión', value: '10 bar', icon: Zap },
            { label: 'Año', value: '2007', icon: Calendar },
        ],
    },
    {
        id: 2,
        name: 'R-2',
        type: 'Rescate Pesado',
        brand: 'Spartan',
        model: 'Swab Heavy Rescue',
        image: '/images/r-2.jpg',
        description:
            'Especializada en rescate vehicular y estructuras colapsadas. Cuenta con equipamiento hidráulico de última generación.',
        specs: [
            { label: 'Dotación', value: '8 + 1', icon: User },
            { label: 'Especialidad', value: 'Rescate Vehicular', icon: Zap },
            { label: 'Eslora', value: '10 metros', icon: Zap },
            { label: 'Año', value: '1995', icon: Calendar },
        ],
    },
    {
        id: 3,
        name: 'BX-2',
        type: 'Bomba Secundaria',
        brand: 'Pierce',
        model: 'Dash Dcab',
        image: '/images/bx-2.png',
        description:
            'Especializada en el abastecimiento de agua a otras unidades. Cuenta con una capacidad de 10.000 litros y equipamiento de rescate básico.',
        specs: [
            { label: 'Estanque', value: '2.750 litros', icon: Droplets },
            { label: 'Dotación', value: '8 + 1', icon: User },
            { label: 'Presión', value: '600 psi', icon: Zap },
            { label: 'Año', value: '1994', icon: Calendar },
        ],
    },
    {
        id: 4,
        name: 'Reliquia',
        type: 'Carro Reliquia',
        brand: 'Nissan',
        model: 'FL 680',
        image: '/images/RELIQUIA-NISSAN.jpg',
        description:
            'Este camión Nissan FL680, fabricado en 1966, es una verdadera joya de la ingeniería y un símbolo de la historia de nuestra compañía. Con su diseño robusto y clásico, representa la dedicación y el espíritu de servicio que han caracterizado a la Segunda Compañía de Bomberos de Puente Alto a lo largo de los años. A pesar de su antigüedad, este vehículo ha sido mantenido con orgullo y cuidado, sirviendo como un recordatorio tangible de nuestros orígenes y de la evolución de nuestra labor en la comunidad.',
        specs: [
            { label: 'Estanque', value: '2.000 litros', icon: Droplets },
            { label: 'Dotación', value: '8 + 1', icon: User },
            { label: 'Presión', value: '600 psi', icon: Zap },
            { label: 'Año', value: '1966', icon: Calendar },
        ],
    },
];
export default function MaterialMayor() {
    return (
        <WebsiteLayout
            title="Material Mayor"
            headerVariant="transparent"
            description="Conoce el material mayor de la Segunda Compañía de Bomberos Puente Alto. Nuestras unidades B-2, R-2 y BX-2 equipadas con tecnología de punta para el combate de incendios y rescate."
            keywords="material mayor, carros bomba, B-2, R-2, BX-2, puente alto, rescate pesado, camiva, spartan, pierce"
        >
            {/* Page Header */}
            <div className="relative -mt-[80px] flex h-[400px] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero.png"
                        className="h-full w-full object-cover brightness-50 contrast-125 filter"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-brand-green/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                </div>
                <div className="relative z-10 container mx-auto mt-20 px-4 text-center">
                    <h1 className="text-glow animate-in font-heading text-5xl font-black tracking-tighter text-white uppercase duration-700 slide-in-from-bottom-5 fade-in md:text-7xl">
                        Nuestra <span className="text-brand-green">Fuerza</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl animate-in text-xl font-light text-gray-300 delay-200 duration-700 slide-in-from-bottom-5 fade-in">
                        Tecnología y potencia al servicio de la comunidad.
                        Conoce nuestras unidades de última generación.
                    </p>
                </div>
            </div>

            <div className="relative min-h-screen overflow-hidden bg-brand-black py-20">
                {/* Decorative background logo */}
                <div className="pointer-events-none absolute top-0 right-0 opacity-[0.02]">
                    <img
                        src="/logo.svg"
                        className="h-[1000px] w-[1000px] rotate-12"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    <div className="space-y-32">
                        {/* Unit Block 1 */}
                        {units.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                            >
                                <div className="w-full md:w-1/2">
                                    <div className="group perspective-1000 relative">
                                        <div className="relative h-[400px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] hover:rotate-y-2">
                                            {/* Placeholder for real unit image */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-cover"
                                                />
                                                <span className="absolute top-4 right-4 text-9xl font-black text-white/5">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                        </div>
                                        {/* Badge */}
                                        <div className="absolute -top-6 -left-6 z-20 flex h-24 w-24 items-center justify-center rounded-full border-4 border-brand-black bg-brand-green shadow-xl">
                                            <span className="font-heading text-3xl font-black text-white">
                                                {item.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h2 className="mb-2 text-sm font-bold tracking-widest text-brand-gold uppercase">
                                        {item.type}
                                    </h2>
                                    <h3 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl">
                                        {item.name}
                                    </h3>
                                    <h4 className="mb-2 font-heading text-xl font-bold text-brand-green md:text-2xl">
                                        {item.brand} {item.model}
                                    </h4>
                                    <p className="mb-8 text-lg leading-relaxed text-gray-400">
                                        {item.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        {item.specs.map((spec, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start space-x-3 rounded-lg border border-white/10 bg-white/5 p-4"
                                            >
                                                <spec.icon className="h-6 w-6 text-brand-green" />
                                                <div>
                                                    <span className="block font-bold text-white">
                                                        {spec.value}
                                                    </span>
                                                    <span className="text-xs text-gray-500 uppercase">
                                                        {spec.label}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}

// Importing icons locally to avoid errors if not globally available
