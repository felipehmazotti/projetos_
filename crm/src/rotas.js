import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Noticias from "./pages/noticias/noticias.jsx";
import Previsao from "./pages/previsao/previsao.jsx";
// import Grafico from "./pages/grafico/grafico.jsx";
// import Atividade from "./pages/atividade/atividade.jsx";
// import Negocios from "./pages/negocios/negocios.jsx";

function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/previsao" element={<Previsao />} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;