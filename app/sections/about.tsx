import Titulo from "@/components/ui/titulo";
import { ArrowRight, Code2, Download, Gauge, LayoutDashboard, Puzzle } from "lucide-react";

export default function AboutSection() {

    return (
        <div className="relative w-full flex flex-col gap-12 items-center py-20 px-4" id="about">

            <div className="absolute inset-0 bg-gradient-to-br from-[#05050a] to-[#010111] overflow-hidden">
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-blue-900/80 to-sky-900/30 blur-[100px]" />

                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-sky-900/30 to-blue-900/60 blur-[100px]" />
            </div>


            <div className="flex flex-col items-center z-10">
                <Titulo titulo="About" />
            </div>


            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* CARD ESQUERDO */}
                <div className="space-y-6 z-10">
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                        Criando experiências digitais <br />
                        com{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                            foco
                        </span>{" "}
                        e{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            excelência
                        </span>
                    </h1>

                    <div className="w-24 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

                    <p className="text-white/70 max-w-xl">
                        Olá! Sou o Thiago, tenho 20 anos e sou estudante de
                        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> Análise e Desenvolvimento de Sistemas </strong>
                        pela Universidade Federal do Paraná
                        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> (UFPR) </strong>.
                        Atualmente, atuo como Desenvolvedor
                        Front-end no <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">BNE VIP</strong>, onde trabalho na construção de interfaces <strong>modernas</strong>,
                        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">escaláveis</strong> e focadas na <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> experiência do usuário</strong>.
                        Sou apaixonado por tecnologia, e possuo 1 ano de experiência utilizando tecnologias como <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> React</strong>, <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> Next.js</strong>, <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> Angular</strong> e <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> Spring Boot</strong>.
                        Além do desenvolvimento sou guitarrista, e a música é uma grande parte da minha vida —
                        ela alimenta minha <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> Criatividade</strong>, <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> Disciplina</strong> e <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> Atenção</strong> aos detalhes.

                    </p>



                    {/* BOTÕES */}
                    <div className="flex gap-4 mt-8">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition">
                            <Download size={18} />
                            Download CV
                        </button>

                        <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition">
                            Contatos
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* CONTEÚDO DIREITO */}
                <div className="relative rounded-2xl  shadow-xl">
                    <div className="overflow-hidden w-full h-37 rounded-t-3xl bg-black/50">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                        >
                            <source src="backgroundDois.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <Feature
                            icon={<Code2 />}
                            title="Back-end Development"
                            desc="Desenvolvimento de APIs em Java com Spring Boot."
                        />
                        <Feature
                            icon={<LayoutDashboard />}
                            title="Front-end Development"
                            desc="Experiencia com Pixel-perfect, aplicações corporativas e landing pages."
                        />
                        <Feature
                            icon={<Gauge />}
                            title="Seo e Desempenho"
                            desc="Otimização para motores de busca e performance de Páginas."
                        />
                        <Feature
                            icon={<Puzzle />}
                            title="Resolução de Problemas"
                            desc="Pensamento crítico e habilidades analíticas para resolver desafios complexos."
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    function Feature({
        icon,
        title,
        desc,
    }: {
        icon: React.ReactNode;
        title: string;
        desc: string;
    }) {
        return (
            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition">
                <div className="text-blue-400">{icon}</div>
                <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-sm text-white/60">{desc}</p>
                </div>
            </div>
        );
    }
}