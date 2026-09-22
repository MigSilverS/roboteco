import styles from "./CardConteudo.module.css";
import Botao from "../Botao/Botao";
import Texto from "../Texto/Texto";

const icons = {
    tempo: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width={20} height={20}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    ),
    pdf: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width={20} height={20}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
    ),
    camera: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width={20} height={20}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
    )
}

function renderTipo(tipo, key) {
    const valor = tipo?.trim();

    if (!valor) {
        return null;
    }

    const tipoNormalizado = valor.toLowerCase();

    const icon =
        tipoNormalizado === "texto" || tipoNormalizado === "pdf"
            ? icons.pdf
            : tipoNormalizado === "camera" || tipoNormalizado === "video"
                ? icons.camera
                : null;

    if (!icon) {
        return null;
    }

    return (
        <div key={key} className="d-flex gap-1">
            {icon}
            <p className="text-secondary mb-4">
                {valor}
            </p>
        </div>
    );
}

export default function CardConteudo({ miniTitulo, titulo, subtitulo, texto, tempo, tipo1, tipo2, disp }) {
    return (
        <div
            className={`${styles.container} mt-1 mb-5`}
            style={{
                backgroundColor: "var(--color-primary)",
                borderTop: "4px solid var(--red)",
            }}
        >
            <p className="text-secondary mb-2">
                {miniTitulo}
            </p>
            <h3
                className="fw-bold mb-2"
                style={{ color: "var(--blue)" }}
            >
                {titulo}
            </h3>

            <p className="fw-semibold mb-2">
                {subtitulo}
            </p>

            <p className="fw-normal mb-1">
                {texto}
            </p>

            <div className="d-flex gap-4">
                <div className="d-flex gap-1">
                    {icons.tempo}
                    <p className="text-secondary mb-4">
                        {tempo}
                    </p>
                </div>
                {renderTipo(tipo1, "tipo1")}
                {renderTipo(tipo2, "tipo2")}
            </div>


            <hr />
            <div className="d-flex justify-content-between">
                <Texto classe={"my-auto text-secondary"} texto={disp || "Exclusivo para alunos"} />
                <div>
                    <Botao texto={disp == "Público" ? "Ver Demonstração" : "Entrar para Acessar"} href={disp == "Público" ? "/pages/conteudos" : "/pages/login"} classe="btn-light" estilo={{ border: "1px solid #a8a8a8ff" }} />
                </div>
            </div>
        </div>
    );
}