import Titulo from "@/app/components/Titulo/Titulo";
import { PiListPlusFill } from "react-icons/pi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
import styles from "./AdicionarAula.module.css"

export default function AdicionarAula({ abrirModal, fecharModal }) {

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
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="d-flex flex-column">
                                    <label htmlFor="titulo" className="fw-semibold">
                                        TÍTULO DO DESAFIO / AULA
                                    </label>
                                    <input
                                        type="text"
                                        id="titulo"
                                        name="titulo"
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
                                        name="trilha"
                                        className="border-0 p-2 rounded-5 form-select"
                                        style={{ backgroundColor: "#F1F3FF" }}
                                    >
                                        <option selected defaultValue="0" value="0">Mecatrônica Básica</option>
                                        <option value="1">Mecatrônica Básica</option>
                                        <option value="2">Mecatrônica Básica</option>
                                        <option value="3">Mecatrônica Básica</option>
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
                                        name="nivel"
                                        className="border-0 p-2 rounded-5 form-select"
                                        style={{ backgroundColor: "#F1F3FF" }}
                                    >
                                        <option selected defaultValue="0" value="0">Básico (6º - 8º ano)</option>
                                        <option value="1">Intermediário (9º - 1º ano)</option>
                                        <option value="2">Avançado (2º a 3º ano)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="d-flex flex-column">
                                    <label htmlFor="titulo" className="fw-semibold">
                                        DESCRIÇÃO DO DESAFIO / AULA
                                    </label>
                                    <textarea name="descricao" id="descricao" className="border-0 py-3 px-2 rounded-4 form-control" style={{ backgroundColor: "#F1F3FF", resize: "none" }} placeholder="Ex: Realize a atividade de Robótica">
                                        
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
                                <button className="border-0 py-2 w-100 rounded-5 text-white" style={{ backgroundColor: "var(--blue)" }}>
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
                    </div>

                </div>
            }
        </>
    );
}
