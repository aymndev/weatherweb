import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { CiTempHigh } from "react-icons/ci";
import { HiCalendarDateRange } from "react-icons/hi2";


export default function DailyForecast() {
    const { weather, error, forecast, loading } = useContext(WeatherContext);


    {/* weather,
    forecast,
    city,
    setCity,
    error,
    loding*/}
    const dailyF = forecast?.list?.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    return (
        <div className="flex  justify-center gap-5">
            {dailyF?.map((day, index) => (
                <div key={index} className="flex m-5 flex-col p-3 text-white text-center rounded-lg border-1 backdrop-blur-2xl ">
                    <div className="flex flex-row ">
                        <HiCalendarDateRange className="mt-1 w-9"/>
                        <p className="font-bold">{new Date(day.dt_txt).toDateString()}</p>

                    </div>
                    
                    <div className="flex flex-row text-xl text-center">
                        <CiTempHigh className="mt-1 ml-5 w-10" />
                        <p className=""> {day.main.temp} °C</p>

                    </div>

                </div>

            ))}

        </div>


    );


}