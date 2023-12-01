// Importa os componentes necessários do pacote react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importa os componentes das páginas específicas
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Noticias from "./pages/noticias/noticias_page.jsx";
import Previsao from "./pages/previsao/previsao_page.jsx";
import Negocios from "./pages/negocios/negocios_page.jsx";
import Atividades from "./pages/atividades/atividade_page.jsx";
import Tarefas from "./components/tarefas/tarefas.jsx";

// Define a função de componentes que representa as rotas da aplicação
function Rotas() {
    return (
        // Define o componente BrowserRouter que envolverá as rotas
        <BrowserRouter>
            {/* Define as rotas usando o componente Routes */}
            <Routes>
                {/* Define uma rota para a página de dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Define uma rota padrão para a página de dashboard (quando o caminho é "/") */}
                <Route path="/" element={<Dashboard />} />
                {/* Define uma rota para a página de notícias */}
                <Route path="/noticias" element={<Noticias />} />
                {/* Define uma rota para a página de previsão */}
                <Route path="/previsao" element={<Previsao />} />
                {/* Define uma rota para a página de negócios */}
                <Route path="/negocios" element={<Negocios />} />
                {/* Define uma rota para a página de atividades */}
                <Route path="/atividades" element={<Atividades />} />
                {/* Define uma rota para a página de tarefas */}
                <Route path="/tarefas" element={<Tarefas />} />
            </Routes>
        </BrowserRouter>
    );
}

// Exporta o componente Rotas como componente principal para ser utilizado na aplicação
export default Rotas;
