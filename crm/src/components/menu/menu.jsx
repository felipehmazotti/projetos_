import React from "react"; /*importação do react */
import { Link, NavLink } from "react-router-dom"; /*importação da navlink */
import logo from"../../assets/logo.jpeg"; /*importação da logo */
import "./menu.css" /*importação do menu */

// função do componente menu
function Menu(props){
    // CONSTANTE DAS CORES
    const linkBlue = "nav-link align-middle px-0"
    const linkBlack = "nav-link align-middle px-0 link-secondary"

        return <>
            <div className="d-flex flex-collumn align-itens-center align-itens-sm-start px-3 pt-2 text-white min-vh-100">

            <a href="/" className="d-flex align-itens-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-nome d-sm-inline">
                    <img src={logo} className="img-logo" />
                </span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-itens-sm-start" id="menu">
            {/* DASHBORD */}
                <li className="nav-item">
                        <Link to="/dashboard" className={props.page == "dashboard" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>
                {/* NEGÓCIOS */}
                    <li className="nav-item">
                        <Link to="/negocios" className={props.page == "negocio" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Negócios</span>
                        </Link>
                    </li>
                {/* ATVIVIDADES */}
                    <li className="nav-item">
                        <Link to="/atividades" className={props.page == "atividades" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Atividades</span>
                        </Link>
                    </li>
                {/* NOTÍCIAS */}
                    <li className="nav-item">
                        <Link to="/noticias" className={props.page == "noticias" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Notícias</span>
                        </Link>
                    </li>
                {/* PREVISÃO */}
                    <li className="nav-item">
                        <Link to="/previsao" className={props.page == "previsao" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Previsão</span>
                        </Link>
                    </li>
                {/* TAREFAS */}
                    <li className="nav-item">
                        <Link to="/tarefas" className={props.page == "tarefas" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Tarefas</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
}
// fim da dunção do componente menu

// exportação do componente menu
export default Menu;