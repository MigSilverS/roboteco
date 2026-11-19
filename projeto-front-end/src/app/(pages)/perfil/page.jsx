"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import Titulo from "@/app/components/Titulo/Titulo";
import Texto from "@/app/components/Texto/Texto";
import Botao from "@/app/components/Botoes/Botao/Botao";
import {
    atualizarUsuarioLogado,
    obterNomeTipoUsuario,
    obterRotaPorTipoUsuario,
    obterUsuarioLogado,
    sairDoSistema
} from "@/app/dados/cadastro";

export default function Perfil() {
    const router = useRouter();
    const [usuario, setUsuario] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [mensagem, setMensagem] = useState({ tipo: "", texto: "" });

    useEffect(() => {
        const usuarioAtual = obterUsuarioLogado();

        if (!usuarioAtual) {
            return;
        }

        setUsuario(usuarioAtual);
        setNome(usuarioAtual.usuNome);
        setEmail(usuarioAtual.usuEmail);
    }, []);

    function handleSalvar(event) {
        event.preventDefault();

        const resultado = atualizarUsuarioLogado({
            usuNome: nome,
            usuEmail: email,
            usuSenha: novaSenha
        });

        if (!resultado.ok) {
            setMensagem({ tipo: "erro", texto: resultado.mensagem });
            return;
        }

        setUsuario(resultado.usuario);
        setNovaSenha("");
        setMensagem({ tipo: "sucesso", texto: resultado.mensagem });
    }

    function handleSair() {
        sairDoSistema();
        router.push("/login");
    }

    if (!usuario) {
        return (
            <div className="d-flex flex-column min-vh-100">
                <NavBar />
                <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5" style={{ backgroundColor: "var(--yellow-weak)" }}>
                    <div className="container" style={{ maxWidth: "700px" }}>
                        <div className="card border-0 shadow rounded-4 p-4 p-md-5 text-center">
                            <Titulo titulo="Perfil" nivel={2} estilo={{ color: "var(--blue)" }} />
                            <Texto texto="Para acessar o perfil, faça login primeiro." classe="text-muted mb-4" />
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <Botao href="/login" texto="Ir para login" classe="btn-success" />
                                <Botao href="/cadastro" texto="Criar conta" classe="btn-light" />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const tipoUsuario = obterNomeTipoUsuario(usuario.tipId);
    const rotaPainel = obterRotaPorTipoUsuario(usuario.tipId);

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />

            <main
                className="flex-grow-1 d-flex align-items-center py-5"
                style={{
                    background: "radial-gradient(circle at top right, rgba(245, 158, 11, 0.22), transparent 28%), linear-gradient(135deg, var(--yellow-weak) 0%, #ffffff 42%, rgba(82, 122, 145, 0.18) 100%)"
                }}
            >
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-9">
                            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
                                <div className="row g-0">
                                    <section className="col-12 col-lg-4 text-white d-flex" style={{ backgroundColor: "var(--blue)" }}>
                                        <div className="w-100 d-flex flex-column p-4 p-md-5">
                                            <span className="badge rounded-pill align-self-start mb-4 px-3 py-2" style={{ backgroundColor: "var(--yellow)", color: "var(--blue)" }}>
                                                Meu perfil
                                            </span>

                                            <Titulo
                                                titulo={usuario.tipId === 3 ? "Perfil da equipe" : "Perfil do aluno"}
                                                nivel={2}
                                                estilo={{ color: "var(--yellow)", lineHeight: 1.1 }}
                                            />

                                            <Texto
                                                texto="Edite suas informações de acesso de forma simples e rápida."
                                                classe="text-white-50 mt-3"
                                            />

                                            <div className="mt-auto">
                                                <Texto texto={`Tipo: ${tipoUsuario}`} classe="mb-1" estilo={{ color: "var(--yellow)" }} />
                                                <Texto texto={`ID: ${usuario.usuId}`} classe="mb-0" estilo={{ color: "#e5e7eb" }} />
                                            </div>
                                        </div>
                                    </section>

                                    <section className="col-12 col-lg-8 p-4 p-md-5 bg-body-tertiary">
                                        <form className="row g-3" onSubmit={handleSalvar}>
                                            <div className="col-12">
                                                <label htmlFor="perfil-nome" className="form-label fw-semibold text-dark">
                                                    Nome
                                                </label>
                                                <input
                                                    id="perfil-nome"
                                                    type="text"
                                                    className="form-control"
                                                    value={nome}
                                                    onChange={(event) => setNome(event.target.value)}
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="perfil-email" className="form-label fw-semibold text-dark">
                                                    E-mail
                                                </label>
                                                <input
                                                    id="perfil-email"
                                                    type="email"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(event) => setEmail(event.target.value)}
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="perfil-senha" className="form-label fw-semibold text-dark">
                                                    Nova senha (opcional)
                                                </label>
                                                <input
                                                    id="perfil-senha"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Digite apenas se quiser alterar"
                                                    value={novaSenha}
                                                    onChange={(event) => setNovaSenha(event.target.value)}
                                                />
                                            </div>

                                            {mensagem.texto ? (
                                                <div className="col-12">
                                                    <div className={`alert ${mensagem.tipo === "sucesso" ? "alert-success" : "alert-danger"} mb-0`} role="alert">
                                                        {mensagem.texto}
                                                    </div>
                                                </div>
                                            ) : null}

                                            <div className="col-12 d-flex gap-2 flex-wrap pt-3">
                                                <button type="submit" className="btn btn-success rounded-pill px-4 fw-semibold shadow-sm">
                                                    Salvar alterações
                                                </button>

                                                <Botao href={rotaPainel} texto="Voltar ao painel" classe="btn-light" />

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger rounded-pill px-4 fw-semibold"
                                                    onClick={handleSair}
                                                >
                                                    Sair da conta
                                                </button>
                                            </div>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
