"use client"
import { useEffect } from 'react';
import { Chrono } from 'react-chrono';

const Timeline = () => {
    const items = [
        {
            title: "2023",
            cardTitle: "Começamos o nosso percurso",
            cardSubtitle: "Consultoria jurídica",
            cardDetailedText: "Começamos o nosso percurso no mundo da consultoria jurídica.",
        },
        {
            title: "2024",
            cardTitle: "Introduzimos a formação",
            cardSubtitle: "Formação",
            cardDetailedText: "Introduzimos a formação no conjunto de trabalhos que prestamos.",
        },
        {
            title: "2024",
            cardTitle: "Integração no Grupo Lab",
            cardSubtitle: "Grupo Lab",
            cardDetailedText: "Integrámos oficialmente o conjunto de empresas do Grupo Lab.",
        },
    ];

    // Hook para modificar os textos dos botões após o componente ser montado
    // useEffect(() => {
    //     const translateButtons = () => {
    //         const span = document.querySelectorAll('span');
    //         // biome-ignore lint/complexity/noForEach: <explanation>
    //         span.forEach((span) => {
    //             if (span.innerHTML.includes('Jump to')) {
    //                 span.innerHTML = span.innerHTML.replace('Jump', 'Saltar');
    //             }
    //             if (span.innerHTML.includes('Change layout')) {
    //                 span.innerHTML = span.innerHTML.replace('Back', 'Voltar');
    //             }
    //             if (span.innerHTML.includes('Next')) {
    //                 span.innerHTML = span.innerHTML.replace('Next', 'Próximo');
    //             }
    //         });
    //     };

    //     translateButtons();
    // }, []);

    return (
        <Chrono
            items={items}
            mode="VERTICAL"
            cardHeight={100}
            cardWidth={300}
            theme={{
                // primary: "#d1a15f",
                secondary: "#334e68",
                cardBgColor: "transparent",
                cardForeColor: "#334e68"
            }}
            buttonTexts={{
                first: "Pular para o primeiro",
                last: "Pular para o último",
                next: "Próximo",
                previous: "Voltar",
            }}
        />
    );
}

export default Timeline;
