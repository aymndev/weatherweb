import WeatherCard from "../components/WeatherCard";
import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Today() {
    const [city,setCity]=useState("London");

    return (
        <div className="flex flex-col h-screen justify-center items-center">
                <div>
                <NavBar setCity={setCity}/>

                </div>
                <h1 className="text-center text-2xl pt-15 font-bold" >Today </h1>
                
                <div className="flex flex flex-col  h-screen justify-center  items-center">
                
                <WeatherCard city={city} />

                </div>
                

            
            

        </div>
       

    );
}