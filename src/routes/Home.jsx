import WeatherMap from "../components/WeatherMap";
import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";
import { LiaCitySolid } from "react-icons/lia";
import { CiTempHigh } from "react-icons/ci";
import { TbMathMax } from "react-icons/tb";
import { TbMathMin } from "react-icons/tb";
import { FaAudioDescription } from "react-icons/fa";


export default function Today() {
    const { weather } = useContext(WeatherContext)



    return (
        <div className="   flex flex-col   h-screen  bg-center"
  
        
        
        >
            <div className=" bg-black/40"></div>
            <div className="  flex flex-col pl-15 pt-5 items-center text-white">
                <h1 className="text-3xl font-bold p-5 flex flex-row"><LiaCitySolid className="m-1 mr-1" /> {weather?.name}</h1>

                <div className=" flex flex-row gap-9  border-1 backdrop-blur-sm ">
                    <div className="border-r-1 p-10  flex flex-row font-bold text-xl ">
                        <p className="flex flex-row"> Temp :<CiTempHigh className="m-1" /></p>
                        <p>{weather?.main?.temp} °C</p>

                    </div>
                    <div className="border-r-1 p-10  flex flex-row font-bold text-xl ">
                        <p className="flex flex-row"> Max :<TbMathMax className="m-1" /></p>
                        <p> {weather?.main?.temp_max} °C</p>

                    </div>
                    <div className=" p-10  flex flex-row font-bold text-xl">
                        <p className="flex flex-row"> Min :<TbMathMin className="m-1" /></p>
                        <p>{weather?.main?.temp_min} °C</p>

                    </div>
                 


                </div>
                <div  className="text-xl font-bold p-9  flex gap-1 ">
                    <p className="flex "> <FaAudioDescription className="m-1"/> Description :</p>
                        <p className="font-thick ">{weather?.weather[0].description}</p>
                </div>

            </div>

            <div className="  flex pl-17 justify-center">
                <WeatherMap />

            </div>




        </div>
    );
}