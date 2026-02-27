import WeatherCard from "../components/WeatherCard";
import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import { WeatherContext } from "../context/WeatherContext";

export default function Today() {
    const {city,setWeather}=useContext(WeatherContext);
 

    return (
        <div className="flex flex-col h-screen justify-center items-center">
                <div>
               

                </div>
                <h1 className="text-center text-2xl pt-15 font-bold" >Today </h1>
                
                <div className="flex flex flex-col  h-screen justify-center  items-center">
                
                <WeatherCard city={city} setWeather={setWeather}  />

                </div>
                

            
            

        </div>
       

    );
}