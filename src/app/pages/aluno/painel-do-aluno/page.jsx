import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import styles from "./paineldoaluno.module.css"
import Texto from "@/app/components/Texto/Texto";
import Titulo from "@/app/components/Titulo/Titulo";
import Nivel from "@/app/components/Nivel/Nivel";
import Xp from "@/app/components/Xp/Xp";
import { CiMedal } from "react-icons/ci";

const icons = {
    fire: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--color-primary)" className="size-6" width={20} height={20}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
    ),
    medal: (
        <CiMedal size={30} color="var(--color-primary)" />
    ),
    trophy: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--color-primary)" className="size-6" width={50} height={50}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>
    )
}

export default function PainelDoAluno() {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 mt-5 mb-5 p-4 rounded d-flex" style={{ background: "linear-gradient(55deg, var(--blue) 40%, #011827, #123d12)" }}>
                        <div className="col-6 col-sm-6 col-md-6 d-flex flex-column gap-3">
                            <div className="">
                                <div className="d-flex rounded justify-content-center align-items-center" style={{ backgroundColor: "var(--red)", width: "20%", height: "35px" }}>
                                    {icons.fire}
                                    <Texto icon texto="12 Dias seguidos!" classe="text-white" />
                                </div>
                            </div>
                            <div className="">
                                <Titulo titulo="Olá, Pequeno Engenheiro!" nivel={1} estilo={{ fontSize: "3.5rem", color: "var(--color-primary)" }} />
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                {icons.medal}
                                <Nivel nivel={4} titulo="Mestre dos Circuitos" />
                            </div>
                            <div className="">
                                <Xp currentXP={500} maxXP={1000} />
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 d-flex flex-column gap-3 align-items-end justify-content-center">
                            <div className="d-flex p-4 gap-3 align-items-center" style={{width: "40%", borderRadius: 30, backgroundColor: "#9c9b9b65"}}>
                                {icons.trophy}
                                <Texto icon texto="5 Conquistas" classe="text-white" estilo={{fontSize: "1.5rem"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}