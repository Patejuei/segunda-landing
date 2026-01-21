import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function CreateEvent() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        event_date: new Date().toISOString().split('T')[0],
        time: '20:00',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/boletin/events');
    };

    return (
        <AdminLayout>
            <Head title="Nuevo Evento" />

            <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-border bg-card p-6 shadow-sm">
                <header className="mb-8">
                    <h2 className="text-xl font-bold text-card-foreground">
                        Crear Nuevo Evento
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Agenda un evento para el calendario del boletín.
                    </p>
                </header>

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <Label htmlFor="title">Título del Evento</Label>
                        <Input
                            id="title"
                            className="mt-1 block w-full"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="event_date">Fecha</Label>
                            <Input
                                id="event_date"
                                type="date"
                                className="mt-1 block w-full"
                                value={data.event_date}
                                onChange={(e) =>
                                    setData('event_date', e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.event_date}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <Label htmlFor="time">Hora</Label>
                            <Input
                                id="time"
                                type="time"
                                className="mt-1 block w-full"
                                value={data.time}
                                onChange={(e) =>
                                    setData('time', e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.time}
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
                        <Button disabled={processing}>Agendar Evento</Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
