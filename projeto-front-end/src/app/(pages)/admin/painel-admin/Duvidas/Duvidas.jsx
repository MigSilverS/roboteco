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
                setErro("Erro ao buscar os chamados");
            } finally {

            }
        }

        buscarChamados();

    }, []);

    function formatarTempo(valor, limiteDias = 7) {
        if (!valor) return "-";
        const data = new Date(valor);
        if (isNaN(data)) return "-";

        const segundos = Math.floor((Date.now() - data.getTime()) / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);

        if (segundos < 60) return "agora mesmo";
        if (minutos < 60) return `há ${minutos} min`;
        if (horas < 24) return `há ${horas} h`;
        if (dias < limiteDias) return `há ${dias} ${dias === 1 ? "dia" : "dias"}`;

        // passou do limite: mostra data e hora completas
        return data.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    function getInitials(name = "") {
        return name
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0].toUpperCase())
            .join("");
    }

    return (
        <>
            {
                chamados.map((chamado) => (
                    < div className="row mt-4" key={chamado.chaId} >
                        <div className="col-12 p-3 rounded-5" style={{ backgroundColor: "#e3e8f9" }}>
                            <div className="d-flex align-items-center gap-3">
                                <span className="p-2 rounded-circle text-white fw-bold fs-5" style={{ backgroundColor: "var(--blue)" }} >{getInitials(chamado.usuario.usuNome)}</span>
                                <div>
                                    <span className="fw-semibold">{chamado.usuario.usuNome}</span>
                                    <p className="" style={{ color: "var(--red)", fontSize: "0.9em" }} title={new Date(chamado.chaData_Abertura).toLocaleString("pt-BR")}>
                                        {formatarTempo(chamado.chaData_Abertura)}</p>
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