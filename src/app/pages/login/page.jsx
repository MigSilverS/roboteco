import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import styles from "./login.module.css";
import img from "@/app/images/login.jpg";

export default function Login(){
    return (
    <div className={styles.pagina}>
        <NavBar/>
        <main className={styles.area}>
            <section className={styles.card}>
                <div className={styles.esquerda}>
                    <span>Roboteco</span><h1>Bem vindo(a) de volta!</h1>
                    <p>Continue sua jornada, explore novos conteúdos e coloque seus conhecimentos em prática.</p>
                    <Image src={img} alt="Robótica"/></div><div className={styles.direita}>
                        <h2>Acessar plataforma</h2><p>Insira seus dados para continuar sua jornada.</p>
                        <form className={styles.form}>
                            <label>Email</label><input/>
                            <label>Senha <small>Esqueceu a senha?</small></label>
                            <input type="password"/><div><input type="checkbox"/> Lembrar meu acesso nesse dispositivo</div>
                            <button>Iniciar sessão</button></form>
                            <p className={styles.link}>Primeira vez aqui? 
                                <Link href="/pages/cadastro">Crie sua conta</Link></p>
                                </div>
                                </section>
                                </main>
                                <Footer/>
                                </div>
    )
}
