import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import Titulo from "@/app/components/Titulo/Titulo";
import Texto from "@/app/components/Texto/Texto";
import img from "@/app/images/login.jpg";
import Botao from "@/app/components/Botao/Botao";

export default function Login() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />

            <main
                className="flex-grow-1 d-flex align-items-center py-5"
                style={{
                    background: "radial-gradient(circle at top left, rgba(245, 158, 11, 0.28), transparent 28%), linear-gradient(135deg, var(--yellow-weak) 0%, #ffffff 42%, rgba(82, 122, 145, 0.18) 100%)"
                }}
            >
                <div className="container py-4 py-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-10">
                            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
                                <div className="row g-0">
                                    <section
                                        className="col-12 col-lg-5 text-white d-flex"
                                        style={{ backgroundColor: "var(--blue)" }}
                                    >
                                        <div className="w-100 d-flex flex-column p-4 p-md-5">
                                            <span
                                                className="badge rounded-pill align-self-start mb-4 px-3 py-2"
                                                style={{ backgroundColor: "var(--yellow)", color: "var(--blue)" }}
                                            >
                                                Roboteco
                                            </span>

                                            <Titulo
                                                titulo="Bem vindo(a) de volta!"
                                                nivel={1}
                                                estilo={{ color: "var(--yellow)", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.05 }}
                                            />

                                            <Texto
                                                texto="Continue sua jornada, explore novos conteúdos e coloque seus conhecimentos em prática."
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
                                                    titulo="Acessar plataforma"
                                                    nivel={2}
                                                    estilo={{ color: "var(--blue)" }}
                                                />
                                                <Texto
                                                    texto="Insira seus dados para continuar sua jornada."
                                                    classe="text-muted mb-0"
                                                />
                                            </div>

                                            <div
                                                className="rounded-4 p-4 p-md-5 border"
                                                style={{ backgroundColor: "var(--yellow-weak)", borderColor: "rgba(2, 36, 58, 0.08)" }}
                                            >
                                                <form className="row g-3">
                                                    <div className="col-12">
                                                        <label htmlFor="login-email" className="form-label fw-semibold text-dark">
                                                            Email
                                                        </label>
                                                        <input
                                                            id="login-email"
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Value"
                                                        />
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="d-flex justify-content-between align-items-center gap-3 mb-1">
                                                            <label htmlFor="login-password" className="form-label fw-semibold text-dark mb-0">
                                                                Senha
                                                            </label>
                                                            <Link href="#" className="small text-decoration-underline" style={{ color: "var(--blue)" }}>
                                                                Esqueceu a senha?
                                                            </Link>
                                                        </div>
                                                        <input
                                                            id="login-password"
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Value"
                                                        />
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-check mt-1">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="remember-access"
                                                            />
                                                            <label className="form-check-label" htmlFor="remember-access">
                                                                Lembrar meu acesso nesse dispositivo
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 d-flex justify-content-center pt-3 pt-md-4">
                                                        <Botao
                                                            type="submit"
                                                            className="btn btn-success rounded-pill px-4 fw-semibold shadow-sm"
                                                            texto="Iniciar sessão"
                                                        />
                                                            
                                                    </div>

                                                    <div className="col-12 text-center pt-3">
                                                        <Texto
                                                            texto="Primeira vez aqui?"
                                                            classe="mb-0"
                                                            estilo={{ color: "var(--blue)" }}
                                                        />
                                                        <Link href="/pages/cadastro" className="fw-semibold text-decoration-none" style={{ color: "var(--blue)" }}>
                                                            Crie sua conta
                                                        </Link>
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
