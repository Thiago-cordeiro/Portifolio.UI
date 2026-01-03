import { ArrowDown } from "lucide-react";

export function ButtonAncora() {
    return (
        <button
            className="w-[4rem] h-[4rem] p-2 flex items-center justify-center border-2 border-dashed border-purple-600 
                    text-white
                    rounded-full
                "
        >
            <ArrowDown className="w-7 h-7" />
        </button>

    )
}
