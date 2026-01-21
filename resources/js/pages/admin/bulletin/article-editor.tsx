import InputError from '@/components/input-error';
import RichTextEditor from '@/components/rich-text-editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Upload } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface Props {
    article?: any;
    mode: 'create' | 'edit';
}

export default function ArticleEditor({ article, mode }: Props) {
    const { data, setData, post, put, processing, errors } = useForm({
        title: article?.title || '',
        category: article?.category || '',
        content: article?.content || '',
        published_at: article?.published_at
            ? article.published_at.split('T')[0]
            : new Date().toISOString().split('T')[0],
        image: null as File | null,
        is_featured: article?.is_featured || false,
        _method: mode === 'edit' ? 'PUT' : 'POST',
    });

    const [previewImage, setPreviewImage] = useState<string | null>(
        article?.image_path || null,
    );

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (mode === 'create') {
            post('/admin/boletin/articles');
        } else {
            post(`/admin/boletin/articles/${article.id}`);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    return (
        <AdminLayout>
            <Head
                title={mode === 'create' ? 'Nueva Noticia' : 'Editar Noticia'}
            />

            <form onSubmit={submit} className="mx-auto max-w-5xl">
                {/* Top Toolbar (Wordpress Style) */}
                <div className="sticky top-0 z-10 mb-6 flex items-center justify-between rounded-xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/admin/boletin"
                            className="flex size-9 items-center justify-center rounded-full bg-accent text-muted-foreground transition hover:bg-muted"
                            title="Volver"
                        >
                            <ArrowLeft className="size-4" />
                        </Link>
                        <div>
                            <h1 className="text-lg leading-tight font-bold">
                                {mode === 'create'
                                    ? 'Nueva Noticia'
                                    : 'Editando Noticia'}
                            </h1>
                            <p className="text-xs text-muted-foreground">
                                {data.category || 'Sin categoría'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            variant="ghost"
                            className="text-muted-foreground"
                            onClick={() => window.history.back()}
                        >
                            Cancelar
                        </Button>
                        <Button
                            disabled={processing}
                            className="gap-2 bg-brand-green text-white hover:bg-brand-green/90"
                        >
                            <Save className="size-4" />
                            {mode === 'create' ? 'Publicar' : 'Actualizar'}
                        </Button>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Content Area */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Title Input (Large) */}
                        <div className="group relative">
                            <Input
                                id="title"
                                className="border-0 bg-transparent px-0 text-4xl font-black tracking-tight placeholder:text-muted-foreground/40 focus-visible:ring-0 md:text-5xl"
                                placeholder="Añade un título aquí"
                                value={data.title}
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                                required
                                autoFocus
                                maxLength={255}
                            />
                            <div className="mt-1 flex justify-between">
                                <InputError message={errors.title} />
                                <span
                                    className={`text-xs ${data.title.length >= 255 ? 'font-bold text-red-500' : 'text-muted-foreground'}`}
                                >
                                    {data.title.length}/255
                                </span>
                            </div>
                        </div>

                        {/* Content Editor area */}
                        <div className="min-h-[500px] rounded-lg border border-transparent bg-background/50 p-2 transition-colors focus-within:border-border focus-within:bg-background">
                            <RichTextEditor
                                content={data.content}
                                onChange={(content) =>
                                    setData('content', content)
                                }
                                placeholder="Escribe tu historia..."
                                className="min-h-[500px]"
                            />
                            <InputError
                                message={errors.content}
                                className="mt-1"
                            />
                        </div>
                    </div>

                    {/* Sidebar Settings */}
                    <div className="space-y-6">
                        {/* Publishing Settings */}
                        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                            <h3 className="mb-4 font-semibold text-foreground">
                                Configuración
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="published_at">
                                        Fecha de Publicación
                                    </Label>
                                    <Input
                                        id="published_at"
                                        type="date"
                                        className="mt-1.5"
                                        value={data.published_at}
                                        onChange={(e) =>
                                            setData(
                                                'published_at',
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.published_at}
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="category">Categoría</Label>
                                    <select
                                        id="category"
                                        className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        value={data.category}
                                        onChange={(e) =>
                                            setData('category', e.target.value)
                                        }
                                        required
                                    >
                                        <option value="">Seleccionar...</option>
                                        <option value="Institucional">
                                            Institucional
                                        </option>
                                        <option value="Capacitación">
                                            Capacitación
                                        </option>
                                        <option value="Emergencias">
                                            Emergencias
                                        </option>
                                        <option value="Comunidad">
                                            Comunidad
                                        </option>
                                    </select>
                                    <InputError
                                        message={errors.category}
                                        className="mt-1"
                                    />
                                </div>

                                <div className="flex items-center gap-2 pt-2">
                                    <input
                                        type="checkbox"
                                        id="is_featured"
                                        className="h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green"
                                        checked={data.is_featured}
                                        onChange={(e) =>
                                            setData(
                                                'is_featured',
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <Label
                                        htmlFor="is_featured"
                                        className="cursor-pointer"
                                    >
                                        Destacar Noticia
                                    </Label>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                            <h3 className="mb-4 font-semibold text-foreground">
                                Imagen Destacada
                            </h3>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted">
                                {previewImage ? (
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full flex-col items-center justify-center text-muted-foreground">
                                        <Upload className="mb-2 size-8 opacity-50" />
                                        <span className="text-xs">
                                            Subir imagen
                                        </span>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    className="absolute inset-0 cursor-pointer opacity-0"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                            </div>
                            {previewImage && (
                                <Button
                                    type="button"
                                    variant="link"
                                    className="mt-2 h-auto p-0 text-xs text-red-500"
                                    onClick={() => {
                                        setData('image', null);
                                        setPreviewImage(null);
                                    }}
                                >
                                    Eliminar imagen
                                </Button>
                            )}
                            <InputError
                                message={errors.image}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
