
import Image from "next/image";

interface TituloProps {
    titulo: string;
}

export default function Titulo({ titulo }: TituloProps) {
    return (
        <div className=" w-full flex justify-center items-center">

            <div
                className="
                w-full
                text-center
                bg-gradient-to-tr from-blue-400 via-blue-600 to-purple-500
                bg-clip-text text-transparent
                font-extrabold tracking-tighter leading-[1]
                text-[clamp(4.8rem,15vw,10rem)]
                md:text-[clamp(5rem,8vw,10rem)]
                px-4
                break-words
            "
            >
                {titulo}
            </div>
        </div>
    );
}