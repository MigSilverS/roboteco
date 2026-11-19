"use client"

import Titulo from "@/app/components/Titulo/Titulo";
import { PiListPlusFill } from "react-icons/pi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
import styles from "./AdicionarAula.module.css"
import axios from "axios";
import { useState } from "react";

export default function AdicionarAula({ abrirModal, fecharModal }) {

    // const [conteudo, setConteudo] = useState({
    //     conTitulo: "",
    //     conDescricao: "",
    //     conApostila: null,
    //     conVideo: null,
    //     catId: "",
    //     conNivel: "",
    //     conStatus: ""
    // })

    // const [salvando, setSalvando] = useState(false);

    // const [mensagemSucesso, setMensagemSucesso] = useState("");
    // const [erro, setErro] = useState("");

    // function atualizarCampo(e) {

    //     const { name, value } = e.target;
    //     setConteudo(
    //         (dadosAtuais) => ({
    //             ...dadosAtuais,
    //             [name]: value
    //         })
    //     )
    // }

    // async function cadastrarConteudo(event) {
    //     event.preventDefault()

    //     setSalvando(true)
    //     setMensagemSucesso("")
    //     setErro("")

    //     try {
    //         await axios.post("http://localhost:8000/conteudos", conteudo)
    //         setMensagemSucesso("Conteúdo cadastrado com sucesso!")
    //         cadastrarConteudo({
    //             conTitulo: "",
    //             conDescricao: "",
    //             conApostila: null,
    //             conVideo: null,
    //             catId: "",
    //             conNivel: "",
    //             conStatus: "Publicado"
    //         })
    //     } catch {
    //         setErro("Não foi possível cadastrar o conteúdo...")
    //     } finally {
    //         setSalvando(false)
    //     }
    // }

    return (
        <>
            {abrirModal &&
                <div className={`${styles.fundo}`}>

                    <div className={`container ${styles.modal}`}>
                        <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                            <div className="d-flex">
                                <PiListPlusFill
                                    className="p-2 rounded-circle text-white me-2"
                                    size={35}
                                    style={{ backgroundColor: "var(--blue)" }}
                                />
                                <Titulo titulo="Cadastrar Aula" nivel={3} />
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={fecharModal}
                            ></button>
                        </div>
                        <form onSubmit={cadastrarConteudo}>
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="d-flex flex-column">
                                        <label htmlFor="titulo" className="fw-semibold">
                                            TÍTULO DO DESAFIO / AULA
                                        </label>
                                        <input
                                            type="text"
                                            id="titulo"
                                            name="conTitulo"
                                            // value={conteudo.conTitulo}
                                            // onChange={atualizarCampo}
                                            className="border-0 p-2 rounded-5 form-control"
                                            placeholder="Ex: Montagem do Robô Seguidor de Linha PID"
                                            style={{ backgroundColor: "#F1F3FF" }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mt-3">
                                    <div className="d-flex flex-column">
                                        <label htmlFor="trilha" className="fw-semibold">
                                            TRILHA CURRICULAR
                                        </label>
                                        <select
                                            id="trilha"
                                            name="catId"
                                            // value={conteudo.catId}
                                            // onChange={atualizarCampo}
                                            className="border-0 p-2 rounded-5 form-select"
                                            style={{ backgroundColor: "#F1F3FF" }}
                                        >
                                            <option value="1">Robótica</option>
                                            <option value="2">Programação</option>
                                            <option value="3">Eletrônica</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mt-3">
                                    <div className="d-flex flex-column">
                                        <label htmlFor="nivel" className="fw-semibold">
                                            NÍVEL DE ENSINO
                                        </label>
                                        <select
                                            id="nivel"
                                            name="conNivel"
                                            // value={conteudo.conNivel}
                                            // onChange={atualizarCampo}
                                            className="border-0 p-2 rounded-5 form-select"
                                            style={{ backgroundColor: "#F1F3FF" }}
                                        >
                                            <option value="basico">Básico (6º - 8º ano)</option>
                                            <option value="intermediário">Intermediário (9º - 1º ano)</option>
                                            <option value="avancado">Avançado (2º a 3º ano)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="d-flex flex-column">
                                        <label htmlFor="titulo" className="fw-semibold">
                                            DESCRIÇÃO DO DESAFIO / AULA
                                        </label>
                                        <textarea name="conDescricao" id="descricao"
                                            //  value={conteudo.conDescricao} onChange={atualizarCampo} 
                                            className="border-0 py-3 px-2 rounded-4 form-control" style={{ backgroundColor: "#F1F3FF", resize: "none" }} 
                                            placeholder="Ex: Realize a atividade de Robótica">

                                        </textarea>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mt-3">
                                    <div className="d-flex flex-column">
                                        <label
                                            htmlFor="video"
                                            className="border-0 p-2 d-flex flex-column justify-content-center align-items-center rounded-5"
                                            style={{ backgroundColor: "#F1F3FF" }}
                                        >
                                            <MdOutlineOndemandVideo size={30} />
                                            <span className="fw-semibold">Vídeo Explicativo</span>
                                            <span className="fw-medium">MP4, MOV até 2GB</span>
                                        </label>
                                        <input type="file" id="video" className="d-none" accept="video/mp4, video/mov" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mt-3">
                                    <div className="d-flex flex-column">
                                        <label
                                            htmlFor="apostila"
                                            className="border-0 p-2 d-flex flex-column justify-content-center align-items-center rounded-5"
                                            style={{ backgroundColor: "#F1F3FF" }}
                                        >
                                            <VscFilePdf size={30} style={{ color: "var(--red)" }} />
                                            <span className="fw-semibold">Material complementar</span>
                                            <span className="fw-medium">Apostila PDF</span>
                                        </label>
                                        <input type="file" id="apostila" className="d-none" accept=".pdf, application/pdf" />
                                    </div>
                                </div>

                                <div className="col-md-9 mt-3">
                                    <button type="submit" className="border-0 py-2 w-100 rounded-5 text-white" style={{ backgroundColor: "var(--blue)" }}>
                                        Salvar e Publicar Módulo
                                    </button>
                                </div>
                                <div className="col-md-3 mt-3">
                                    <button className="border-0 py-2 w-100 rounded-5" style={{ backgroundColor: "#F1F3FF" }}>
                                        Rascunho
                                    </button>
                                </div>
                                <div className="pb-3"></div>
                            </div>
                        </form>
                    </div>

                </div>
            }
        </>
    );
}
