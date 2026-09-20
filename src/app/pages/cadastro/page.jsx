import Link from "next/link";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import Titulo from "@/app/components/Titulo/Titulo";
import Botao from "@/app/components/Botao/Botao";
import styles from "./cadastro.module.css";

export default function Cadastro() {
    return (
        <div className={styles.pagina}>
            <NavBar />

            <main className={styles.conteudo}>
                <div className={styles.formulario}>
                    <Titulo titulo="Crie sua conta de aluno" nivel={2} />
                    <p className={styles.subtitulo}>Acesse os conteúdos e acompanhe suas atividades.</p>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className={`form-control ${styles.input}`} id="nome" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className={`form-control ${styles.input}`} id="email" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input type="password" className={`form-control ${styles.input}`} id="senha" />
                        </div>

                        <Botao texto="Criar conta" classe={`btn-danger w-100 ${styles.botao}`} />
                    </form>

                    <p className={styles.linkConta}>
                        Já tem conta? <Link href="/pages/login">Entrar</Link>
                    </p>

                    <p className={styles.linkEscola}>
                        <Link href="/pages/escola/para-escolas">Representa uma escola? Veja como participar.</Link>
                    </p>
                </div>
            </main>

            <Footer/>
        </div>
    );
}
