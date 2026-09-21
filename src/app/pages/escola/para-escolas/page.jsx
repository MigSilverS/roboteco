import Botao from "@/app/components/Botao/Botao";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";
import styles from "./paraescolas.module.css";
import img from '@/app/images/case-escola.png';

export default function ParaEscolas() {

    const icon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={15} height={15}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    )

    return (

        <>
            <NavBar />

            <div className={`${styles.container} mt-5 mb-5`}>

                <Titulo titulo="Sua escola no Roboteco" nivel={1} />

                <p>Aulas presenciais de robótica começam com uma solicitação do representante da instituição</p>

                <div className="row mt-3">

                    <div className="col-12 col-md-6">
                        <Titulo titulo="1. Envie o interesse" nivel={5} />
                        <p>Informe a escola, o responsável, a quantidade de alunos e as datas preferenciais.</p>
                    </div>

                    <div className="col-12 col-md-6">
                        <Titulo titulo="2. Acompanhe a análise" nivel={5} />
                        <p>A equipe verifica os dados e a logística. Uma preferência de data ainda não é um agendamento.</p>
                    </div>
                </div>

                <hr />

                <p>Municípios elegíveis nesta etapa: Guaratinguetá, Lorena, Aparecida e Potim.</p>

                <hr />

                <div className="d-flex flex-wrap gap-3 mt-3">
                    <Botao texto="Solicitar aula experimental" classe="text-white btn-danger p-2" />
                    <Botao texto="Solicitar aula experimental" classe="btn-light border p-2" />
                </div>

                <div className="mt-3">
                    <p>A solicitação deve ser feita por um representante legal ou pedagógico. Cada escola pode solicitar uma experimental por período de contrato.</p>
                </div>

                <hr />

                <div className="mt-5 mb-5">
                    <div>
                        <Titulo titulo="Escolas participantes" nivel={2} />
                        <p>Alguns dos nossos clientes</p>
                    </div>

                    <div className="bg-white shadow-sm rounded-2">

                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={img.src} alt="" className="w-100 rounded-start-2" />
                            </div>
                            <div className="col-12 col-md-6 rounded-end-2">
                                <span className="fw-semibold">Escola Parceira [Exemplo Ilustrativo] • Guaratinguetá, SP</span>
                                <div className="mt-3">
                                    <Titulo titulo="Projeto Carro Robô com Sensores Autônomos" nivel={3} />
                                    <p>Turma do 6º ano explorando lógica de programação e montagem mecânica. Os estudantes desenvolveram protótipos capazes de desviar de obstáculos usando sensores ultrassônicos, integrando física e computação de forma colaborativa.</p>
                                </div>

                                <div className="border-start border-3 border-danger bg-light ps-3 py-2 me-4">
                                    <p className="">
                                        “A motivação dos estudantes durante a oficina transformou a dinâmica da sala de aula. Ver o projeto funcionando na prática despertou um interesse genuíno por ciência.”
                                    </p>
                                    <p>— Profª. Mariana Silveira, Coordenação Pedagógica (Depoimento ilustrativo)</p>
                                </div>

                                <div className="d-flex justify-content-end m-4">
                                    <Botao texto="Conheça essa experiência" classe="d-flex align-items-center gap-2 fw-bold text-danger bg-light" icon={icon} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <hr />

                <div className="d-flex flex-column justify-content-center align-items-center bg-light border rounded-2 mt-5 p-5">
                    <div className="">
                        <Titulo titulo="Sua escola pode viver essa experiência" nivel={2} />
                    </div>
                    <div className="mt-2">
                        <p>Envie o interesse e converse com nossa equipe sobre as possibilidades para a sua instituição.</p>
                    </div>
                    <div className="d-flex flex-wrap gap-3 mt-4">
                        <Botao texto="Solicitar aula experimental" classe="text-white btn-danger p-3" />
                        <Botao texto="Falar com consultor pedagógico" classe="btn-light border p-3" />
                    </div>
                    <div className="mt-3">
                        <p>Atendimento prioritário para escolas da região metropolitana do Vale do Paraíba.</p>
                    </div>
                </div>


            </div>

            <Footer />
        </>
    )

}