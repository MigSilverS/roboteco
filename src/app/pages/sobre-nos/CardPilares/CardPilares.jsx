import Titulo from "@/app/components/Titulo/Titulo";

export default function CardPilares({ icon, titulo, texto, rodape, classe, estilo }) {

    return (

        <>

            <div className={`${classe} col-md-3 py-3`} style={estilo}>
                <div className="mt-3">
                    {icon}
                </div>

                <div className="mt-3">
                    <Titulo titulo={titulo} nivel={3}/>
                </div>

                <div>
                    {texto}
                </div>

                <hr />

                <div className="mt-3">
                    {rodape}
                </div>

            </div>

        </>

    )

}