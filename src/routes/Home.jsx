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
        <div className="flex flex-row justify-between  bg-gray-100 gap-5 h-screen w-auto">
            <div className="flex flex-col pl-15 pt-5">
                <h1 className="text-3xl font-bold p-5 flex flex -row"><LiaCitySolid className="m-1 mr-1" /> {weather?.name}</h1>

                <div className="flex flex-row gap-9 p-2 border-t-1 ">
                    <div className="border-r-1 p-5  flex flex-col font-bold text-xl ">
                        <p className="flex flex-row"> Temp :<CiTempHigh className="m-1" /></p>
                        <p>{weather?.main?.temp} °C</p>

                    </div>
                    <div className="border-r-1 p-5  flex flex-col font-bold text-xl">
                        <p className="flex flex-row"> Max :<TbMathMax className="m-1" /></p>
                        <p> {weather?.main?.temp_max} °C</p>

                    </div>
                    <div className=" p-5  flex flex-col font-bold text-xl">
                        <p className="flex flex-row"> Min :<TbMathMin className="m-1" /></p>
                        <p>{weather?.main?.temp_min} °C</p>

                    </div>
                 


                </div>
                <div  className="text-xl font-bold p-5  flex gap-1 border-t-1">
                    <p className="flex "> <FaAudioDescription className="m-1"/> Description :</p>
                        <p className="font-thick ">{weather?.weather[0].description}</p>
                </div>

            </div>

            <div className="mt-">
                <WeatherMap />

            </div>




        </div>
    );
}