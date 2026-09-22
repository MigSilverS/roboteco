import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import styles from "./conteudos.module.css";
import Titulo from "@/app/components/Titulo/Titulo";
import Texto from "@/app/components/Texto/Texto";
import BarraPesquisa from "@/app/components/BarraPesquisa/BarraPesquisa";
import Botao from "@/app/components/Botao/Botao";
import Dropdown from "@/app/components/Dropdown/Dropdown";
import CardConteudo from "@/app/components/CardConteudo/CardConteudo";
import { RiRobot2Line } from "react-icons/ri";

const icons = {
    all: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width={20} height={20}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
        </svg>

    ),
    code: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width={20} height={20}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
    ),
    eletronic: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width={20} height={20}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
        </svg>

    ),
    robot: (
        <RiRobot2Line size={20} />
    ),

}

export default function Conteudos() {
    return (
        <>
            <NavBar />
            <div className={`${styles.container} mt-5 row`}>
                <div className="">
                    <Titulo titulo="Conteúdos para aprender e criar." nivel={1} />
                    <Texto texto="Explore ideias, entenda como as coisas funcionam e coloque seu aprendizado em prática, no seu ritmo." estilo={{ fontSize: '1.1rem' }} classe="mb-5" />
                </div>
                <hr />
                <BarraPesquisa />
                <div className={`${styles.filter} mt-3 mb-3`}>
                    <Botao icon={icons.all} texto="Todos os Temas" classe={`btn btn-light ${styles.botao}`} estilo={{ height: "40px", borderRadius: "4px" }} />
                    <Botao icon={icons.robot} texto="Robótica" classe={`btn btn-light ${styles.botao}`} estilo={{ height: "40px", borderRadius: "4px" }} />
                    <Botao icon={icons.code} texto="Programação" classe={`btn btn-light ${styles.botao}`} estilo={{ height: "40px", borderRadius: "4px" }} />
                    <Botao icon={icons.eletronic} texto="Eletrônica" classe={`btn btn-light ${styles.botao}`} estilo={{ height: "40px", borderRadius: "4px" }} />
                </div>
                <hr />
                <div className="col-md-12 d-flex align-items-center justify-content-between">
                    <Titulo titulo="Explore os conteúdos" nivel={2} />
                    <div className="d-flex gap-2 align-items-center">
                        <Texto texto="Ordenar Por" classe="mb-0" estilo={{ fontSize: '1.1rem' }} />
                        <Dropdown />
                    </div>
                </div>
                <div className="cards row mt-5">
                    <div className="col-12 col-sm-12 col-md-4">
                        <CardConteudo titulo="O que é robótica?" disp="Público" miniTitulo="Robótica · Primeiros passos" tempo="10 Min" tipo1="Texto" tipo2="Video" texto="Entenda como sensores, comandos e movimentos trabalham juntos." />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                        <CardConteudo titulo="Sequências e comandos" miniTitulo="Programação · Primeiros passos" tempo="8 Min" tipo1="Texto" tipo2="Video" texto="Organize instruções para resolver um problema, uma etapa por vez." />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                        <CardConteudo titulo="Conhecendo os circuitos" miniTitulo="Eletrônica · Primeiros passos" tempo="12 Min" tipo1="Texto" texto="Identifique os elementos de um circuito simples." />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}