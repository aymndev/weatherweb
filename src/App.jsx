import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu'
import Home from "./routes/Home"
import Today from "./routes/Today"
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/today" element={<Today />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
