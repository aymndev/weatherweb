import { createContext,useState,useEffect } from "react";


export const WeatherContext=createContext();
export default function WeatherProvider({children}){
    const [weather,setWeather]=useState(null);
    const [city,setCity]=useState("London");
    const [error,setError]=useState(null);
        useEffect(() => {
        const fetchWeather = async () => {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_KEY}&units=metric`;
                const response = await fetch(url);
                const data = await response.json();
                if (data.cod !==200 && data.cod !=="200"){
                    setError("City not found")
                    setWeather(null)
                    return;
                }
                setError(null);
                setWeather(data)
                console.log(data);
                
    
            } catch (err) {
                setError("Something went wrong");
    
            }
    
    
        };
        fetchWeather();

    }, [city]);

    return(
        <WeatherContext.Provider value={{
            weather,
            setWeather,
            city,
            setCity
        }}>
            {children}

        </WeatherContext.Provider>
    );

}
