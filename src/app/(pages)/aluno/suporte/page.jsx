
import styles from "./suporte.module.css"
import Titulo from "@/app/components/Titulo/Titulo"
import Texto from "@/app/components/Texto/Texto"
import Botao from "@/app/components/Botoes/Botao/Botao"
import SidebarPosLogin from "@/app/components/SidebarPosLogin/SidebarPosLogin"




export default function Suporte() {
    return (
        <>
            <SidebarPosLogin perfil="aluno">
            <div className={`${styles.container} mt-5 mb-5`}>
                <div className="row p-5 rounded" style={{ backgroundColor: "var(--yellow-weak)" }}>
                    <Titulo titulo="Suporte" nivel={2} />
                    <div className="col-md-12 row">
                        <div className="col-md-6 mt-5">
                            <Titulo titulo="Como Podemos te Ajudar?" nivel={1} estilo={{ fontSize: "5rem" }} />
                            <Texto texto="Envie sua dúvida para nossa equipe e entraremos em contato." classe={"mt-5"} estilo={{ fontSize: "2rem" }} />
                        </div>
                        <div className="col-md-6 p-5 rounded" style={{ backgroundColor: "var(--yellow)" }}>
                            <label htmlFor="assunto" className="form-label" style={{ fontFamily: "nunite sans" }}>Assunto</label>
                            <input type="text" className={`form-control ${styles.input} mb-3`} id="assunto" placeholder="Assunto" />
                            <label htmlFor="mensagem" className="form-label" style={{ fontFamily: "nunite sans" }}>Mensagem</label>
                            <textarea name="mensagem" id="mensagem" className={`form-control ${styles.input} mb-3`} rows={4} placeholder="Sua mensagem"></textarea>
                            <Botao texto="Enviar" classe={`btn-blue w-100 ${styles.botao}`} />
                        </div>
                    </div>
                </div>
            </div>
            </SidebarPosLogin>
        </>
    )
}