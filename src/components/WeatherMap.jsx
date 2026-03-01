
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useContext, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { useMap } from "react-leaflet";
import { LiaCitySolid } from "react-icons/lia"

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
    const { weather } = useContext(WeatherContext);
    if (!weather || !weather.coord) { return <p>Loading map...</p>; }
    const lat = weather.coord.lat;
    const lon = weather.coord.lon;
    function ChangeMapView({ lat, lon }) {
        const map = useMap();
        useEffect(() => {
            map.setView([lat, lon], 10);


        }, [lat, lon])
        return null;

    }


    return (
        <div className="">


            <MapContainer
                center={[lat, lon]}
                zoom={10}
                style={{ height: "350px", width: "800px" }}

            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ChangeMapView lat={lat} lon={lon} />
                <Marker position={[lat, lon]}>
                    <Popup className="flex-1">
                        <LiaCitySolid />
                        <h3 className="flex-1">{weather.name}</h3>
                        <p className="flex-1">🌡 {weather.main.temp} °C</p>
                    </Popup>
                </Marker>




            </MapContainer>
        </div>

    )
}