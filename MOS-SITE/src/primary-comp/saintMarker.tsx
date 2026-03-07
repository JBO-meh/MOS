import "../App.css";
import { Marker, Popup } from "react-leaflet";
import HoverCard from "./hovercard";

interface SaintMarkerProps {
    position: [number, number];
    params: any;
    setCurrentSaint: (s: any) => void;
}

export default function SaintMarker( { position, params, setCurrentSaint }: SaintMarkerProps ) {
    return (
        <Marker position={position} eventHandlers={
                {popupopen: () => {setCurrentSaint(params); console.log(params);}}
            }>
            <Popup>
                <HoverCard params={params} />
            </Popup>
        </Marker>
    )
}