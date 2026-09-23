import Link from "next/link";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import styles from "./cadastro.module.css";

export default function Cadastro(){
    return (
    <div className={styles.pagina}>
        <NavBar/>
        <main className={styles.area}>
            <div className={styles.box}>
                <p className={styles.pass}>● PASSO 1 DE 3: DADOS BÁSICOS</p>
                <h1>Crie sua conta no Roboteco</h1>
                <p>Comece a jornada tecnológica hoje mesmo. Menos de 2 minutos para configurar.</p>
                <form>
                    <label>Nome Completo *</label>
                    <input/><label>E-mail principal *</label>
                    <input/><div className={styles.duplo}><div>
                        <label>Senha *</label><input/></div>
                        <div><label>Confirmação de senha *</label><input/></div></div>
                        <p><input type="checkbox"/> Li e concordo com os Termos de Uso</p>
                        <button>Concluir Matrícula • Criar Conta →</button></form>
                        <p>Já tem uma conta no Roboteco? <Link href="/pages/login">Fazer login</Link></p></div></main>
                        <Footer/>
                        </div>
    )
}
