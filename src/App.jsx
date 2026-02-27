import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Today from "./routes/Today";
import Layout from "./routes/Layout";
import "leaflet/dist/leaflet.css";
import WeatherProvider from "./context/WeatherContext";


function App() {


  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="today" element={<Today />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </WeatherProvider>


  )
}

export default App
