import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Error from "../pages/Error";


function Rotas() {

    return ( 
        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="*" element={<Error/>} />

            </Routes>
        
        </BrowserRouter>
     );
}

export default Rotas;

