import { useContext} from "react";
import { WeatherContext } from "../context/WeatherContext";
import { ThemeContext } from "../context/ThemeContext";






export default function WeatherCard() {

    const {isDark}=useContext(ThemeContext)


    const { weather, error } = useContext(WeatherContext)



    if (error) {
        return <p>{error}</p>
    }
    if (!weather) return <p>Loding...</p>

    return (
        <div className={` ${isDark?"  text-black " : "text-black "}flex  text-white items-center `}>
            <div className="flex flex-col justify-center    w-[655px] p-5 font-bold  backdrop-blur-sm border-1  m-[90px] rounded-lg">

                <div className="text-xl">
                    <div className="flex flex-col  justify-between  border-b-1 ">
                        <p className="  m-1 p-1 ">Weather in {weather?.name}</p>
                        <p className="  pl-2">{weather?.sys?.country}</p>
                        <div className="flex flex-row   ">



                            <p className="  text-3xl pt-9 mr-10 pl-2 ">{weather?.main?.temp} °C</p>

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
                        <div className="border-1 p-2 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all  duration-300 ">
                            <p>Speed</p>
                            <p>{`${weather?.wind?.speed} km/h`}</p>
                        </div >
                        <div className="border-1 p-2 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all  duration-300 ">
                            <p>Humidity</p>
                            <p>{`${weather?.main?.humidity} %`}</p>

                        </div>
                        <div className="border-1 p-2 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all  duration-300 ">
                            <p>Pressure</p>
                            <p>{`${weather?.main?.pressure} hPa`}</p>

                        </div>
                        <div className="border-1 p-5  rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all  duration-300 ">
                            <p>visibility</p>
                            <p>{`${weather?.visibility} m`}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
