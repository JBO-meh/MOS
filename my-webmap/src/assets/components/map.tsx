import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";
import Sidebar from "./components-t2/sidebar";
// Fix default icon issue in many React setups
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function BasicMap() {
  return (
    <div className="flex flex-col md:flex-row h-full w-min-auto">
      <Sidebar/>
      <MapContainer
        center={[48.8566, 2.3522]} // Paris
        zoom={13}
        className="MapContainer"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        <Marker position={[48.8566, 2.3522]}>
          <Popup>Hello from Paris</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}