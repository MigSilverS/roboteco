import Link from "next/link";
import Botao from "../Botao/Botao";

// const IconUser = (
//     <svg xmlns="http://www.w3.org/2000/svg" height={18} width={22} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//     </svg>

// );

export default function NavBar() {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "var(--color-primary)", boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.16)" }}
            >
                <div className="container-fluid">
                    <a
                        className="navbar-brand d-flex align-items-center gap-2"
                        href="#"
                    >
                        <h2>
                            Robot<span style={{ color: "var(--red)" }}>eco.</span>
                        </h2>
                    </a>
                    <ul className="navbar-nav mx-auto justify-content-center">
                        <li className="nav-item">
                            <Link href="/" className="nav-link" style={{ fontFamily: 'Quicksand' }}>Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/pages/escola/para-escolas" className="nav-link" style={{ fontFamily: 'Quicksand' }}>Para Escolas</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/pages/sobre-nos" className="nav-link" style={{ fontFamily: 'Quicksand' }}>Sobre nós</Link>
                        </li>
                        </ul>
                    <div className="d-flex align-items-center gap-3">
                        <Botao
                            href="/pages/login"
                            texto="Login"
                            classe="btn-light"
                            estilo={{ border: "1px solid #a8a8a8ff" }}
                        />
                        <Botao
                            href="/pages/cadastro"
                            texto="Criar Conta"
                            classe="btn-danger"
                            estilo={{ border: "1px solid #a8a8a8ff" }}
                        />
                        {/* <Botao
                            icon={IconUser}
                            classe="rounded-circle p-1"
                            estilo={{ backgroundColor: "var(--blue) ", color: "var(--color-primary)" }}
                            aria-label="Perfil"
                        /> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}
