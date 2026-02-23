import { useState, useEffect } from "react";
import { axiosclient } from "../api/axiosClinet";

export function useWeather(endpoint: string) {

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const res = await axiosclient.get(endpoint, {
                    params: {
                        appid: import.meta.env.VITE_WEATHER_KEY,
                        units: "metric"
                    }
                });

                setData(res.data);

            } catch (err) {
                setError(err);
                console.error(err);
            } finally {
                setLoading(false);
            }

        };

        fetchData();

    }, [endpoint]);

    return { data, loading, error };