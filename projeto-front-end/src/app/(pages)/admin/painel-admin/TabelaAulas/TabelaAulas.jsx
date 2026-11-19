import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TiDownload } from "react-icons/ti";
import axios from "axios";

export default function TabelaAulas() {

    const [conteudos, setConteudos] = useState([])
    const [erro, setErro] = useState("");

    useEffect(() => {

        async function buscarConteudos() {
            try {
                const resposta = await axios.get(
                    "http://localhost:8000/api/conteudos"
                );

                setConteudos(resposta.data);
                setErro("");
            } catch (erro) {
                console.error("Erro ao buscar eventos:", erro);
                setErro("Erro os eventos.");
            } finally {

            }
        }

        buscarConteudos();

    }, []);

    function statusCor(status) {
        if (status == "Publicado") {
            return "#9AF7A7"
        } else {
            return "#DDE2F3"
        }
    }

    return (

        <>
            <div className="table-responsive">
                <table className="table table-borderless">
                    <thead className="rounded-5">
                        <tr>
                            <th scope="col" className="rounded-start-5 ps-4" style={{ backgroundColor: "#F1F3FF" }}>AULA</th>
                            <th scope="col" className="ps-4" style={{ backgroundColor: "#F1F3FF" }}>TRILHA</th>
                            <th scope="col" className="ps-4" style={{ backgroundColor: "#F1F3FF" }}>NÍVEL</th>
                            <th scope="col" className="ps-4" style={{ backgroundColor: "#F1F3FF" }}>STATUS</th>
                            <th scope="col" className="rounded-end-5 ps-4" style={{ backgroundColor: "#F1F3FF" }}>AÇÕES</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            conteudos.map((conteudo) => (
                                <tr key={conteudo.conId}>
                                    <td className="p-4 fw-semibold fs-6 d-flex flex-column">
                                        Missão {conteudo.conId}: {conteudo.conTitulo}
                                        <span className="text-body-secondary" style={{ fontSize: "0.8em" }}>Atualizado em: {new Date(conteudo.updated_at).toLocaleDateString("pt-BR")}</span>
                                    </td>
                                    <td className="p-4">{conteudo.categoria.catDescricao}</td>
                                    <td className="p-4">{conteudo.conNivel}</td>
                                    <td className="p-4"><span className="rounded-5 fw-semibold px-4 py-1" style={{ backgroundColor: statusCor(conteudo.conStatus) }}>{conteudo.conStatus}</span></td>
                                    <td className="p-4 d-flex gap-3">
                                        <FaPencilAlt className="" size={20} />
                                        <IoEyeOutline className="" size={20} />
                                        <TiDownload className="" size={20} />
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>

    )

}