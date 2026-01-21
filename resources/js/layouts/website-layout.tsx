import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import PublicFooter from '../components/public-footer';
import PublicHeader from '../components/public-header';

interface Props {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    headerVariant?: 'transparent' | 'solid';
}

export default function WebsiteLayout({
    title,
    description = 'Segunda Compañía del Cuerpo de Bomberos de Puente Alto "Bomba Marcos Pérez". Disciplina y Abnegación al servicio de la comunidad desde 1935.',
    keywords = 'bomberos, puente alto, segunda compañia, rescate, incendio, emergencia, voluntarios',
    image = '/images/fachada.jpg',
    url = 'https://segundapuentealto.cl',
    headerVariant = 'solid',
    children,
}: PropsWithChildren<Props>) {
    const siteName = 'Segunda Compañía de Bomberos Puente Alto';
    const pageTitle = title ? `${title} - Segunda Compañía` : siteName;

    return (
        <div className="min-h-screen bg-brand-white pt-[80px] font-sans text-stone-800">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta
                    name="author"
                    content="Segunda Compañía de Bomberos Puente Alto"
                />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:locale" content="es_CL" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={url} />
                <meta property="twitter:title" content={pageTitle} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={image} />
            </Head>

            <PublicHeader variant={headerVariant} />

            <main>{children}</main>

            <PublicFooter />
        </div>
    );
}
