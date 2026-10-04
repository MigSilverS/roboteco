import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";
import Botao from "@/app/components/Botoes/Botao/Botao";

import styles from "./paineladmin.module.css";

import { FaUserFriends } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiQuestionnaireLine } from "react-icons/ri";
import { PiBookOpenText } from "react-icons/pi";
import { BiSolidSchool } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TiDownload } from "react-icons/ti";

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

    return (
        <>
            <NavBar />

            <div className="container-fluid p-0">

                <div className={`${styles.container}`} style={{ backgroundColor: "#e3e8f9" }}>
                    <div className="row align-items-center py-3">
                        <div className="col-md-6 col-12 d-flex align-items-center gap-3">
                            <div className="border border-black">
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

                    <div className="p-5 rounded-5 shadow">

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

                        <table className="table table-borderless">
                            <thead className="rounded-5" >
                                <tr>
                                    <th scope="col" className="rounded-start-5 ps-3" style={{ backgroundColor: "#F1F3FF" }}>AULA</th>
                                    <th scope="col" style={{ backgroundColor: "#F1F3FF" }}>TRILHA</th>
                                    <th scope="col" style={{ backgroundColor: "#F1F3FF" }}>NÍVEL</th>
                                    <th scope="col" style={{ backgroundColor: "#F1F3FF" }}>STATUS</th>
                                    <th scope="col" className="rounded-end-5" style={{ backgroundColor: "#F1F3FF" }}>AÇÕES</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="ps-3 fw-semibold fs-6">Missão 04: Robô Explorador de Marte</td>
                                    <td>Mecatrônica Avançada</td>
                                    <td>6º - 8º Ano</td>
                                    <td>Publicado</td>
                                    <td className="">
                                        <FaPencilAlt className="me-3" size={20} />
                                        <IoEyeOutline className="me-3" size={20} />
                                        <TiDownload className="me-3" size={20} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ps-3 fw-semibold fs-6">Missão 04: Robô Explorador de Marte</td>
                                    <td>Mecatrônica Avançada</td>
                                    <td>6º - 8º Ano</td>
                                    <td>Publicado</td>
                                    <td className="">
                                        <FaPencilAlt className="me-3" size={20} />
                                        <IoEyeOutline className="me-3" size={20} />
                                        <TiDownload className="me-3" size={20} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    )

}