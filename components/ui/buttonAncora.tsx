import { ArrowDown } from "lucide-react";

export function ButtonAncora() {
    return (
        <button className="relative w-[4rem] h-[4rem] rounded-full p-[2px] 
                   bg-gradient-to-tr from-blue-300 via-blue-600 to-purple-400">

            <span className="flex w-full h-full items-center justify-center 
                   rounded-full bg-black text-white">
                <ArrowDown className="w-7 h-7" />
            </span>
        </button>
    )
}
