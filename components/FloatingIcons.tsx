import { Code, Braces, Cpu, Terminal } from "lucide-react"
import { SiAngular, SiCss3, SiHtml5, SiNextdotjs, SiSpringboot } from "react-icons/si"

export function FloatingIcons() {
    return (
        <>
            {/* Angular */}
            <SiAngular
                className="
      absolute top-[22%] left-[8%]
      w-10 h-10
      text-red-500/40
      animate-float
    "
            />

            {/* Next.js */}
            <SiNextdotjs
                className="
      absolute top-[18%] right-[10%]
      w-9 h-9
      text-white/40
      animate-float delay-200
    "
            />

            {/* Spring Boot */}
            <SiSpringboot
                className="
      absolute top-[70%] left-[12%]
      w-10 h-10
      text-green-500/40
      animate-float delay-400
    "
            />

            {/* HTML */}
            <SiHtml5
                className="
      absolute bottom-[18%] right-[15%]
      w-9 h-9
      text-orange-500/40
      animate-float delay-600
    "
            />

            {/* CSS */}
            <SiCss3
                className="
      absolute top-[42%] left-[25%]
      w-9 h-9
      text-blue-500/40
      animate-float delay-800
    "
            />

            {/* Code */}
            <Code
                className="
      absolute bottom-[20%] left-[55%]
      w-10 h-10
      text-purple-500/30
      animate-float delay-1000
    "
            />

            {/* Terminal */}
            <Terminal
                className="
      absolute bottom-[30%] right-[40%]
      w-8 h-8
      text-violet-400/30
      animate-float delay-1200
    "
            />

            {/* Braces */}
            <Braces
                className="
      absolute top-[12%] left-[45%]
      w-12 h-12
      text-purple-600/30
      animate-float delay-1400
    "
            />

            {/* CPU */}
            <Cpu
                className="
      absolute top-[45%] right-[12%]
      w-9 h-9
      text-violet-500/40
      animate-float delay-1600
    "
            />
        </>

    )
}
