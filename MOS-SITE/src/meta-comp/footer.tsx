import "../App.css"

export default function Footer() {
    return (
        <div className="flex justify-between items-baseline px-9">
            <p className="text- text-white pb-4 ">© 2024 Map of Saints. All rights reserved.</p>
            <div className="flex justify-between gap-10 text-white">
                <a className="rounded-full px-4 py-2 text-white hover:shadow-sm hover:shadow-white/60 transition-shadow duration-300" href="https://fr.wikipedia.org/wiki/J%C3%A9sus-Christ"> Contact </a>
                <button className="rounded-full px-4 py-2 text-white hover:shadow-sm hover:shadow-white/60 transition-shadow duration-300"> Seen Errors ?</button>
            </div>
            
        </div>
    )
}