import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";
import styles from "./sobrenos.module.css";

export default function SobreNos() {

    const icons = {
        chapeu: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rounded-circle p-2 text-danger" width={40} height={40} style={{backgroundColor: "#FFDAD4"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
        ),

        smile: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="" width={16} height={16}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>

        )

    }

    return (
        <>

            <NavBar />

            <div className="container-fluid">
                <div className="row align-items-center px-5" style={{ backgroundColor: 'var(--div1-color)', paddingTop: '6rem', paddingBottom: '6rem' }}>
                    <div className="col-12 col-md-6 g-5 m-0 p-0">
                        <Titulo titulo="Conheça quem faz o Roboteco acontecer" nivel={1} estilo={{ fontSize: '3.5rem' }} />
                        <p>Conheça o time que faz o ROBOTECO acontecer. Reunimos diferentes conhecimentos e experiências para desenvolver uma plataforma que aproxima crianças e jovens da robótica, da programação e da eletrônica. Atuamos na criação dos conteúdos, na organização das atividades e na conexão com as escolas, buscando tornar o aprendizado mais acessível, prático e interessante.</p>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="row row-cols-2 justify-content-md-end gap-3">
                            <div className="col-10 col-md-5 bg-white shadow-sm p-4 rounded">
                                <Titulo titulo="+10" nivel={2} />
                                <p>Robôs montados em nosso site</p>
                            </div>
                            <div className="col-10 col-md-5 bg-white shadow-sm p-4 rounded">
                                <div>{icons.chapeu}</div>
                                <Titulo titulo="+3" nivel={2} />
                                <p>Escolas parceiras</p>
                            </div>
                            <div className="col-10 col-md-5 bg-white shadow-sm p-4 rounded">
                                <Titulo titulo="+3" nivel={2} />
                                <p>Escolas parceiras</p>
                            </div>
                            <div className="col-10 col-md-5 bg-white shadow-sm p-4 rounded">
                                <Titulo titulo="+3" nivel={2} />
                                <p>Escolas parceiras</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`${styles.container} py-5`}>

            </div>


            <Footer />

        </>
    )

}