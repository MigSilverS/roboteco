import styles from "./CardInfo.module.css"

export default function CardInfo({ icone, titulo, qntd, cor }) {
    return (
        <>
            <div
                className={`${styles.container} d-flex mt-1 mb-5 align-items-center gap-3`}
                style={{
                    backgroundColor: "var(--color-primary)", borderRadius: "50px"
                }}
            >
                <div className="rounded-circle d-flex justify-content-center align-items-center" style={{backgroundColor:`${cor}`, width: "65px", height: "65px"}}>
                    {icone}
                </div>

                <div className="">
                    <p
                        className="fw-normal"
                        style={{fontSize: "1rem"}}
                    >
                        {titulo}
                    </p>

                    <h1 className="fw-bold">
                        {qntd}
                    </h1>
                </div>
            </div >
        </>
    )
}