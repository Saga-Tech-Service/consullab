"use client"
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


    return (
        <Chrono
            items={items}
            mode="VERTICAL"
            cardHeight={100}
            cardWidth={300}
            theme={{
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
