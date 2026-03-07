import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import SaintMarker from '../primary-comp/saintMarker';

interface MapProps {
  setCurrentSaint: (s: any) => void
}

export default function Map({ setCurrentSaint }: MapProps) {
  const position: [number, number] = [48.85, 2.35];
  const [saints, setSaints] = useState<any>([]);
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {saints.map((saint:any) => (
        <SaintMarker
          key={saint.id}
          position={[saint.deathlat, saint.deathlon]}
          params={saint}
          setCurrentSaint={setCurrentSaint}
        />
      ))}

      <MapEvents setSaints={setSaints} />
    </MapContainer>
  );
}

function MapEvents({ setSaints }: { setSaints: (s: any[]) => void }) {
  useMapEvent("dragend", async (e) => {
    const data = await Query(e.target);
    setSaints(data);
  });

  useMapEvent("zoomend", async (e) => {
    const data = await Query(e.target);
    setSaints(data);
  });

  return null;
}

async function Query(map: any) {
  const bbox = map.getBounds().toBBoxString();
  const res = await fetch("http://localhost:3000/query?bbox=" + bbox);
  const localSaints = await res.json();
  console.log(localSaints.features);
  return localSaints.features.map((s:any) =>{
    if (s.properties.deathlat && s.properties.deathlon) {
      return s.properties;
    }
  });
}