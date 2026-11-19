"use client";

import { useState } from "react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import Titulo from "@/app/components/Titulo/Titulo";
import Texto from "@/app/components/Texto/Texto";
import Botao from "@/app/components/Botoes/Botao/Botao";
import img from "@/app/images/image.png";
import { cadastrarUsuario } from "@/app/dados/cadastro";

export default function Cadastro() {
    const [tipoCadastro, setTipoCadastro] = useState("aluno");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    const [aceitouTermos, setAceitouTermos] = useState(false);
    const [mensagem, setMensagem] = useState({ tipo: "", texto: "" });
    const isAluno = tipoCadastro === "aluno";

    function limparFormulario() {
        setNome("");
        setEmail("");
        setSenha("");
        setConfirmacaoSenha("");
        setAceitouTermos(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!nome.trim() || !email.trim() || !senha.trim()) {
            setMensagem({ tipo: "erro", texto: "Preencha nome, e-mail e senha." });
            return;
        }

        if (senha !== confirmacaoSenha) {
            setMensagem({ tipo: "erro", texto: "A confirmação de senha não confere." });
            return;
        }

        if (!aceitouTermos) {
            setMensagem({ tipo: "erro", texto: "Você precisa aceitar os Termos de Uso." });
            return;
        }

        const resultado = cadastrarUsuario({
            usuNome: nome,
            usuEmail: email,
            usuSenha: senha,
            tipId: isAluno ? 1 : 2
        });

        if (!resultado.ok) {
            setMensagem({ tipo: "erro", texto: resultado.mensagem });
            return;
        }

        setMensagem({ tipo: "sucesso", texto: `${resultado.mensagem} Faça login para continuar.` });
        limparFormulario();
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <main
                className="flex-grow-1 d-flex align-items-center py-5"
                style={{
                    background: "radial-gradient(circle at top right, rgba(245, 158, 11, 0.24), transparent 28%), linear-gradient(135deg, var(--yellow-weak) 0%, #ffffff 42%, rgba(82, 122, 145, 0.18) 100%)"
                }}
            >
                <div className="container py-4 py-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-10">
                            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
                                <div className="row g-0 flex-column-reverse flex-lg-row">
                                    <section className="col-12 col-lg-5 text-white d-flex" style={{ backgroundColor: "var(--blue)" }}>
                                        <div className="w-100 d-flex flex-column p-4 p-md-5">
                                            <span
                                                className="badge rounded-pill align-self-start mb-4 px-3 py-2"
                                                style={{ backgroundColor: "var(--yellow)", color: "var(--blue)" }}
                                            >
                                                Passo 1 de 3
                                            </span>

                                            <Titulo
                                                titulo="Crie sua conta no Roboteco"
                                                nivel={1}
                                                estilo={{ color: "var(--yellow)", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.05 }}
                                            />

                                            <Texto
                                                texto="Comece a jornada tecnológica hoje mesmo. Menos de 2 minutos para configurar."
                                                classe="lead text-white-50 mt-3 mb-4"
                                            />

                                            <div className="mt-auto">
                                                <div className="position-relative overflow-hidden rounded-4 shadow-lg" style={{ minHeight: "340px" }}>
                                                    <Image
                                                        src={img}
                                                        alt="Estudantes trabalhando em um projeto de robótica"
                                                        fill
                                                        priority
                                                        sizes="(max-width: 992px) 100vw, 45vw"
                                                        className="object-fit-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="col-12 col-lg-7 d-flex align-items-center justify-content-center p-4 p-md-5 bg-body-tertiary">
                                        <div className="w-100" style={{ maxWidth: "560px" }}>
                                            <div className="text-center mb-4 mb-md-5">
                                                <Titulo
                                                    titulo={isAluno ? "Cadastro de estudante" : "Cadastro de escola/professor"}
                                                    nivel={2}
                                                    estilo={{ color: "var(--blue)" }}
                                                />
                                                <Texto
                                                    texto={isAluno ? "Preencha os dados abaixo para criar seu acesso." : "Cadastre a instituição ou seu perfil de professor."}
                                                    classe="text-muted mb-0"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <div className="d-flex gap-2 p-2 rounded-4 border bg-white shadow-sm">
                                                    <button
                                                        type="button"
                                                        className={`btn flex-fill rounded-pill fw-semibold ${
                                                            isAluno ? "btn-primary text-white" : "btn-outline-primary"
                                                        }`}
                                                        onClick={() => setTipoCadastro("aluno")}
                                                    >
                                                        Aluno
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className={`btn flex-fill rounded-pill fw-semibold ${
                                                            !isAluno ? "btn-primary text-white" : "btn-outline-primary"
                                                        }`}
                                                        onClick={() => setTipoCadastro("escola")}
                                                    >
                                                        Escola / Professor
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                className="rounded-4 p-4 p-md-5 border"
                                                style={{ backgroundColor: "var(--yellow-weak)", borderColor: "rgba(2, 36, 58, 0.08)" }}
                                            >
                                                <form className="row g-3" onSubmit={handleSubmit}>
                                                    {isAluno ? (
                                                        <>
                                                            <div className="col-12">
                                                                <label htmlFor="cadastro-nome" className="form-label fw-semibold text-dark">
                                                                    Nome completo
                                                                </label>
                                                                <input
                                                                    id="cadastro-nome"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Seu nome completo"
                                                                    value={nome}
                                                                    onChange={(event) => setNome(event.target.value)}
                                                                />
                                                            </div>

                                                            <div className="col-12">
                                                                <label htmlFor="cadastro-email" className="form-label fw-semibold text-dark">
                                                                    E-mail principal
                                                                </label>
                                                                <input
                                                                    id="cadastro-email"
                                                                    type="email"
                                                                    className="form-control"
                                                                    placeholder="voce@exemplo.com"
                                                                    value={email}
                                                                    onChange={(event) => setEmail(event.target.value)}
                                                                />
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="col-12">
                                                                <label htmlFor="cadastro-instituicao" className="form-label fw-semibold text-dark">
                                                                    Nome da escola ou instituição
                                                                </label>
                                                                <input
                                                                    id="cadastro-instituicao"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Nome da escola / instituição"
                                                                />
                                                            </div>

                                                            <div className="col-12">
                                                                <label htmlFor="cadastro-responsavel" className="form-label fw-semibold text-dark">
                                                                    Nome do responsável ou professor
                                                                </label>
                                                                <input
                                                                    id="cadastro-responsavel"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Seu nome completo"
                                                                    value={nome}
                                                                    onChange={(event) => setNome(event.target.value)}
                                                                />
                                                            </div>

                                                            <div className="col-12">
                                                                <label htmlFor="cadastro-email" className="form-label fw-semibold text-dark">
                                                                    E-mail institucional
                                                                </label>
                                                                <input
                                                                    id="cadastro-email"
                                                                    type="email"
                                                                    className="form-control"
                                                                    placeholder="contato@escola.com"
                                                                    value={email}
                                                                    onChange={(event) => setEmail(event.target.value)}
                                                                />
                                                            </div>
                                                        </>
                                                    )}

                                                    <div className="col-12 col-md-6">
                                                        <label htmlFor="cadastro-senha" className="form-label fw-semibold text-dark">
                                                            Senha
                                                        </label>
                                                        <input
                                                            id="cadastro-senha"
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Criar senha"
                                                            value={senha}
                                                            onChange={(event) => setSenha(event.target.value)}
                                                        />
                                                    </div>

                                                    <div className="col-12 col-md-6">
                                                        <label htmlFor="cadastro-confirmacao" className="form-label fw-semibold text-dark">
                                                            Confirmação de senha
                                                        </label>
                                                        <input
                                                            id="cadastro-confirmacao"
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Repetir senha"
                                                            value={confirmacaoSenha}
                                                            onChange={(event) => setConfirmacaoSenha(event.target.value)}
                                                        />
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-check mt-1">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="aceite-termos"
                                                                checked={aceitouTermos}
                                                                onChange={(event) => setAceitouTermos(event.target.checked)}
                                                            />
                                                            <label className="form-check-label" htmlFor="aceite-termos">
                                                                Li e concordo com os Termos de Uso
                                                            </label>
                                                        </div>
                                                    </div>

                                                    {mensagem.texto ? (
                                                        <div className="col-12">
                                                            <div
                                                                className={`alert ${mensagem.tipo === "sucesso" ? "alert-success" : "alert-danger"} mb-0`}
                                                                role="alert"
                                                            >
                                                                {mensagem.texto}
                                                            </div>
                                                        </div>
                                                    ) : null}

                                                    <div className="col-12 d-flex justify-content-center pt-3 pt-md-4">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success rounded-pill px-4 fw-semibold shadow-sm"
                                                        >
                                                            {isAluno ? "Concluir matrícula" : "Concluir cadastro"}
                                                        </button>
                                                    </div>

                                                    <div className="col-12 text-center pt-3">
                                                        <Texto
                                                            texto="Já tem uma conta no Roboteco?"
                                                            classe="mb-2"
                                                            estilo={{ color: "var(--blue)" }}
                                                        />
                                                        <Botao
                                                            href="/login"
                                                            texto="Fazer login"
                                                            classe="btn-light"
                                                            className="px-4"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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
