import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from "../components/Navbar";
import Detalhes from "../pages/detalhes";
import Favoritos from "../pages/favoritos";
import Home from "../pages/home";



function AppRoutes() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
                <Route path="/favoritos" element={<Favoritos />} />

            </Routes>


        </BrowserRouter>
    );
}

export default AppRoutes;

