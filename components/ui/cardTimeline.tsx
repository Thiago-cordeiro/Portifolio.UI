"use client";
import { sub } from "motion/react-client";
import React from "react";


interface CardTimeLineProps {
    ano?: string;
    title?: string;
    description?: string;
    subtitles?: string;
    isLeft?: boolean;
    tecnologias?: string[];
}

export const CardTimeLine = ({
    ano,
    title,
    description,
    isLeft,
    subtitles,
    tecnologias = []
}: CardTimeLineProps) => {
    return (

        <div className={`relative z-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg ${isLeft ? "ml-auto text-left" : "mr-auto text-right"}`}>

            <div className="rounded-2xl absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18)_0%,rgba(37,99,235,0)_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.20)_0%,rgba(168,85,247,0)_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.20)_0%,rgba(59,130,246,0)_60%)]" />
            </div>

            {/* Header */}
            <div className="flex items-start text-left gap-4 mb-4 z-10 relative">
                <div className="flex h-10 justify-center items-center">
                    {ano}
                </div>


                <div>
                    <h3 className="text-white font-semibold leading-tight">
                        {title}
                    </h3>
                    <p className="text-sm text-white/60">
                        {subtitles}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-left text-white/70 leading-relaxed mb-6 z-10 relative">
                {description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-2 z-10 relative">
                {tecnologias.map((tech, index) => (
                    <button
                        key={index}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/90 hover:bg-white/20 transition"
                    >
                        {tech}
                    </button>
                ))}
            </div>
        </div>

    );
};
