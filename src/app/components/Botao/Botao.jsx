import styles from "./Botao.module.css";

export default function Botao({ texto, classe, icon, estilo }) {
    return (
        <button className={`btn ${styles.btn} ${classe}`} style={estilo}>
            {texto}
            {icon}
        </button>
    );
}