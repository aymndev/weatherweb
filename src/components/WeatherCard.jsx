import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { ThemeContext } from "../context/ThemeContext";
import { MdVisibility } from "react-icons/md";
import { WiBarometer } from "react-icons/wi";

import { WiHumidity } from "react-icons/wi";
import { IoIosSpeedometer } from "react-icons/io";





export default function WeatherCard() {

    const { isDark } = useContext(ThemeContext)


    const { weather, error } = useContext(WeatherContext)



    if (error) {
        return <p>{error}</p>
    }
    if (!weather) return <p>Loding...</p>

    return (
        <div className={` ${isDark ? "  text-black " : "text-black "}flex  text-white items-center `}>
            <div className="flex flex-col justify-center    w-auto p-5 font-bold  backdrop-blur-sm border-1  m-[90px] rounded-lg">

                <div className="text-xl">
                    <div className="flex flex-col  justify-between  border-b-1 ">
                        <p className="  m-1 p-1 text-3xl font-normal ">Weather in {weather?.name}</p>
                        <p className="  pl-2 text-3xl font-normal pt-5">{weather?.sys?.country}</p>
                        <div className="flex flex-row   ">



                            <p className="  pt-9 mr-10 pl-2 text-3xl font-normal ">{weather?.main?.temp} °C</p>

                            <img
                                className=""
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="weather icon"
                            />

                        </div>




                    </div>



                </div>
                <div>
                    <div className="flex flex-row p-5  ">


                        {/*<img className="h-10 w-10 ml-10 mb-6" src="/soleil.png" height={1} width={40} />*/}


                    </div>
                    <div className="flex flex-row gap-20 gap-5 text-white text-center  ">
                        <div className="border-1 p-5 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all  duration-300 ">
                            <div className="flex  flex-row  gap-1">
                                <IoIosSpeedometer size={20} className="mt-1 " />
                                <p className="text-xl font-normal">Speed</p>
                            </div>


                            <p className="font-normal text-xl ">{`${weather?.wind?.speed} km/h`}</p>
                        </div >
                        <div className="border-1 p-5 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all  duration-300 ">

                            <div className="flex  flex-row  gap-1 ">
                                <WiHumidity size={30} className="mt-  " />
                                <p className="text-xl font-normal">Humidity</p>

                            </div>
                            <p className="font-normal text-xl ">{`${weather?.main?.humidity} %`}</p>

                        </div>
                        <div className="border-1 p-5 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all  duration-300 ">
                            <div className="flex  flex-row  gap-1">
                                <WiBarometer size={30} className="mt-  " />
                                <p className="text-xl font-normal">Pressure</p>

                            </div>


                            <p className="text-xl font-normal">{`${weather?.main?.pressure} hPa`}</p>

                        </div>
                        <div className="border-1 p-5  rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all  duration-300 ">

                            <div className="flex  flex-row  gap-1">
                                <MdVisibility size={20} className="mt-1"/>
                                <p className="text-xl font-normal"> Visibility</p>

                            </div>
                            <p className="text-xl font-normal" >{`${weather?.visibility} m`}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
