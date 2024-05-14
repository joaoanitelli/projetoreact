import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home";
import Atv01 from "./atv01";
import Atv02 from "./atv02";
import Atv03 from "./atv03";

export default function MinhasRotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/atv01" element={<Atv01 />}/>
            <Route path="/atv02" element={<Atv02 />}/>
            <Route path="/atv03" element={<Atv03 />}/>
        </Routes>
        </BrowserRouter>
    );
}