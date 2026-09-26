import Botao from "@/app/components/Botoes/Botao/Botao";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";
import styles from "./paraescolas.module.css";

import { FiTool } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

export default function ParaEscolas() {

    const icon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={15} height={15}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    )



    const etapas = [
        "Escola preenche o formulário",
        "Nossa equipe analisa a solicitação",
        "A escola recebe o retorno",
        "A aula é organizada e realizada"
    ];

    const cards = [
        {
            icon: <FiTool className="rounded-circle text-white p-2" style={{ backgroundColor: "var(--red)" }} size={35} />,
            titulo: "Receba nossa equipe",
            texto: "Uma experiência presencial com a equipe Roboteco diretamente na escola."
        },
        {
            icon: <FiTool className="rounded-circle text-white p-2" style={{ backgroundColor: "var(--yellow)" }} size={35} />,
            titulo: "Conheça os conceitos",
            texto: "Uma introdução aos principais conceitos de robótica, programação e eletrônica."
        },
        {
            icon: <FiTool className="rounded-circle text-white p-2" style={{ backgroundColor: "var(--green)" }} size={35} />,
            titulo: "Aprenda na prática",
            texto: "Atividades para explorar os conceitos e colocar o conhecimento em ação."
        },
        {
            icon: <FiTool className="rounded-circle text-white p-2" style={{ backgroundColor: "var(--blue)" }} size={35} />,
            titulo: "Acesse nossos materiais",
            texto: "Materiais disponibilizados pelo parceiro para complementar o aprendizado."
        }
    ];

    return (

        <>
            <NavBar />

            <div className={`${styles.container} mt-5 mb-5`}>

                <div className="row justify-content-between align-items-center p-4 p-lg-5" style={{ backgroundColor: "#001d2d", borderRadius: '32px', overflow: 'hidden' }}>

                    <div className="col-12 col-lg-7 text-white pe-lg-4">
                        <div
                            className="d-inline-block rounded-pill px-3 py-2 mb-4 text-uppercase"
                            style={{ backgroundColor: "rgba(255,255,255,0.09)", color: "#dfe8ef", fontSize: "0.72rem", letterSpacing: "0.08em", fontWeight: 700 }}
                        >
                            Tem interesse em levar a Roboteco para sua escola?
                        </div>

                        <Titulo titulo="Solicite uma aula experimental" nivel={1} estilo={{ fontSize: 'clamp(2.4rem, 4vw, 4.4rem)', lineHeight: 0.96, color: '#f3f5f7' }} />

                        <div className="mt-4 mb-4" style={{ maxWidth: "700px" }}>
                            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                                Escolas públicas podem solicitar uma aula experimental pela plataforma e receber nossa equipe para proporcionar aos alunos uma experiência prática com robótica, programação e eletrônica.
                            </p>
                        </div>

                        <div className="row g-3 mt-2">
                            {cards.map((card, index) => (
                                <div key={index} className="col-12 col-md-6">
                                    <div className="h-100 rounded-4 p-3" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <div className="d-flex align-items-center justify-content-center">{card.icon}</div>
                                            <Titulo titulo={card.titulo} nivel={5} estilo={{ color: "#ffffff", fontSize: "1.05rem" }} />
                                        </div>
                                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.6 }}>{card.texto}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4" style={{ maxWidth: "420px" }}>
                            <Botao
                                texto="Preencha o formulário abaixo"
                                classe="text-white btn-danger px-4 py-3 w-100 justify-content-center"
                                estilo={{ fontWeight: 700, borderRadius: "14px" }}
                            />
                        </div>

                        <div className="mt-3" style={{ color: "rgba(255,255,255,0.8)" }}>
                            Atendimento dedicado para colégios públicos
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 mt-4 mt-lg-0 d-flex justify-content-lg-end align-items-center">
                        <div className="bg-white rounded-4 p-3 p-md-4 w-100" style={{ maxWidth: "470px" }}>
                            <div className="d-flex align-items-center gap-2 mb-3 fw-semibold" style={{ color: "#1c2730" }}>
                                <FaCircle style={{ color: "var(--green)", fontSize: "0.75rem" }} />
                                Processo de solicitação
                            </div>

                            <div className="d-flex flex-column gap-3">
                                {etapas.map((etapa, index) => (
                                    <div key={index} className="d-flex align-items-center gap-3">
                                        <div
                                            className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                                minWidth: "32px",
                                                backgroundColor: ["#d9ebff", "#ffe5e5", "#dff7e7", "#fff2c7"][index],
                                                color: ["#204f7a", "#8f2a2a", "#215d3b", "#8d6414"][index],
                                                fontSize: "0.92rem"
                                            }}
                                        >
                                            {index + 1}
                                        </div>
                                        <p className="mb-0" style={{ color: "#1d2d33", fontSize: "1rem" }}>{etapa}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <div className="w-100" style={{ maxWidth: "760px" }}>
                        <div className="rounded-5 p-4 p-md-5 shadow-sm" style={{ backgroundColor: "#f4a200", color: "#062c48" }}>
                            <div className="text-center mb-4">
                                <Titulo titulo="Solicitação de aula experimental" nivel={2} estilo={{ fontSize: "clamp(2rem, 3vw, 3rem)", color: "#062c48" }} />
                                <p className="mb-0 mt-2" style={{ fontSize: "1.05rem", color: "rgba(6, 44, 72, 0.8)" }}>
                                    Um representante da escola deve responder
                                </p>
                            </div>

                            <form className="row g-3">
                                <div className="col-12">
                                    <label className="form-label fw-semibold mb-2" htmlFor="nome-escola">Nome da escola</label>
                                    <input id="nome-escola" type="text" className="form-control border-0 shadow-none" placeholder="Nome da escola" style={{ backgroundColor: "#f7f7f7", height: "48px", borderRadius: "12px" }} />
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold mb-2" htmlFor="municipio">Município</label>
                                    <select id="municipio" className="form-select border-0 shadow-none" style={{ backgroundColor: "#f7f7f7", height: "48px", borderRadius: "12px" }}>
                                        <option value="" selected>Selecione</option>
                                        <option value="">Guaratinguetá</option>
                                        <option value="">Aparecida</option>
                                        <option value="">Lorena</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold mb-2" htmlFor="responsavel">Responsável</label>
                                    <input id="responsavel" type="text" className="form-control border-0 shadow-none" placeholder="Responsável" style={{ backgroundColor: "#f7f7f7", height: "48px", borderRadius: "12px" }} />
                                </div>

                                <div className="col-12 col-md-4">
                                    <label className="form-label fw-semibold mb-2" htmlFor="contato">Contato</label>
                                    <input id="contato" type="text" className="form-control border-0 shadow-none" placeholder="Contato" style={{ backgroundColor: "#f7f7f7", height: "48px", borderRadius: "12px" }} />
                                </div>

                                <div className="col-12 col-md-4">
                                    <label className="form-label fw-semibold mb-2" htmlFor="quantidade">Quantidade de alunos</label>
                                    <input id="quantidade" type="text" className="form-control border-0 shadow-none" placeholder="Quantidade" style={{ backgroundColor: "#f7f7f7", height: "48px", borderRadius: "12px" }} />
                                </div>

                                <div className="col-12 col-md-4">
                                    <label className="form-label fw-semibold mb-2" htmlFor="data">Data preferencial</label>
                                    <div className="position-relative">
                                        <input id="data" type="text" className="form-control border-0 shadow-none pe-5" placeholder="Data" style={{ backgroundColor: "#f7f7f7", height: "48px", borderRadius: "12px" }} />
                                        <span className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ fontSize: "1.1rem" }}>📅</span>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold mb-2" htmlFor="email">E-mail</label>
                                    <input id="email" type="email" className="form-control border-0 shadow-none" placeholder="E-mail" style={{ backgroundColor: "#f7f7f7", height: "48px", borderRadius: "12px" }} />
                                </div>

                                <div className="col-12">
                                    <div className="form-check d-flex align-items-center gap-2">
                                        <input className="form-check-input border-2" type="checkbox" id="termos" style={{ width: "18px", height: "18px", borderColor: "rgba(6,44,72,0.7)" }} />
                                        <label className="form-check-label" htmlFor="termos" style={{ color: "#062c48", fontWeight: 500 }}>
                                            Li e concordo com os <span className="fw-bold">Termos de Uso</span> e autorizo o contato da equipe via e-mail
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 pt-3">
                                    <button type="submit" className="btn w-100 fw-bold border-0" style={{ backgroundColor: "#02243a", color: "#ffffff", borderRadius: "14px", height: "52px" }}>
                                        Enviar solicitação
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )

}