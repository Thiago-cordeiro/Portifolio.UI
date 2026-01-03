
import Image from "next/image";

interface TituloProps {
    titulo: string;
}

export default function Titulo({ titulo }: TituloProps) {
    return (
        <div className="w-full flex justify-around items-center mt-20">
            <hr className="flex-1 border-1 border-gray-900" />
            <h1 className="text-4xl font-bold mx-4">{titulo}</h1>
            <hr className="flex-1 border-1 border-gray-900" />
        </div>
    );
}