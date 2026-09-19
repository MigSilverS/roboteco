import styles from "./Botao.module.css";

export default function Botao({ texto, classe, icon, style }) {
    return (
        <button className={`btn ${styles.btn} ${classe}`} style={style}>
            {icon}
            {texto}
        </button>
    );
}