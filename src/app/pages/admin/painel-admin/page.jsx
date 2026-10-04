import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";

import styles from "./paineladmin.module.css";

import { FaUserFriends } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import Botao from "@/app/components/Botoes/Botao/Botao";

export default function PainelAdmin() {


    const icons = {

        user: (
            <FaUserFriends className="p-3 rounded-circle text-white" size={58} style={{ backgroundColor: "var(--blue)" }} />
        ),

        online: (
            <FaCircle className="p-2 rounded-circle" style={{ backgroundColor: "var(--green)" }} />
        ),

    }

    return (
        <>
            <NavBar />

            <div className="container-fluid p-0">

                <div className={`${styles.container}`} style={{ backgroundColor: "#e3e8f9" }}>
                    <div className="row align-items-center py-3">
                        <div className="col-md-6 col-12 d-flex align-items-center gap-3">
                            <div className="">
                                {icons.user}
                                {icons.online}
                            </div>
                            <div>
                                <p className="text-white fw-semibold px-2 rounded-5" style={{ backgroundColor: "var(--red)" }}>ÁREA RESTRITA - EQUIPE</p>
                                <Titulo titulo="Admin." nivel={2} />
                                <Titulo titulo="Roboteco" nivel={2} />
                            </div>
                        </div>
                        <div className="col-md-6 col-12 d-flex justify-content-end gap-3">
                            <Botao texto="Inserir nova aula" classe="text-white fw-semibold" estilo={{ backgroundColor: "var(--yellow)" }} />
                            <Botao texto="Gerenciar Escolas" classe="text-white fw-semibold" estilo={{ backgroundColor: "var(--blue)" }} />
                        </div>
                    </div>
                </div>


                <div className={`${styles.container}`} >
                    <div className="row justify-content-md-end justify-content-center g-3 py-3">
                        <div className="col-md-3 col-12">
                            <div className="h-100 bg-white shadow-sm p-4" style={{ borderRadius: '25px' }}>
                                <div>
                                    <p className="fw-semibold">ALUNOS ATIVOS CONECTADOS</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Titulo titulo="3" nivel={1} />
                                    {icons.user}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="h-100 bg-white shadow-sm p-4" style={{ borderRadius: '25px' }}>
                                <div>
                                    <p className="fw-semibold">ALUNOS ATIVOS CONECTADOS</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Titulo titulo="3" nivel={1} />
                                    {icons.user}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="h-100 bg-white shadow-sm p-4" style={{ borderRadius: '25px' }}>
                                <div>
                                    <p className="fw-semibold">ALUNOS ATIVOS CONECTADOS</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Titulo titulo="3" nivel={1} />
                                    {icons.user}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="h-100 bg-white shadow-sm p-4" style={{ borderRadius: '25px' }}>
                                <div>
                                    <p className="fw-semibold">ALUNOS ATIVOS CONECTADOS</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Titulo titulo="3" nivel={1} />
                                    {icons.user}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )

}