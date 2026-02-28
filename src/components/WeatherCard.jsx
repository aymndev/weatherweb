import { useContext, useEffect, useState } from "react";



import { WeatherContext } from "../context/WeatherContext";

export default function WeatherCard() {



    const { weather, error } = useContext(WeatherContext)



    if (error) {
        return <p>{error}</p>
    }
    if (!weather) return <p>Loding...</p>

    return (
        <div className="flex items-center text-black  ">
            <div className="flex flex-col justify-center   h-100 w-[655px] p-5 font-bold    border-1 bg-gray-100 m-[90px] rounded-lg">

                <div className="text-xl">
                    <div className="flex flex-col  justify-between  border-b-1 ">
                        <p className="  m-1 p-1 ">Weather in {weather?.name}</p>
                        <p className="  pl-2">{weather?.sys?.country}</p>
                        <div className="flex flex-row   ">



                            <p className="  text-3xl pt-7 mr-9 ">{weather?.main?.temp} °C</p>

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
                    <div className="flex flex-row gap-20 pl-5 text-white  ">
                        <div className="border-1 p-2 rounded-lg bg-black transform hover:scale-105 transition-all  duration-300 ">
                            <p>Speed</p>
                            <p>{`${weather?.wind?.speed} km/h`}</p>
                        </div >
                        <div className="border-1 p-2 rounded-lg bg-black transform hover:scale-105 transition-all  duration-300 ">
                            <p>Humidity</p>
                            <p>{`${weather?.main?.humidity} %`}</p>

                        </div>
                        <div className="border-1 p-2 rounded-lg bg-black transform hover:scale-105 transition-all  duration-300 ">
                            <p>Pressure</p>
                            <p>{`${weather?.main?.pressure} hPa`}</p>

                        </div>
                        <div className="border-1 p-2 rounded-lg bg-black transform hover:scale-105 transition-all  duration-300 ">
                            <p>visibility</p>
                            <p>{`${weather?.visibility} m`}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
