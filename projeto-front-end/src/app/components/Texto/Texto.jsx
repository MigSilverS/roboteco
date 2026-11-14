export default function Texto({ texto, estilo, classe }) {
    return (
        <>
            <p className={classe} style={estilo}>
                {texto}
            </p>
        </>
    )
}