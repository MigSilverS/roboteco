import Texto from "../Texto/Texto";

export default function Nivel({ nivel, titulo }) {
    return(
        <Texto texto={`Nível ${nivel}: ${titulo}`} classe="text-white" />
    )
}