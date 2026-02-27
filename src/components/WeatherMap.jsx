
import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet"
import { useContext, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";
import {useMap} from "react-leaflet";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});


export default function WeatherMap() {
    const {weather}=useContext(WeatherContext);
    if (!weather || !weather.coord ){return <p>Loading map...</p>;}
    const lat=weather.coord.lat;
    const lon=weather.coord.lon;
    function ChangeMapView({lat,lon}){
        const map=useMap();
        useEffect(()=>{
            map.setView([lat,lon],10);
            

        },[lat,lon])
        return null;

    }


    return (
        <MapContainer
            center={[lat, lon]} // Morocco Fes example
            zoom={10}
            style={{ height: "500px", width: "900px" }}

        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeMapView lat={lat} lon={lon}/>
            <Marker position={[lat, lon]}>
                <Popup>
                    <h3>{weather.name}</h3>
                    <p>🌡 {weather.main.temp} °C</p>
                </Popup>
            </Marker>
        
  


        </MapContainer>

    )
}