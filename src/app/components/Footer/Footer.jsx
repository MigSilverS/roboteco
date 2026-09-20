import Botao from "../Botao/Botao";
import styles from "./Footer.module.css";

export default function Footer() {

    const icons = {
        share: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
        ),

        hashtag: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
            </svg>
        ),

        camera: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
        ),

        play: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
        )
    }

    return (
        <>
            <footer className={`${styles.container} px-5`}>
                <div className="d-flex justify-content-end flex-wrap py-2">
                    <ul className="d-flex flex-row justify-content-center align-items-center list-unstyled">
                        <li className="p-2">
                            <Botao
                                icon={icons.share}
                                classe="rounded-5 d-flex justify-content-center align-items-center text-black p-2"
                                estilo={{
                                    backgroundColor: "var(--btn-footer) "
                                }} />
                        </li>
                        <li className="p-2">
                            <Botao
                                icon={icons.hashtag}
                                classe="rounded-5 d-flex justify-content-center align-items-center text-black p-2"
                                estilo={{
                                    backgroundColor: "var(--btn-footer) "
                                }} />
                        </li>
                        <li className="p-2">
                            <Botao
                                icon={icons.camera}
                                classe="rounded-5 d-flex justify-content-center align-items-center text-black p-2"
                                estilo={{
                                    backgroundColor: "var(--btn-footer) "
                                }} />
                        </li>
                        <li className="p-2">
                            <Botao
                                icon={icons.play}
                                classe="rounded-5 d-flex justify-content-center align-items-center text-black p-2"
                                estilo={{
                                    backgroundColor: "var(--btn-footer) "
                                }} />
                        </li>
                    </ul>
                </div>

                <div className="d-flex justify-content-md-between justify-content-center flex-wrap py-3">
                    <span className="p-2">© 2026 Roboteco. Construindo o futuro, um bloco por vez.</span>
                    <ul className="d-flex flex-row justify-content-center align-items-center list-unstyled">
                        <a href="#" className="p-2 text-black text-decoration-none">Suporte</a>
                        <a href="#" className="p-2 text-black text-decoration-none">Privacidade</a>
                        <a href="#" className="p-2 text-black text-decoration-none">Termos</a>
                        <a href="#" className="p-2 text-black text-decoration-none">Comunidade</a>
                    </ul>
                </div>
            </footer>
        </>
    )
}