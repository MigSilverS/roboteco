export default function Titulo({ titulo, nivel }) {

    const Tag = (nivel >= 1 && nivel <= 6) ? `h${nivel}` : 'h3';

    return (
        <>
            <Tag className="fw-bold">
                {titulo}
            </Tag>
        </>
    )

}