"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Duvidas() {

    const [chamados, setChamados] = useState([])
    const [erro, setErro] = useState("");

    useEffect(() => {

        async function buscarChamados() {
            try {
                const resposta = await axios.get(
                    "http://localhost:8000/api/chamados"
                );

                setChamados(resposta.data);
                setErro("");
            } catch (erro) {
                console.error("Erro ao buscar eventos:", erro);
                setErro("Erro os eventos.");
            } finally {

            }
        }

        buscarChamados();

    }, []);

    return (
        <>
            {
                chamados.map((chamado) => (
                    < div className="row mt-4" >
                        <div className="col-12 p-3 rounded-5" style={{ backgroundColor: "#e3e8f9" }}>
                            <div className="d-flex align-items-center gap-3">
                                <span className="p-2 rounded-circle text-white fw-bold fs-5" style={{ backgroundColor: "var(--blue)" }} >PH</span>
                                <div>
                                    <span className="fw-semibold">{chamado.usuario.nome}</span>
                                    <p className="" style={{ color: "var(--red)", fontSize: "0.9em" }}>{chamado.chaData_Abertura}</p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="bg-white px-3 py-2 rounded-4"><p>{chamado.chaMensagem}</p></div>
                            </div>
                            <div className="d-flex gap-3 mt-3">
                                <input type="text" name="" id="" placeholder="Digite uma resposta..." className="w-100 px-3 py-2 rounded-5 border border-primary-subtle" style={{ backgroundColor: "#e8eeff" }} />
                                <button className="text-white fw-semibold rounded-5 px-3" style={{ backgroundColor: "var(--green)" }}>Responder</button>
                            </div>
                        </div>
                    </div >
                )) 
            }
        </>
    )

}