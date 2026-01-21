import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft, Save } from 'lucide-react';
import { FormEventHandler } from 'react';

import { route } from 'ziggy-js';

export default function CreateAct() {
    const { data, setData, post, processing, errors } = useForm({
        date: '',
        time: '',
        service_type: '',
        address: '',
        corner: '',
        commune: 'Puente Alto',
        vehicles: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.bulletin.acts.store'));
    };

    return (
        <AdminLayout>
            <Head title="Nuevo Acto" />

            <div className="mx-auto max-w-2xl">
                <div className="mb-8 flex items-center gap-4">
                    <Link
                        href={route('admin.bulletin.index')}
                        className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                        <ChevronLeft className="size-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">
                            Registrar Nuevo Acto
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Ingresa los detalles del servicio manualmente.
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={submit}
                    className="space-y-8 rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Date & Time */}
                        <div className="space-y-2">
                            <Label htmlFor="date">Fecha</Label>
                            <Input
                                id="date"
                                type="date"
                                value={data.date}
                                onChange={(e) =>
                                    setData('date', e.target.value)
                                }
                                required
                            />
                            {errors.date && (
                                <p className="text-sm text-red-500">
                                    {errors.date}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="time">Hora</Label>
                            <Input
                                id="time"
                                type="time"
                                value={data.time}
                                onChange={(e) =>
                                    setData('time', e.target.value)
                                }
                                required
                            />
                            {errors.time && (
                                <p className="text-sm text-red-500">
                                    {errors.time}
                                </p>
                            )}
                        </div>

                        {/* Key & Type */}
                        <div className="space-y-2">
                            <Label htmlFor="key">Clave (Tipo de Acto)</Label>
                            <Input
                                id="key"
                                placeholder="Ej: 10-0-1"
                                value={data.service_type}
                                onChange={(e) =>
                                    setData('service_type', e.target.value)
                                }
                                required
                            />
                            {errors.service_type && (
                                <p className="text-sm text-red-500">
                                    {errors.service_type}
                                </p>
                            )}
                        </div>

                        {/* Location */}
                        <div className="full-width space-y-2 md:col-span-2">
                            <Label htmlFor="address">Dirección</Label>
                            <Input
                                id="address"
                                placeholder="Calle Principal 123"
                                value={data.address}
                                onChange={(e) =>
                                    setData('address', e.target.value)
                                }
                                required
                            />
                            {errors.address && (
                                <p className="text-sm text-red-500">
                                    {errors.address}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="corner">Esquina (Opcional)</Label>
                            <Input
                                id="corner"
                                placeholder="Calle Secundaria"
                                value={data.corner}
                                onChange={(e) =>
                                    setData('corner', e.target.value)
                                }
                            />
                            {errors.corner && (
                                <p className="text-sm text-red-500">
                                    {errors.corner}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="commune">Comuna</Label>
                            <Input
                                id="commune"
                                value={data.commune}
                                onChange={(e) =>
                                    setData('commune', e.target.value)
                                }
                            />
                            {errors.commune && (
                                <p className="text-sm text-red-500">
                                    {errors.commune}
                                </p>
                            )}
                        </div>

                        {/* Vehicles */}
                        <div className="full-width space-y-2 md:col-span-2">
                            <Label htmlFor="vehicles">
                                Unidades Concurrentes
                            </Label>
                            <Input
                                id="vehicles"
                                placeholder="B-2, Q-2, R-2"
                                value={data.vehicles}
                                onChange={(e) =>
                                    setData('vehicles', e.target.value)
                                }
                            />
                            <p className="text-xs text-muted-foreground">
                                Separa las unidades con comas.
                            </p>
                            {errors.vehicles && (
                                <p className="text-sm text-red-500">
                                    {errors.vehicles}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <Button
                            type="submit"
                            disabled={processing}
                            className="min-w-[150px]"
                        >
                            <Save className="mr-2 size-4" />
                            Guardar Acto
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
