import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";
import Botao from "@/app/components/Botoes/Botao/Botao";
import TabelaAulas from "./TabelaAulas/TabelaAulas";
import Calendario from "./Calendario/Calendario";

import styles from "./paineladmin.module.css";

import { FaUserFriends } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiQuestionnaireLine } from "react-icons/ri";
import { PiBookOpenText } from "react-icons/pi";
import { BiSolidSchool } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";

export default function PainelAdmin() {


    const icons = {

        user: (
            <FaUserFriends className="p-3 rounded-circle text-white" size={58} style={{ backgroundColor: "var(--blue)" }} />
        ),

        online: (
            <FaCircle className="p-2 rounded-circle" style={{ backgroundColor: "var(--green)" }} />
        ),

    }


    const cardMos = [
        {
            id: 1,
            descricao: "ALUNOS ATIVOS CONECTADOS",
            metrica: 50,
            icon: <FaUsers className="p-2 rounded-circle" size={48} style={{ backgroundColor: "#cfe5ff" }} />,
            cores: { color: "#001629" },
        },
        {
            id: 2,
            descricao: "DÚVIDAS PENDENTES",
            metrica: 4,
            icon: <RiQuestionnaireLine className="p-2 rounded-circle" size={48} style={{ backgroundColor: "#FFDAD4" }} />,
            cores: { color: "#BB0402" },
        },
        {
            id: 3,
            descricao: "MÓDULOS PUBLICADOS",
            metrica: 10,
            icon: <PiBookOpenText className="p-2 rounded-circle" size={48} style={{ backgroundColor: "#cfe5ff" }} />,
            cores: { color: "#001629" },
        },
        {
            id: 4,
            descricao: "ESCOLAS CONVENIADAS",
            metrica: 7,
            icon: <BiSolidSchool className="p-2 rounded-circle border" size={48} />,
            cores: { color: "#001629" },
        }
    ]


    const tabelaAulas = [
        {
            id: 1,
            aula: "Missão 04: Robô Explorador de Marte",
            trilha: "Mecatrônica Avançada",
            nivel: "6º - 8º Ano",
            status: "Publicado",
            atualizado_em: "05/10/2026"
        },
        {
            id: 2,
            aula: "Missão 05: Circuitos",
            trilha: "Arduino Básico",
            nivel: "6º - 8º Ano",
            status: "Publicado",
            atualizado_em: "03/10/2026"
        },
        {
            id: 3,
            aula: "Missão 05: Circuitos",
            trilha: "Arduino Básico",
            nivel: "6º - 8º Ano",
            status: "Rascunho",
            atualizado_em: "03/10/2026"
        }
    ]

    return (
        <>
            <NavBar />

            <div className="container-fluid p-0">

                <div className={`${styles.container}`} style={{ backgroundColor: "#e3e8f9" }}>
                    <div className="row align-items-center py-4">
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


                <div className={`${styles.container} mt-4`} >
                    <div className="row justify-content-md-end justify-content-center g-3">
                        {
                            cardMos.map((item) => (
                                <div className="col-md-3 col-12" key={item.id}>
                                    <div className="h-100 bg-white shadow p-4" style={{ ...item.cores, borderRadius: '25px' }}>
                                        <div>
                                            <p className="fw-semibold">{item.descricao}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Titulo titulo={item.metrica} nivel={1} />
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className={`${styles.container} mt-4`} >

                    <div className="p-4 rounded-5 shadow">

                        <div className="d-flex justify-content-between align-items-center">
                            <Titulo titulo="Histórico de aulas publicadas" nivel={3} />
                            <div className="d-flex gap-3">
                                <div className="d-flex align-items-center rounded-5" style={{ backgroundColor: "#F1F3FF" }}>
                                    <CiSearch className="search-icon mx-2" size={20} />
                                    <input type="text" className="border-0 p-2 rounded-end-5" placeholder="Buscar por título ou kit..." style={{ backgroundColor: "#F1F3FF" }} />
                                </div>
                                <button className="px-4 py-2 border-0 rounded-5 fw-semibold d-flex align-items-center gap-2" style={{ backgroundColor: "#F1F3FF" }}><IoFilter /> Filtrar</button>
                            </div>
                        </div>

                        <hr />

                        <TabelaAulas dados={tabelaAulas} />

                    </div>
                </div>


                <div className={`${styles.container} mt-4`} >
                    <Calendario />
                </div>

                <div className={`${styles.container} mt-4 mb-4`} >
                    <div className="shadow rounded-5 p-4">
                        <div className="d-flex align-items-center gap-3">
                            <FaCircle className="p-2 rounded-circle" style={{ backgroundColor: "#e02a1b" }} />
                            <Titulo titulo="Central de dúvidas" nivel={3} />
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 p-3 rounded-5" style={{ backgroundColor: "#e3e8f9" }}>
                                <div className="d-flex align-items-center gap-3">
                                    <span className="p-2 rounded-circle text-white fw-bold fs-5" style={{ backgroundColor: "var(--blue)" }} >PH</span>
                                    <div>
                                        <span className="fw-semibold">Pedro Henrique</span>
                                        <p className="" style={{ color: "var(--red)", fontSize: "0.9em" }}>Há 15 minutos</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="bg-white px-3 py-2 rounded-4"><p>"Equipe Roboteco"</p></div>
                                </div>
                                <div className="d-flex gap-3 mt-3">
                                    <input type="text" name="" id="" placeholder="Digite uma resposta..." className="w-100 px-3 py-2 rounded-5 border border-primary-subtle" style={{backgroundColor: "#e8eeff"}} />
                                    <button className="text-white fw-semibold rounded-5 px-3" style={{backgroundColor: "var(--green)"}}>Responder</button>
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