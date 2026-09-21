import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import styles from "./conteudos.module.css";
import Titulo from "@/app/components/Titulo/Titulo";
import Texto from "@/app/components/Texto/Texto";
import BarraPesquisa from "@/app/components/BarraPesquisa/BarraPesquisa";

export default function Conteudos() {
    return (
        <>
            <NavBar />
            <div className={`${styles.container} mt-5 mb-5 row`}>
                <Titulo titulo="Conteúdos para aprender e criar." nivel={1} />
                <Texto texto="Explore ideias, entenda como as coisas funcionam e coloque seu aprendizado em prática, no seu ritmo." estilo={{ fontSize: '1.1rem' }} classe="mb-5" />
                <hr />
                <Texto texto="Explore as demonstrações públicas. Entre com uma conta de aluno para acessar todos os materiais e enviar atividades." estilo={{ fontSize: '1.1rem' }} />
                <hr />
                <BarraPesquisa />

            </div>
            <Footer />
        </>
    )
}