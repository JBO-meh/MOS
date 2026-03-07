import '../App.css'
import SearchBar from '../primary-comp/searchBar'
import cross from '../assets/images/cross.jpg'
import NavBar from '../primary-comp/navBar'
export default function Header() {
    return (
        <div className="flex items-center justify-between h-12 bg-transparent px-8 md-4 rounded-lg ">
            <div className="flex items-center gap-4">
                <img src={cross} alt="Map Of Saitns" className="h-8 w-auto mr-4 rounded-full " />
                <NavBar></NavBar>
            </div>
            
            <SearchBar />
        </div>
    )
}