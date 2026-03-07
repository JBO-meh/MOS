import '../App.css'
import MenuBut from './menuBut'

export default function NavBar() {
    const links = [
    { label: "About us", url: "https://github.com/JBO-meh/MOS" },
    { label: "Gallery", url: "https://www.flickr.com/groups/gods_creation/" },
    { label: "Map", url: "http://localhost:5173/" },
  ];

    return (
        <div className='flex items-center justify-center gap-4 ' >
            {links.map((link, index) => (
                <MenuBut key={index} href={link.url} text={link.label} />
            ))}
        </div>
    )
}