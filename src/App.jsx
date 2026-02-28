import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import Home from "./routes/Home";
import Today from "./routes/Today";
import Layout from "./routes/Layout";
import "leaflet/dist/leaflet.css";
import WeatherProvider from "./context/WeatherContext";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";


function AppContent() {
  const { isDark } = useContext(ThemeContext);


  return (
    <div  className={isDark ?"dark min-h-screen":"min-h-screen"}>
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


    </div>


  )
}
function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <AppContent />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App
