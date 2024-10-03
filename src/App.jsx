import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home/home';
import Trips from "./pages/trips/trips";
import Error from "./pages/error/error";
import Hotel from "./pages/hotel/hotel";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/hotel" element={<Hotel />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
