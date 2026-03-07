import "../App.css"

export default function MenuBut( { href, text }: { href: string; text: string }) {
    return (
        <>
            <a href={href} className="rounded-full px-4 py-2 text-white hover:shadow-sm hover:shadow-white/60 transition-shadow duration-300">{text}</a>
        </>
    )
}