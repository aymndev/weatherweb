// Layout.jsx
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
export default function Layout() {
  const {setCity}=useContext(WeatherContext)
  return (
    <div className="flex ">
      <Menu />
      <div className="flex justify-center w-full h-screen bg-gray-100 m-2">
        <div className=" flex flex-col w-full h-full">
           <NavBar setCity={setCity}/>
           <Outlet  />

        </div>
          

          
      </div>
      
      
    </div>
  );
}