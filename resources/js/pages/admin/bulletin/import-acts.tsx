import { Button } from '@/components/ui/button'; // Assuming shadcn button
import AdminLayout from '@/layouts/admin-layout';
import { useForm } from '@inertiajs/react';
import { CheckCircle2, FileSpreadsheet } from 'lucide-react';
// Ensure these components exist or use basics if not.
// Checking basic layout.

export default function ImportActs() {
    const { data, setData, post, processing, errors, recentlySuccessful } =
        useForm({
            file: null as File | null,
        });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/boletin/acts/import', {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <div className="mx-auto max-w-xl py-12">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Importar Actos (Viper)
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Sube el archivo Excel generado por Viper para cargar los
                        actos del mes. El sistema leerá automáticamente la Hoja
                        2.
                    </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-10 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-zinc-800/50">
                            <FileSpreadsheet className="mb-4 h-12 w-12 text-green-500" />
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer text-center"
                            >
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                    Haz clic para seleccionar el archivo
                                </span>
                                <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    accept=".xlsx, .xls"
                                    className="sr-only"
                                    onChange={(e) =>
                                        setData(
                                            'file',
                                            e.target.files?.[0] || null,
                                        )
                                    }
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Solo archivos .xlsx o .xls
                                </p>
                            </label>
                            {data.file && (
                                <div className="mt-4 flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
                                    <CheckCircle2 className="h-4 w-4" />
                                    {data.file.name}
                                </div>
                            )}
                        </div>

                        {errors.file && (
                            <p className="text-center text-sm text-red-500">
                                {errors.file}
                            </p>
                        )}

                        <Button
                            type="submit"
                            disabled={processing || !data.file}
                            className="w-full"
                        >
                            {processing ? 'Importando...' : 'Importar Actos'}
                        </Button>

                        {recentlySuccessful && (
                            <p className="animate-in text-center text-sm font-medium text-green-600 fade-in">
                                ¡Importación completada con éxito!
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
