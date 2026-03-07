import { useState } from "react";
import "../App.css";
import ParamsMenu from "../primary-comp/ParamsMenu";
import CheckBoxList from "../primary-comp/filters/checkBoxList";
import SaintCard from "../primary-comp/saintcard";


export default function Sidebar( { currentSaint }: { currentSaint: any }) {
    let size = "auto";
    let canonicalParams = ["Blessed","Servant of God","Venerable","Saint","Martyr","Prophet","Other"];
    const [viewing, setViewing] = useState(false);
    const [parametring, setParametring] = useState(true);
    const [correcting, setCorrecting] = useState(false);

    return (
        <div className={` h-full ${size} bg-transparent rounded-lg flex flex-col justify-items-start`}>
            <ParamsMenu 
                viewing={viewing}
                parametring={parametring}
                correcting={correcting}
                setViewing={setViewing}
                setParametring={setParametring}
                setCorrecting={setCorrecting}
            />
            {parametring && <div className="flex flex-col items-start border-l border-white/20 w-full mt-2 pl-0">
                <h3 className="text-white text-sm font-medium pl-1 mb-2">Canonical Parameters</h3>
                <CheckBoxList params={canonicalParams} />
            </div>}
            {correcting && <div className="flex flex-col items-start border-l border-white/20 w-full mt-2 pl-0">
                
                
            </div>}
            {viewing && currentSaint && <div className="flex flex-col items-start border-l border-white/20 w-full mt-2 pl-0">
                <SaintCard params={currentSaint} />
            </div>} 
        
            
        </div>
    )
}