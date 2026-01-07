"use client";
import Titulo from "@/components/ui/titulo";
import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import dynamic from 'next/dynamic'

const RadialOrbitalTimeline = dynamic(
    () => import('@/components/ui/radial-orbital-timeline'),
    { ssr: false }
);

const timelineData = [
    {
        id: 1,
        title: "Log Inovação",
        date: "Jan 2024",
        content: "Landing page, que melhorou a divulgação da Log Inovação.",
        category: "Log Inovação",
        icon: Calendar,
        relatedIds: [2],
        status: "completed" as const,
        energy: 100,
    },
    {
        id: 2,
        title: "Análise de CV",
        date: "NOV 2025",
        content: "Ajuste de Desempenho e SEO para melhorar o ranqueamento.",
        category: "SEO",
        icon: FileText,
        relatedIds: [1],
        status: "completed" as const,
        energy: 90,
    },
    {
        id: 3,
        title: "Bom Vizinho APP",
        date: "Dec 2025",
        content: "Rede Social para conectar vizinhos e promover a colaboração local.",
        category: "Development",
        icon: Code,
        relatedIds: [2],
        status: "in-progress" as const,
        energy: 60,
    }
];

export function Projects() {
    return (
        <>
            <div className="m-20">
                <Titulo titulo="Projects"></Titulo>
                <RadialOrbitalTimeline timelineData={timelineData} />
            </div>

        </>
    );
}