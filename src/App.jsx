import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Today from "./routes/Today";
import Layout from "./routes/Layout";


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="today" element={<Today />} />
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App
