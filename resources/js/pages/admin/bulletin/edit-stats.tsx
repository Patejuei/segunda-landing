import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface Props {
    stats: any;
}

export default function EditStats({ stats }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        id: stats?.id || null,
        edition_number: stats?.edition_number || '', // Added
        month_year: stats?.month_year || '',
        actos_count: stats?.actos_count || 0,
        capacitaciones_count: stats?.capacitaciones_count || 0,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/boletin/stats');
    };

    return (
        <AdminLayout>
            <Head title="Editar Estadísticas" />

            <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-border bg-card p-6 shadow-sm">
                <header className="mb-8">
                    <h2 className="text-xl font-bold text-card-foreground">
                        Actualizar Estadísticas del Mes
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Modifica los números que aparecen en el resumen mensual.
                    </p>
                </header>

                <form onSubmit={submit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="edition_number">
                                Número de Edición
                            </Label>
                            <Input
                                id="edition_number"
                                type="number"
                                className="mt-1 block w-full"
                                placeholder="Ej: 1"
                                value={data.edition_number}
                                onChange={(e) =>
                                    setData('edition_number', e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.edition_number}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <Label htmlFor="month_year">
                                Edición (Mes Año)
                            </Label>
                            <Input
                                id="month_year"
                                className="mt-1 block w-full"
                                placeholder="Ej: Enero 2026"
                                value={data.month_year}
                                onChange={(e) =>
                                    setData('month_year', e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.month_year}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="actos_count">Total Actos</Label>
                            <Input
                                id="actos_count"
                                type="number"
                                className="mt-1 block w-full"
                                value={data.actos_count}
                                onChange={(e) =>
                                    setData(
                                        'actos_count',
                                        parseInt(e.target.value),
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.actos_count}
                                className="mt-2"
                            />
                        </div>

                        {/* Field Removed */}

                        <div>
                            <Label htmlFor="capacitaciones_count">
                                Total Capacitaciones
                            </Label>
                            <Input
                                id="capacitaciones_count"
                                type="number"
                                className="mt-1 block w-full"
                                value={data.capacitaciones_count}
                                onChange={(e) =>
                                    setData(
                                        'capacitaciones_count',
                                        parseInt(e.target.value),
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.capacitaciones_count}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <Link
                            href="/admin/boletin"
                            className="mr-4 rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                        >
                            Cancelar
                        </Link>
                        <Button disabled={processing}>Guardar Cambios</Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
