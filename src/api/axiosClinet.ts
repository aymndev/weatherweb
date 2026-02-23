import axios from "axios";
export const axiosclient=axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5",


});