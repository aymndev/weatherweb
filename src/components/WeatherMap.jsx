import { Map } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"



export default function weatherMap({weather}) {

    return (
        <MapContainer
            center={[34.0331, -5.0003]} // Morocco Fes example
            zoom={10}
            style={{ height: "500px", width: "900px" }}

        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        
  


        </MapContainer>

    )
}