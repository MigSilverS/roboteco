import Botao from "../Botao/Botao";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <footer className={`${styles.container} fixed-bottom px-5`}>
                <div className="d-flex justify-content-between py-4">
                    <ul className="d-flex flex-row list-unstyled">
                        <li className="p-2">Suporte</li>
                        <li className="p-2">Privacidade</li>
                        <li className="p-2">Termos</li>
                        <li className="p-2">Comunidade</li>
                    </ul>
                    <ul className="d-flex flex-row list-unstyled">
                        <li className="p-2">NOSSAS REDES</li>
                        <li className="p-2">
                            {/* <Botao texto="share" classe="rounded-circle" style={}/> */}
                        </li>
                        <li className="p-2">Termos</li>
                        <li className="p-2">Comunidade</li>
                    </ul>
                </div>

                <div className="d-flex justify-content-between py-3">
                    <span>© 2026 Roboteco. Construindo o futuro, um bloco por vez.</span>
                    <ul className="d-flex gap-4">
                        <li>Robótica</li>
                        <li>Programação</li>
                        <li>Inovação Maker</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}