"use client";
import { FloatingIcons } from "@/components/FloatingIcons";
import RotatingText from "@/components/RotatingText";
import { ButtonAncora } from "@/components/ui/buttonAncora";
import { StarGitHub } from "@/components/ui/buttonStarGithub";
import { useEffect, useState } from "react";

export default function HomeSection() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const hardskills = [
        "NEXT JS",
        "REACT",
        "NODE JS",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "JAVA",
        "SPRING BOOT",
        "ANGULAR"
    ]

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center dark:bg-black overflow-hidden">

            <FloatingIcons />

            <div className="max-w-4xl text-center absolute max-w-[90%]">

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                    Densenvolvedor <br />
                    <RotatingText
                        texts={hardskills}
                        mainClassName="px-2 sm:px-2 md:px-3 text-purple-600 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </h1>

                <div className="mt-4 font-bold flex items-center justify-center gap-2 text-sm text-green-300">
                    <span className="h-2 w-2 rounded-full bg-green-500 " />
                    Disponível para oportunidades
                </div>

                <p className="mx-auto mt-8 max-w-2xl text-base text-neutral-300 md:text-lg">
                    Bem-vindo ao meu portfólio. Sou o Thiago, desenvolvedor front-end focado em criar interfaces modernas, responsivas e bem estruturadas.
                </p>

                <div className="mt-8 flex items-center justify-center">
                    <StarGitHub></StarGitHub>
                </div>

            </div>

            <div className="absolute bottom-10">
                <ButtonAncora ></ButtonAncora>
            </div>

        </div>
    );
}
