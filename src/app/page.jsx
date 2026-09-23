import styles from "./page.module.css";
import Botao from "@/app/components/Botao/Botao";
import NavBar from "@/app/components/NavBar/NavBar";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/app/components/Footer/Footer";
import Titulo from "@/app/components/Titulo/Titulo";
import Texto from "@/app/components/Texto/Texto";
import Card from "@/app/components/Card/Card";
import img from '@/app/images/image.png';

const icons = {
  book: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--red)" width={30} height={30} className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  schoolhat: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--red)" width={30} height={30} className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>

  ),
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20} className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  )

}

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={`${styles.container}`}>
        <div className="col-12 row mb-5">
          <div className="col-md-8 d-flex align-items-center">
            <div className="">
              <Titulo titulo="Robótica na escola pública" nivel={2} estilo={{ color: 'var(--red)' }} />
              <Titulo titulo="Destrave o lado tecnológico e criativo!" nivel={1} estilo={{ fontSize: '4.4rem' }} />
              <Texto texto="Explore robótica, programação e eletrônica. 
              Aprenda online e conheça as atividades presenciais para escolas da região." classe="lead" estilo={{ fontSize: '1.4rem' }} />
              <Botao icon={icons.calendar} texto="Agende uma aula experimental" classe="btn-danger" estilo={{ border: "1px solid #a8a8a8ff", height: "50px" }} />
            </div>
          </div>
          <div className="col-md-4 p-5 mt-5" style={{ backgroundColor: 'var(--blue)', borderRadius: '10px' }}>
            <div className="session">
              <div className="header d-flex gap-2">
                {icons.book}
                <Titulo titulo="Para aprender" nivel={2} estilo={{ color: 'var(--color-primary)' }} />
              </div>
              <div className="main mt-3 mb-3">
                <Texto texto="Aprenda robótica, programação e eletrônica através de conteúdos interativos, vídeos, materiais educativos e atividades práticas.
               Acompanhe sua evolução, conquiste pontos e desenvolva habilidades como lógica, criatividade e resolução de problemas." classe={"text-justify"} estilo={{ fontSize: '1.1rem', color: 'var(--color-primary)' }} />
              </div>
            </div>
            <div className="session">
              <div className="header d-flex gap-2">
                {icons.schoolhat}
                <Titulo titulo="Para participar" nivel={2} estilo={{ color: 'var(--color-primary)' }} />
              </div>
              <div className="main mt-3 mb-3">
                <Texto texto="Professores e responsáveis podem solicitar aulas experimentais ou atividades de robótica para a instituição. 
              A equipe ROBOTECO analisa a solicitação, organiza a programação e conecta os alunos à experiência prática." classe={"text-justify"} estilo={{ fontSize: '1.1rem', color: 'var(--color-primary)' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 row my-5">
          <hr />
          {/* <div className="d-flex justify-content-between">
            <Titulo titulo="Comece pelos conteúdos" nivel={2} />
            <a href="/pages/conteudos" className="text-decoration-none d-flex align-items-center" style={{ color: "black" }}>Ver Conteúdo</a>
          </div>
          <div className="cards row py-5 ">
            <div className="col-12 col-sm-12 col-md-4">
              <Card titulo="O que é robótica?" href="/pages/conteudos" miniTitulo="Robótica · Primeiros passos" texto="Entenda como sensores, comandos e movimentos trabalham juntos." />
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <Card titulo="Sequências e comandos" href="/pages/conteudos" miniTitulo="Programação · Primeiros passos" texto="Organize instruções para resolver um problema, uma etapa por vez." />

            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <Card titulo="Conhecendo os circuitos" href="/pages/conteudos" miniTitulo="Eletrônica · Primeiros passos" texto="Identifique os elementos de um circuito simples." />
            </div>
          </div> */}
          <div className="col-md-7 mt-3">
            <img src={img.src} className="w-100 rounded" alt="" />
          </div>
          <div className="col-md-5">
            <Titulo titulo="5 motivos para aprender programação na infância" nivel={1} />


            <div className="list-group mt-3 gap-3">


              <li className="list-group-item d-flex gap-3 py-2 px-3 align-items-center" style={{ borderRadius: "20px", backgroundColor: 'var(--gray)' }}>
                <div className="">
                  <Texto texto="1" classe={"rounded-circle px-3 py-2 fw-bold"} estilo={{ fontSize: '1.1rem', fontFamily: 'nunite sans', backgroundColor: 'var(--color-primary)', color: 'var(--red)' }} />
                </div>
                <div className="d-flex row gap-2 mt-3">
                  <div className="col-12 col-sm-12 col-md-12">
                    <Titulo titulo="Raciocínio lógico" nivel={5} />
                    <Texto texto="Aprenda a pensar de forma estruturada para resolver desafios." classe={"text-justify"} estilo={{ fontSize: '1.1rem' }} />
                  </div>
                </div>
              </li>



              <li className="list-group-item d-flex gap-3 py-2 px-3 align-items-center" style={{ borderRadius: "20px", backgroundColor: 'var(--gray)' }}>
                <div className="">
                  <Texto texto="2" classe={"rounded-circle px-3 py-2 fw-bold"} estilo={{ fontSize: '1.1rem', fontFamily: 'nunite sans', backgroundColor: 'var(--color-primary)', color: 'var(--red)' }} />
                </div>
                <div className="d-flex row gap-2 mt-3">
                  <div className="col-12 col-sm-12 col-md-12">
                    <Titulo titulo="Criatividade" nivel={5} />
                    <Texto texto="Transforme suas ideias em projetos." classe={"text-justify"} estilo={{ fontSize: '1.1rem' }} />
                  </div>
                </div>
              </li>



              <li className="list-group-item d-flex gap-3 py-2 px-3 align-items-center" style={{ borderRadius: "20px", backgroundColor: 'var(--gray)' }}>
                <div className="">
                  <Texto texto="3" classe={"rounded-circle px-3 py-2 fw-bold"} estilo={{ fontSize: '1.1rem', fontFamily: 'nunite sans', backgroundColor: 'var(--color-primary)', color: 'var(--red)' }} />
                </div>
                <div className="d-flex row gap-2 mt-3">
                  <div className="col-12 col-sm-12 col-md-12">
                    <Titulo titulo="Resolução de problemas" nivel={5} />
                    <Texto texto="Enfrente desafios, teste possibilidades e aprenda com seus erros." classe={"text-justify"} estilo={{ fontSize: '1.1rem' }} />
                  </div>
                </div>
              </li>



              <li className="list-group-item d-flex gap-3 py-2 px-3 align-items-center" style={{ borderRadius: "20px", backgroundColor: 'var(--gray)' }}>
                <div className="">
                  <Texto texto="4" classe={"rounded-circle px-3 py-2 fw-bold"} estilo={{ fontSize: '1.1rem', fontFamily: 'nunite sans', backgroundColor: 'var(--color-primary)', color: 'var(--red)' }} />
                </div>
                <div className="d-flex row gap-2 mt-3">
                  <div className="col-12 col-sm-12 col-md-12">
                    <Titulo titulo="Trabalho em equipe" nivel={5} />
                    <Texto texto="Colabore com outros alunos e compartilhe ideias." classe={"text-justify"} estilo={{ fontSize: '1.1rem' }} />
                  </div>
                </div>
              </li>



              <li className="list-group-item d-flex gap-3 py-2 px-3 align-items-center" style={{ borderRadius: "20px", backgroundColor: 'var(--gray)' }}>
                <div className="">
                  <Texto texto="5" classe={"rounded-circle px-3 py-2 fw-bold"} estilo={{ fontSize: '1.1rem', fontFamily: 'nunite sans', backgroundColor: 'var(--color-primary)', color: 'var(--red)' }} />
                </div>
                <div className="d-flex row gap-2 mt-3">
                  <div className="col-12 col-sm-12 col-md-12">
                    <Titulo titulo="Conhecimento tecnológico" nivel={5} />
                    <Texto texto="Conheça robótica, programação e eletrônica de forma prática e divertida." classe={"text-justify"} estilo={{ fontSize: '1.1rem' }} />
                  </div>
                </div>
              </li>



            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="px-5 align-items-center d-flex flex-wrap justify-content-between" style={{ background: "linear-gradient(55deg, var(--blue) 40%, #011827, #5c1010)", height: "20rem" }}>
          <div className="">
            <h3 className="fw-bold mb-2" style={{ color: "var(--color-primary)", fontSize: '3rem' }}>
              Conheça a Roboteco de perto!
            </h3>
            <p className="fw-normal mb-4" style={{ color: "var(--color-primary)" }}>
              Atendimento inicial em Guaratinguetá, Lorena, Aparecida e Potim. A equipe analisa a viabilidade de cada solicitação.
            </p>
          </div>
          <Botao icon={icons.calendar} texto="Agende uma aula experimental" classe="btn-danger" estilo={{ border: "1px solid #a8a8a8ff", height: "50px" }} />
        </div>
      </div>
      <Footer />
    </>
  );
}
