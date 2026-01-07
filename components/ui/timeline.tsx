"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Titulo from "./titulo";
import { CardTimeLine } from "./cardTimeline";

interface TimelineEntry {
  ano?: string;
  title?: string;
  description?: string;
  className?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      setHeight(lineRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#010111] to-[#05050a] overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-sky-900/30 to-blue-900/80 blur-[100px]" />
        <div className="absolute -top-1/3 -left-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-blue-900/60 to-sky-900/30 blur-[100px]" />
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center z-10 mb-20 relative flex flex-col items-center">
        <span className="text-sm tracking-widest text-blue-400 z-10">
          Minha Jornada
        </span>
        <Titulo titulo={"Expirence"}></Titulo>
      </div>

      {/* Timeline */}
      <div ref={lineRef} className="relative max-w-6xl mx-auto">
        {/* Central line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-neutral-700">
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"
          />
        </div>

        {/* Items */}
        <div className="space-y-32">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                // Alterado para justify-center para focar os cards no meio
                className={`relative flex items-center justify-center w-full`}
              >
                {/* Marker */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-sm font-semibold text-blue-400">
                    {index + 1}
                  </div>
                </div>

                {/* Wrapper do Card para controle de distância */}
                <div className={`w-full flex ${isLeft ? "justify-end pr-12" : "justify-start pl-12"}`}>
                  <div className="max-w-md w-full">
                    {/* Ajuste o 'max-w-md' (médio) para 'max-w-sm' (mais perto) 
               ou 'max-w-xs' (muito perto) conforme sua necessidade.
            */}
                    <CardTimeLine
                      ano={item.ano}
                      title={item.title}
                      description={item.description}
                      isLeft={isLeft}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
