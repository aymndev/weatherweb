import WeatherMap from "../components/WeatherMap";
import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";


export default function Today() {
    const {weather}=useContext(WeatherContext)

   

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="text-3xl font-bold p-5">{weather?.name}</h1>
            <div className="mt-15">
                <WeatherMap className="" />

            </div>

           


        </div>
    );
}