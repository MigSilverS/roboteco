import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";
import CardPilares from "@/app/pages/sobre-nos/CardPilares/CardPilares";
import CardEquipe from "./CardEquipe/CardEquipe";
import styles from "./sobrenos.module.css";

import { GiMechanicalArm } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa6";
import { PiBookOpenText } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { LuGamepad2 } from "react-icons/lu";
import { FaPersonDigging } from "react-icons/fa6";

import logo from '@/app/images/wolfy-logo.png';
import img from '@/app/images/equipe/integrante1.jpg';

export default function SobreNos() {

    const icons = {
        chapeu: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rounded-circle p-2 text-danger" width={40} height={40} style={{ backgroundColor: "#FFDAD4" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
        ),

        smile: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rounded-circle p-2" width={40} height={40} style={{ backgroundColor: "#E3E8F9" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
        ),

        robo: (
            <GiMechanicalArm className="rounded-circle bg-primary-subtle p-2" size={40} />
        ),

        head: (
            <FaHeadSideVirus className="rounded-circle bg-success-subtle p-2" size={40} />
        )

    }

    const cardCont = [
        {
            id: 1,
            icon: <PiBookOpenText className="rounded-circle p-2 text-white" style={{ backgroundColor: "var(--fundo-icon)", color: "#CFE5FF" }} size={40} />,
            titulo: "Acessibilidade",
            texto: "Ampliamos o acesso à tecnologia, levando novas oportunidades de aprendizagem para crianças e escolas públicas.",
            rodape: "Inclusão",
            classe: "text-white",
            estilo: { backgroundColor: 'var(--blue)' }
        },
        {
            id: 2,
            icon: <FaRegHeart className="rounded-circle p-2" style={{ backgroundColor: "var(--fundo-icon)", color: "#FFDAD4" }} size={40} />,
            titulo: "Qualidade",
            texto: "Conteúdos  bem estruturados e pensados para proporcionar uma experiência de aprendizado clara e significativa.",
            rodape: "Excelência",
            classe: "text-black",
            estilo: { backgroundColor: 'var(--red)' }
        },
        {
            id: 3,
            icon: <FaPersonDigging className="rounded-circle p-2" style={{ backgroundColor: "var(--fundo-icon)", color: "#9AF7A7" }} size={40} />,
            titulo: "Experimentação",
            texto: "Atividades educativas que incentivam a experimentação, a criação e a aplicação dos conhecimentos na prática.",
            rodape: "Aprender  na prática",
            classe: "text-white",
            estilo: { backgroundColor: 'var(--green)' }
        },
        {
            id: 4,
            icon: <LuGamepad2 className="rounded-circle p-2" style={{ backgroundColor: "var(--fundo-icon)", color: "#001629" }} size={40} />,
            titulo: "Aprendizado lúdico",
            texto: "Desafios, atividades interativas e recompensas tornam o aprendizado mais dinâmico.",
            rodape: "Gamificação",
            classe: "text-black",
            estilo: { backgroundColor: 'var(--yellow)' }
        },
    ]

    return (
        <>

            <NavBar />

            <div className="container-fluid p-0">

                <div className={`${styles.container}`} style={{ backgroundColor: '#F1F3FF', paddingTop: '6rem', paddingBottom: '6rem' }}>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <Titulo titulo="Conheça quem faz o Roboteco acontecer" nivel={1} estilo={{ fontSize: '3.5rem' }} />
                            <p>Conheça o time que faz o ROBOTECO acontecer. Reunimos diferentes conhecimentos e experiências para desenvolver uma plataforma que aproxima crianças e jovens da robótica, da programação e da eletrônica. Atuamos na criação dos conteúdos, na organização das atividades e na conexão com as escolas, buscando tornar o aprendizado mais acessível, prático e interessante.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row justify-content-md-end justify-content-center g-3">
                                <div className="col-5">
                                    <div className="h-100 bg-white shadow-sm p-4" style={{ borderRadius: '25px' }}>
                                        <div className="mb-3">
                                            {icons.robo}
                                        </div>
                                        <Titulo titulo="+10" nivel={2} />
                                        <p>Robôs montados em nosso site</p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="h-100 bg-white shadow-sm p-4" style={{ borderRadius: '25px' }}>
                                        <div className="mb-3">{icons.chapeu}</div>
                                        <Titulo titulo="+3" nivel={2} />
                                        <p>Escolas parceiras</p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="h-100 bg-white shadow-sm p-4" style={{ borderRadius: '25px' }}>
                                        <div className="mb-3">
                                            {icons.head}
                                        </div>
                                        <Titulo titulo="+3" nivel={2} />
                                        <p>Escolas parceiras</p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="h-100 bg-white shadow-sm p-4" style={{ borderRadius: '25px' }}>
                                        <div className="mb-3">{icons.smile}</div>
                                        <Titulo titulo="+3" nivel={2} />
                                        <p>Escolas parceiras</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`${styles.container} `} style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                    <span className="fw-semibold" style={{ color: "var(--red)" }}>NOSSO DNA FORMATIVO</span>
                    <Titulo titulo="Pilares que guiam cada aula" nivel={2} />
                    <div className="row mt-4">
                        {
                            cardCont.map((item) => (
                                <CardPilares key={item.id} icon={item.icon} titulo={item.titulo} texto={item.texto} rodape={item.rodape} classe={item.classe} estilo={item.estilo} />
                            ))
                        }
                    </div>
                </div>


                <div className={styles.container} style={{ backgroundColor: '#CFE5FFE5', paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
                    <div>
                        <Titulo titulo="Equipe Roboteco" nivel={2} />
                        <Titulo
                            titulo="Conheça os criadores do projeto"
                            nivel={4}
                            estilo={{ color: "var(--red)" }}
                        />
                    </div>

                    <div className="row mt-3">
                        <CardEquipe img={img} nome="Anna Laura Modesto" funcao="UI/UX e Documentação, Organização e Prototipagem" descricao="Criação das páginas e layouts do sistema e registro do processo de desenvolvimento no diário do projeto." />
                        <CardEquipe img={img} nome="Anna Laura Modesto" funcao="UI/UX e Documentação, Organização e Prototipagem" descricao="Criação das páginas e layouts do sistema e registro do processo de desenvolvimento no diário do projeto." />
                        <CardEquipe img={img} nome="Anna Laura Modesto" funcao="UI/UX e Documentação, Organização e Prototipagem" descricao="Criação das páginas e layouts do sistema e registro do processo de desenvolvimento no diário do projeto." />
                        <CardEquipe img={img} nome="Anna Laura Modesto" funcao="UI/UX e Documentação, Organização e Prototipagem" descricao="Criação das páginas e layouts do sistema e registro do processo de desenvolvimento no diário do projeto." />
                        <CardEquipe img={img} nome="Anna Laura Modesto" funcao="UI/UX e Documentação, Organização e Prototipagem" descricao="Criação das páginas e layouts do sistema e registro do processo de desenvolvimento no diário do projeto." />
                        <CardEquipe img={img} nome="Anna Laura Modesto" funcao="UI/UX e Documentação, Organização e Prototipagem" descricao="Criação das páginas e layouts do sistema e registro do processo de desenvolvimento no diário do projeto." />
                    </div>
                </div>


                <div className={styles.container} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                    <div className="row justify-content-center align-items-center g-sm-3 p-5" style={{ background: "linear-gradient(216deg,rgba(2, 0, 36, 1) 3%, rgba(0, 43, 73, 1) 17%)", borderRadius: '25px'  }}>
                        <div className="col-7 col-md-2">
                            <img src={logo.src} className="w-100" alt=""/>
                        </div>
                        <div className="col-12 col-md-10">
                            <Titulo titulo="Nosso parceiro" nivel={2} estilo={{ color: "white" }} />
                            <Titulo titulo="Nosso parceiro" nivel={4} estilo={{ color: "var(--red)" }} />
                            <p className="text-white">A Wolf Army Robotics é uma equipe de robótica de Lorena que atua como parceira da Roboteco, contribuindo com materiais, relatórios e apoio no desenvolvimento de atividades e conteúdos.</p>
                        </div>
                    </div>
                </div>


            </div>

            <Footer />

        </>
    )

}