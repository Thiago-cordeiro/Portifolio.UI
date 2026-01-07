import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardTimeLine } from "./ui/cardTimeline";
import { icons, Subtitles } from "lucide-react";

export function TimelineDemo() {
    const data = [
        {
            ano: "2023",
            title: "Entrei na UFPR 🥰",
            subtitles: "Análise e Desenvolvimento de Sistemas",
            description: "Comecei minha jornada na Ti, e desenvolvi meus primeiros projetos pessoais.",
            tecnologias: [
                "HTML5", "CSS3", "JavaScript", "REDES DE COMPUTADORES", "ALGORITMOS", "LOGICA DE PROGRAMACAO"
            ]
        },
        {
            ano: "2024",
            title: "Log Inovação 🏆",
            subtitles: "Desenvolvedor Web | Primeiro Emprego",
            description: "Desenvolvi um site que ajudou a melhorar a presença online da empresa, melhorando o alcance dos clientes.",
            tecnologias: [
                "HTML5", "CSS3", "JavaScript"
            ]
        },
        {
            ano: "2025",
            title: "BNE - Banco Nacional de Empregos🚀",
            subtitles: "Frontend Developer | Estágio",
            description: "Consegui meu primeiro estágio em uma das melhores empresas de soluções para RH e banco de empregos. Durante essa experiência, atuei com desenvolvimento de aplicações focadas em SEO e performance, além de adquirir conhecimentos práticos em CI/CD, Angular, Next.js, arquitetura de microsserviços, C#, Docker e SQL Server.",
            tecnologias: [
                "C#", "NEXT JS", "Docker", "SQL SERVER", "ANGULAR", "REACT", "TYPESCRIPT", "tailwindcss"
            ]
        }
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}