import Titulo from "@/app/components/Titulo/Titulo";

export default function CardPilares({ icon, titulo, texto, rodape, classe, estilo }) {

    return (

        <>
            <div className="col-12 col-sm-6 col-md-3 mb-3">
                <div className={`${classe} d-flex flex-column p-4 h-100`} style={{ ...estilo, borderRadius: '35px' }}>
                    <div className="mt-3">
                        {icon}
                    </div>

                    <div className="mt-3">
                        <Titulo titulo={titulo} nivel={5} />
                    </div>

                    <div className="mt-4 flex-grow-1">
                        {texto}
                    </div>

                    <div className="mt-auto">
                        <hr />
                        <div className="mt-2 text-white">{rodape}</div>
                    </div>

                </div>
            </div>

        </>

    )

}