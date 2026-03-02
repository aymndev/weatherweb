// Layout.jsx
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
export default function Layout() {
  const { setCity } = useContext(WeatherContext)
  return (
    <div className="flex min-h-screen ">

            <Menu />
            <div className=" relative flex bg-no-repeat  flex-col flex-1 bg-gray-100 bg-center "
               style={{
                backgroundImage:"url('sky-with-cloud.jpg')"
            }}
            
            >
              <div className="absolute inset-0 bg-black/40 "></div>
              <div className=" relative z-10  flex flex-col min-h-screen">
                <NavBar setCity={setCity} />
                <div className=" flex-1 overflow-auto">
                <Outlet />

                </div>
               

              </div>



            </div>


          </div>
          );
}