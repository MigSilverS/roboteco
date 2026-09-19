export default function Titulo({ titulo, Tag = nivel }) {

    const Tag = (nivel >= 1 && nivel <= 6) ? `h${nivel}` : 'h3';

    return (
        <>
            <Tag>
                {titulo}
            </Tag>
        </>
    )

}