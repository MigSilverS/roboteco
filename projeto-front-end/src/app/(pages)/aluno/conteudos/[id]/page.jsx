import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiBookOpen, FiCheckCircle, FiClock } from "react-icons/fi";
import SidebarPosLogin from "@/app/components/SidebarPosLogin/SidebarPosLogin";
import Footer from "@/app/components/Footer/Footer";
import Botao from "@/app/components/Botoes/Botao/Botao";
import { conteudos } from "@/app/dados/conteudos";
import styles from "./conteudo.module.css";

export default async function Conteudo({ params }) {
    const { id } = await params;
    const conteudo = Object.hasOwn(conteudos, id) ? conteudos[id] : null;

    if (!conteudo) {
        notFound();
    }

    const ids = Object.keys(conteudos);
    const proximoId = ids[ids.indexOf(id) + 1];

    return (
        <SidebarPosLogin perfil="aluno">
            <div className={styles.container}>
                <Link href="/aluno/conteudos" className={styles.voltar}>
                    <FiArrowLeft aria-hidden="true" /> Voltar para conteúdos
                </Link>

                <header className={styles.cabecalho}>
                    <span className={styles.categoria}>{conteudo.categoria} · {conteudo.nivel}</span>
                    <h1>{conteudo.titulo}</h1>
                    <p>{conteudo.descricao}</p>
                    <div className={styles.metadados}>
                        <span><FiClock aria-hidden="true" /> {conteudo.tempo} de leitura</span>
                        <span><FiBookOpen aria-hidden="true" /> Texto e atividade</span>
                    </div>
                </header>

                <div className={styles.layout}>
                    <article className={styles.aula} aria-label="Material da aula">
                        {conteudo.secoes.map((secao, indice) => (
                            <section key={secao.titulo} id={`etapa-${indice + 1}`} className={styles.secao}>
                                <span className={styles.numero}>0{indice + 1}</span>
                                <h2>{secao.titulo}</h2>
                                <p>{secao.texto}</p>
                            </section>
                        ))}

                        <section id="atividade" className={styles.atividade}>
                            <span className={styles.categoria}>Sua vez de criar</span>
                            <h2>{conteudo.atividade.titulo}</h2>
                            <p>{conteudo.atividade.descricao}</p>
                            <ol>
                                {conteudo.atividade.passos.map((passo) => <li key={passo}>{passo}</li>)}
                            </ol>
                            <p className="fw-bold">{conteudo.atividade.pergunta}</p>
                            <details className={styles.resposta}>
                                <summary>Conferir uma possível resposta</summary>
                                <p>{conteudo.atividade.resposta}</p>
                            </details>
                        </section>
                    </article>

                    <aside className={styles.resumo} aria-label="Guia do conteúdo">
                        <section className={styles.cartao}>
                            <h2>O que você vai aprender</h2>
                            <ul className={styles.objetivos}>
                                {conteudo.objetivos.map((objetivo) => (
                                    <li key={objetivo}><FiCheckCircle aria-hidden="true" /><span>{objetivo}</span></li>
                                ))}
                            </ul>
                            <hr />
                            <nav aria-label="Nesta aula">
                                <h3>Nesta aula</h3>
                                {conteudo.secoes.map((secao, indice) => (
                                    <a key={secao.titulo} href={`#etapa-${indice + 1}`}>{indice + 1}. {secao.titulo}</a>
                                ))}
                                <a href="#atividade">4. Hora de praticar</a>
                            </nav>
                        </section>
                        <section className={styles.lembrete}>
                            <h2>Guarde essa ideia!</h2>
                            <p>{conteudo.lembrete}</p>
                        </section>
                    </aside>
                </div>

                <div className={styles.acoes}>
                    <Botao href="/aluno/conteudos" classe="btn-light" icon={<FiArrowLeft aria-hidden="true" />} texto="Todos os conteúdos" />
                    {proximoId && (
                        <Botao href={`/aluno/conteudos/${proximoId}`} classe="btn-blue">
                            Próximo: {conteudos[proximoId].titulo} <FiArrowRight aria-hidden="true" />
                        </Botao>
                    )}
                </div>
            </div>
            <Footer />
        </SidebarPosLogin>
    );
}
