import '../App.css'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export default function SearchBar() {
    return (
        <div className="flex items-center m-3 border-[0.5px] border-amber-50 rounded-full">
            {/* dropdown search */}
            <button className="bg-transparent rounded-r-lg rounded-l-full px-4 py-2 text-white hover:shadow-sm hover:shadow-white/60 transition-shadow duration-300"  > 
                <ChevronDownIcon className="h-4 w-4" />
            </button>
            {/* input */}
            <input type="text" className=" h-8 bg-transparent  rounded-none text-white px-4 py-2 hover:shadow-sm hover:shadow-white/60 transition-shadow duration-300"/>
            {/* search button */}
            <button  className=" bg-transparent rounded-l-lg rounded-r-full px-4 py-2 text-white hover:shadow-sm hover:shadow-white/60 transition-shadow duration-300"> 
                <MagnifyingGlassIcon className="h-4 w-4" /> 
            </button>
        </div>
    )
}