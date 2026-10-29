export default function Duvidas() {

    return (
        <>
            <div className="row mt-4">
                <div className="col-12 p-3 rounded-5" style={{ backgroundColor: "#e3e8f9" }}>
                    <div className="d-flex align-items-center gap-3">
                        <span className="p-2 rounded-circle text-white fw-bold fs-5" style={{ backgroundColor: "var(--blue)" }} >PH</span>
                        <div>
                            <span className="fw-semibold">Pedro Henrique</span>
                            <p className="" style={{ color: "var(--red)", fontSize: "0.9em" }}>Há 15 minutos</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="bg-white px-3 py-2 rounded-4"><p>"Equipe Roboteco"</p></div>
                    </div>
                    <div className="d-flex gap-3 mt-3">
                        <input type="text" name="" id="" placeholder="Digite uma resposta..." className="w-100 px-3 py-2 rounded-5 border border-primary-subtle" style={{ backgroundColor: "#e8eeff" }} />
                        <button className="text-white fw-semibold rounded-5 px-3" style={{ backgroundColor: "var(--green)" }}>Responder</button>
                    </div>
                </div>
            </div>
        </>
    )

}