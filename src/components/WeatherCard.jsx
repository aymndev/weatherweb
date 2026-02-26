import { useEffect, useState } from "react";



export default function WeatherCard() {
    const [weather, setWeather] = useState(null)

    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data)

        } catch (error) {
            console.log(error)

        }


    }


    useEffect(() => { search("London") }, [])

    if (!weather )return <p>Loding...</p>

    return (
        <div className="flex items-center text-white  ">
            <div className="flex flex-col justify-center shadow-[1px_5px_5px_black] bg-gray-100  h-90 w-[655px] p-5 font-bold  transform hover:scale-105 transition-all  duration-300  bg-sky-500 m-[90px] rounded-lg">

                <div className="text-xl">
                    <div className="flex  justify-between  border-b-1 ">

                        <h1 className=" text-xl p-5 mb-4 border-gray-400" >
                            {weather?.name}

                        </h1>
                        <img 
                            className=" mr-[80px] mt-[5px] h-11 w-13" 
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alr="weather icon"
                        />
                    </div>



                </div>
                <div>
                    <div className="flex flex-row p-5  ">
                        <p className="text-xl pt-2">{(weather?.main?.temp - 273.15).toFixed(1)} °C</p>

                        {/*<img className="h-10 w-10 ml-10 mb-6" src="/soleil.png" height={1} width={40} />*/}


                    </div>
                    <div className="flex flex-row gap-20 pl-5">
                        <div>
                            <p>Speed</p>
                            <p>{`${weather?.wind?.speed} km/h`}</p>
                        </div>
                        <div>
                            <p>Humidity</p>
                            <p>{`${weather?.main?.humidity} %`}</p>

                        </div>
                        <div>
                            <p>Pressure</p>
                            <p>{`${weather?.main?.pressure} hPa`}</p>

                        </div>
                        <div>
                            <p>visibility</p>
                            <p>{`${weather?.visibility} m`}</p>

                        </div>
















                    </div>


                </div>


            </div>



        </div>

    )


}
