import styles from "./Card.module.css";
import Botao from "../Botao/Botao";

export default function Card({miniTitulo, titulo, subtitulo, texto,  }) {
    return (
        <div
            className={`${styles.container} mt-1 mb-5 row ${styles.container}`}
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

            <p className="fw-normal mb-4">
                {texto}
            </p>

            <Botao texto="Saiba mais" classe="btn-light" estilo={{ border: "1px solid #a8a8a8ff" }} />
        </div>
    );
}