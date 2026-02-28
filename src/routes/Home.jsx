import WeatherMap from "../components/WeatherMap";
import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";
import { LiaCitySolid } from "react-icons/lia";
import { CiTempHigh } from "react-icons/ci";
import { TbMathMax } from "react-icons/tb";
import { TbMathMin } from "react-icons/tb";


export default function Today() {
    const { weather } = useContext(WeatherContext)



    return (
        <div className="flex flex-row justify-between  gap-5 h-screen w-auto">
            <div className="flex flex-col pl-5">
                <h1 className="text-3xl font-bold p-5 flex flex -row"><LiaCitySolid className="m-1 mr-1" /> {weather?.name}</h1>

                <div className="flex flex-row gap-9 p-2 ">
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

            </div>

            <div className="mt-">
                <WeatherMap />

            </div>




        </div>
    );
}