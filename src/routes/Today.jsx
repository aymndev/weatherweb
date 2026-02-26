import WeatherCard from "../components/WeatherCard";
import NavBar from "../components/NavBar";

export default function Today() {
    return (
        <div className= "flex flex-col w-full h-screen">
                <div>
                <NavBar/>

                </div>
                <h1 className="text-center text-2xl pt-15 font-bold" >Today </h1>
                
                <div className="flex flex flex-col  h-screen justify-center  items-center">
                
                <WeatherCard className=""/>

                </div>
                

            
            

        </div>
       

    );
}