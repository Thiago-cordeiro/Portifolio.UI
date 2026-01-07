import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardTimeLine } from "./ui/cardTimeline";

export function TimelineDemo() {
    const data = [
        {
            ano: "2020",
            title: "Início da Jornada",
            description: "Comecei minha jornada no desenvolvimento web.",
        },
        {
            ano: "2021",
            title: "Primeiros Projetos",
            description: "Desenvolvi meus primeiros projetos pessoais.",
        },
        {
            ano: "2022",
            title: "Estágio Profissional",
            description: "Consegui meu primeiro estágio em uma empresa de tecnologia.",
        }
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}