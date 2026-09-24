import Botao from "@/app/components/Botao/Botao";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";
import styles from "./paraescolas.module.css";

import { FiTool } from "react-icons/fi";

import img from '@/app/images/case-escola.png';

export default function ParaEscolas() {

    const icon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={15} height={15}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    )

    return (

        <>
            <NavBar />

            <div className={`${styles.container} mt-5 mb-5`}>

                <div className="row justify-content-between align-items-center p-5" style={{ backgroundColor: "#001629", borderRadius: '25px' }}>

                    <div className="col-6 text-white">

                        <Titulo titulo="Solicite uma aula experimental" nivel={1} estilo={{ fontSize: '3.5rem' }} />

                        <div className="mt-4">
                            <p>Escolas públicas podem solicitar uma aula experimental pela plataforma e receber nossa equipe para proporcionar aos alunos uma experiência prática com robótica, programação e eletrônica.</p>
                        </div>

                        <div className="row mt-3">
                            <div className="col-6 mb-3">
                                <div className="p-2 rounded-5" style={{ backgroundColor: "var(--fundo-icon)" }}>
                                    <div>
                                        <FiTool className="rounded-circle text-white p-2 mb-3" style={{ backgroundColor: "var(--red)" }} size={35} />
                                    </div>
                                    <div className="">
                                        <Titulo titulo="Receba nossa equipe" nivel={5} />
                                        <p>Uma experiência presencial com a equipe Roboteco diretamente na escola.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="p-2 rounded-5" style={{ backgroundColor: "var(--fundo-icon)" }}>
                                    <div>
                                        <FiTool className="rounded-circle text-white p-2 mb-3" style={{ backgroundColor: "var(--red)" }} size={35} />
                                    </div>
                                    <div className="">
                                        <Titulo titulo="Receba nossa equipe" nivel={5} />
                                        <p>Uma experiência presencial com a equipe Roboteco diretamente na escola.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="p-2 rounded-5" style={{ backgroundColor: "var(--fundo-icon)" }}>
                                    <div>
                                        <FiTool className="rounded-circle text-white p-2 mb-3" style={{ backgroundColor: "var(--red)" }} size={35} />
                                    </div>
                                    <div className="">
                                        <Titulo titulo="Receba nossa equipe" nivel={5} />
                                        <p>Uma experiência presencial com a equipe Roboteco diretamente na escola.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="p-2 rounded-5" style={{ backgroundColor: "var(--fundo-icon)" }}>
                                    <div>
                                        <FiTool className="rounded-circle text-white p-2 mb-3" style={{ backgroundColor: "var(--red)" }} size={35} />
                                    </div>
                                    <div className="">
                                        <Titulo titulo="Receba nossa equipe" nivel={5} />
                                        <p>Uma experiência presencial com a equipe Roboteco diretamente na escola.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="bg-white rounded-5 p-3">
                            <span>Processo de solicitação</span>

                            <hr />

                            <p>1 A escola preenche o formulário</p>
                        </div>
                    </div>

                </div>

                <div className="d-flex flex-column justify-content-center align-items-center bg-light border rounded-2 mt-5 p-5">
                    <div className="">
                        <Titulo titulo="Sua escola pode viver essa experiência" nivel={2} />
                    </div>
                    <div className="mt-2">
                        <p>Envie o interesse e converse com nossa equipe sobre as possibilidades para a sua instituição.</p>
                    </div>
                    <div className="d-flex flex-wrap gap-3 mt-4">
                        <Botao texto="Solicitar aula experimental" classe="text-white btn-danger p-3" />
                        <Botao texto="Falar com consultor pedagógico" classe="btn-light border p-3" />
                    </div>
                    <div className="mt-3">
                        <p>Atendimento prioritário para escolas da região metropolitana do Vale do Paraíba.</p>
                    </div>
                </div>


            </div>

            <Footer />
        </>
    )

}