import styles from "./Botao.module.css";

export default function Botao({ texto, classe }) {
    return (
        <button className={`btn ${styles.btn} ${classe}`}>{texto}</button>
    );
}