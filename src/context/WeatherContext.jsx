import { createContext,useState,useEffect } from "react";


export const WeatherContext=createContext();
export default function WeatherProvider({children}){
    
    
    const [weather,setWeather]=useState(null);
    const [city,setCity]=useState("London");
    const [forecast,setForecast]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
        useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_KEY}&units=metric`;
                const forecastUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_KEY}`;

                const [currentRes,forecastRes] = await Promise.all([
                    fetch(currentUrl),
                    fetch(forecastUrl)
                ]);
                const currentData = await currentRes.json();
                const forecastData = await forecastRes.json();

                if ((currentData.cod !==200 && currentData.cod !=="200") || (forecastData.cod !==200 && forecastData.cod !=="200")){
                    setError("City not found")
                  
                    return;
                }
                setError(null);
                setWeather(currentData)
                setForecast(forecastData)
                console.log("Current:", currentData);
                console.log("Forecast:", forecastData);   
                
    
            } catch (err) {
                setError("Something went wrong");
    
            }finally{
                setLoading(false);
            }
    
    
        };
        fetchWeather();

    }, [city]);

    return(
        <WeatherContext.Provider value={{
            weather,
            forecast,
            city,
            setCity,
            error,
            loading
        }}>
            {children}

        </WeatherContext.Provider>
    );

}
