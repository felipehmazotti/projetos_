import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Noticias from "./pages/noticias/noticias_page.jsx";
import Previsao from "./pages/previsao/previsao_page.jsx";
import Negocios from "./pages/negocios/negocios_page.jsx";
import Atividades from "./pages/atividades/atividade_page.jsx";

function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/previsao" element={<Previsao />} />
            <Route path="/negocios" element={<Negocios />} />
            <Route path="/atividades" element={<Atividades />} />

        </Routes>
    </BrowserRouter>
}

export default Rotas;