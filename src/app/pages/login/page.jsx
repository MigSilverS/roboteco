import Link from "next/link";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import Titulo from "@/app/components/Titulo/Titulo";
import Botao from "@/app/components/Botao/Botao";
import styles from "./login.module.css";

export default function Login() {
    return (
        <div className={styles.pagina}>
            <NavBar />

            <main className={styles.conteudo}>
                <div className={styles.formulario}>
                    <Titulo titulo="Entrar" nivel={2} />
                    <p className={styles.subtitulo}>Use o e-mail e a senha da sua conta.</p>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className={`form-control ${styles.input}`} id="email" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input type="password" className={`form-control ${styles.input}`} id="senha" />
                        </div>

                        <Botao href="../pages/conteudos" texto="Entrar" classe={`btn-danger w-100 ${styles.botao}`} />
                    </form>

                    <p className={styles.linkConta}>
                        É aluno e ainda não tem conta? <Link href="/pages/cadastro">Criar conta</Link>
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
