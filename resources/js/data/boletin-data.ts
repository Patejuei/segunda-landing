export interface BulletinData {
    edition: {
        number: string;
        month: string;
        year: string;
    };
    stats: {
        actos: number;
        voluntarios: string;
        capacitaciones: number;
        promedio_respuesta: string;
    };
    featured_news: {
        title: string;
        category: string;
        image: string;
        content: string; // HTML supported
    };
    secondary_news: Array<{
        title: string;
        category: string;
        image?: string;
        content: string;
    }>;
    upcoming_events: Array<{
        day: string;
        month: string;
        title: string;
        time: string;
    }>;
    service_summary_text: string;
}

export const currentBulletin: BulletinData = {
    edition: {
        number: 'EDICIÓN N° 45',
        month: 'Enero',
        year: '2026',
    },
    stats: {
        actos: 42,
        voluntarios: '85%',
        capacitaciones: 12,
        promedio_respuesta: '3:45',
    },
    featured_news: {
        category: 'Institucional',
        title: 'Celebración del Nonagésimo Aniversario',
        image: '/images/hero.png',
        content: `
            <p class='drop-cap'>Con una solemne sesión solemne y desfile de honor, nuestra compañía celebró 90 años de servicio ininterrumpido a la comunidad de Puente Alto. La ceremonia, presidida por el Superintendente y con la presencia de autoridades locales, destacó la trayectoria de nuestros voluntarios insignes y el compromiso renovado de las nuevas generaciones.</p>
            <p>Durante el acto, se entregaron los premios de constancia por 5, 10, 20 y hasta 50 años de servicio, un testimonio vivo de la abnegación que caracteriza a la Segunda.</p>
        `,
    },
    secondary_news: [
        {
            category: 'Capacitación',
            title: 'Curso de Rescate Vehicular Avanzado',
            content:
                'Oficiales y voluntarios participaron en el curso de actualización de técnicas de extricación, incorporando el uso de nuevas herramientas hidráulicas y estabilización de vehículos pesados.',
        },
        {
            category: 'Comunidad',
            title: 'Campaña de Prevención de Incendios Forestales',
            content:
                'Junto a CONAF, realizamos un operativo de limpieza y concientización en los sectores de interfaz urbano-forestal, entregando dípticos informativos a los vecinos.',
        },
        {
            category: 'Comunidad',
            title: 'La Segunda Compañía se une al combate de los incendios de la región del Bio Bio',
            content:
                'Junto a CONAF, realizamos un operativo de limpieza y concientización en los sectores de interfaz urbano-forestal, entregando dípticos informativos a los vecinos.',
        },
    ],
    upcoming_events: [
        {
            day: '20',
            month: 'ENE',
            title: 'Academia Compañía',
            time: '20:00 hrs',
        },
        {
            day: '28',
            month: 'ENE',
            title: 'Sesión de Oficiales',
            time: '19:30 hrs',
        },
        {
            day: '03',
            month: 'FEB',
            title: 'Ejercicio General',
            time: '10:00 hrs',
        },
    ],
    service_summary_text:
        'Durante este mes, la compañía ha mantenido un alto estándar operativo, respondiendo a un total de 42 llamados de emergencia, destacando la participación en dos incendios estructurales de magnitud.',
};
