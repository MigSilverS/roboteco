import { FaPencilAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TiDownload } from "react-icons/ti";

export default function TabelaAulas({ dados }) {

    function statusCor(status) {
        if (status == "Publicado") {
            return "#9AF7A7"
        }else{
            return "#DDE2F3"
        }
    }

    return (

        <>
            <table className="table table-borderless">
                <thead className="rounded-5">
                    <tr>
                        <th scope="col" className="rounded-start-5 ps-3" style={{ backgroundColor: "#F1F3FF" }}>AULA</th>
                        <th scope="col" className="ps-3" style={{ backgroundColor: "#F1F3FF" }}>TRILHA</th>
                        <th scope="col" className="ps-3" style={{ backgroundColor: "#F1F3FF" }}>NÍVEL</th>
                        <th scope="col" className="ps-3" style={{ backgroundColor: "#F1F3FF" }}>STATUS</th>
                        <th scope="col" className="rounded-end-5 ps-3" style={{ backgroundColor: "#F1F3FF" }}>AÇÕES</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        dados.map((item) => (
                            <tr key={item.id}>
                                <td className="p-3 fw-semibold fs-6 d-flex flex-column">
                                    {item.aula}
                                    <span className="text-body-secondary" style={{ fontSize: "0.8em" }}>Atualizado em: {item.atualizado_em}</span>
                                </td>
                                <td className="p-3">{item.trilha}</td>
                                <td className="p-3">{item.nivel}</td>
                                <td className="p-3"><span className="rounded-5 fw-semibold px-3 py-1" style={{ backgroundColor: statusCor(item.status)}}>{item.status}</span></td>
                                <td className="p-3">
                                    <FaPencilAlt className="me-3" size={20} />
                                    <IoEyeOutline className="me-3" size={20} />
                                    <TiDownload className="me-3" size={20} />
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </>

    )

}