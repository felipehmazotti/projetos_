import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Noticias from "./pages/noticias/noticias.jsx";
// import Negocios from "./pages/negocios/negocios.jsx";

function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/noticias" element={<Noticias />} />
            {/* <Route path="/negocios" element={<Negocios />} /> */}
        </Routes>
    </BrowserRouter>
}

export default Rotas;