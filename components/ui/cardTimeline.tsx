"use client";
import React from "react";


interface CardTimeLineProps {
    ano?: string;
    title?: string;
    description?: string;
    isLeft?: boolean;
}

export const CardTimeLine = ({
    ano,
    title,
    description,
    isLeft,
}: CardTimeLineProps) => {
    return (

        <div className={`relative z-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg ${isLeft ? "ml-auto text-left" : "mr-auto text-right"}`}>

            <div className="absolute inset-0 bg-gradient-to-br from-[#010111] to-[#05050a] overflow-hidden rounded-2xl">
                <div className="absolute -top-1/3 -right-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-sky-900/30 to-blue-900/80 blur-[100px]" />
                <div className="absolute -top-1/3 -left-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-blue-900/60 to-sky-900/30 blur-[100px]" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4 z-10 relative">
                {ano}

                <div>
                    <h3 className="text-white font-semibold leading-tight">
                        {title}
                    </h3>
                    <p className="text-sm text-white/60">
                        Product Designer | Framer Enthusiast
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-white/70 leading-relaxed mb-6 z-10 relative">
                {description}
            </p>

            {/* Actions */}
            <div className="flex gap-3 z-10 relative">
                <button className="px-4 py-2 rounded-full text-sm font-medium
      bg-white/10 text-white hover:bg-white/20 transition">
                    Follow
                </button>

                <button className="px-4 py-2 rounded-full text-sm font-medium
      bg-white/5 text-white/80 border border-white/10
      hover:bg-white/10 hover:text-white transition">
                    DMs Open
                </button>
            </div>
        </div>

    );
};
