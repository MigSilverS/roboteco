export default function Titulo({ titulo, nivel, estilo }) {

    const Tag = (nivel >= 1 && nivel <= 6) ? `h${nivel}` : 'h3';

    return (
        <>
            <Tag className="fw-bold m-0 p-0" style={estilo}>
                {titulo}
            </Tag>
        </>
    )

}