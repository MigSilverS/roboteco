import Titulo from "@/app/components/Titulo/Titulo";

export default function CardEquipe({ img, nome, funcao, descricao }) {

    return (
        <div className="col-12 col-md-4 mb-3">
            <div className="card h-100 mb-3" style={{ borderRadius: '25px' }}>
                <div className="ratio ratio-4x3">
                    <img src={img.src} className="card-img-top p-4 object-fit-cover" alt={nome} style={{ borderRadius: '35px' }} />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <Titulo titulo={nome} nivel={5} />
                        <span className="fs-6 fw-semibold" style={{ color: 'var(--red)' }}>{funcao}</span>
                    </div>
                    <p className="card-text">
                        {descricao}
                    </p>
                </div>
            </div>
        </div>

    )

}