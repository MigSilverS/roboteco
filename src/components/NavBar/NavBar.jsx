import Botao from "../Botao/Botao";

import logo from "../../images/logo.png";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Roboteco" />
                        Robot<span className="text-danger">eco.</span>
                    </a>
                    <ul className="navbar-nav mx-auto justify-content-center">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Início</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Cursos & Aulas</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Nossa Equipe</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Para Escolas</a>
                        </li>
                    </ul>
                    <div className="d-flex gap-2">
                        <Botao texto="Login" classe="btn-light" />
                        <Botao texto="Fazer matrícula" classe="btn-danger" />
                        <Botao texto="Perfil" classe="btn-primary" />
                    </div>
                </div>
            </nav>
        </div>
    );
}