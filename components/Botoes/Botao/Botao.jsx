import Link from "next/link";
import styles from "./Botao.module.css";

export default function Botao({
    texto,
    children,
    classe = "",
    className = "",
    icon,
    estilo,
    style,
    href = "#",
    ...props
}) {
    const classes = `btn ${styles.botao} ${classe} ${className}`.trim();
    const estilos = { ...estilo, ...style };

    return (
        <Link href={href} className={classes} style={estilos} {...props}>
            {children ?? (
                <>
                    {icon}
                    {texto} 
                </>
            )}
        </Link>
    );
}
