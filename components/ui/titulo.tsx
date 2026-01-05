
import Image from "next/image";

interface TituloProps {
    titulo: string;
}

export default function Titulo({ titulo }: TituloProps) {
    return (
        <div className=" w-full flex justify-center items-center my-10">
            <div
                className="bg-gradient-to-tr from-blue-300 via-blue-600 to-purple-400 to-transparent
                 bg-clip-text text-transparent leading-none  font-extrabold tracking-tighter 
                  text-center px-4"
                style={{
                    fontSize: 'clamp(3rem, 8vw, 10rem)',
                    maxWidth: '65vw'
                }}
            >
                {titulo}
            </div>
        </div>
    );
}