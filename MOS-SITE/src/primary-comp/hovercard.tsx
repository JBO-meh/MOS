import "../App.css";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function HoverCard({ params }: { params: any }) {
    return (
        <div className="text-white inline-full rounded-r-2xl bg-gradient-to-b from-sky-950 from-75% to-amber-100 to-130% hover:shadow-sm p-2 rounded-b-xl hover:shadow-black/60 transition-shadow duration-300">
            <h6 className="border-b border-gray-500/20">{params.name}</h6>
            <p className="border-b border-gray-500/20">{params.birth_date} - {params.death_date}</p>
            <div className="flex flex-row justify-between items-center">
                <a href={params.article} className="text-amber-50"> visit his page ! </a>
                <LinkIcon className="h-4 w-4 text-amber-50" />
            </div>
            
        </div>
    )
}