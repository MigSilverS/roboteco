import styles from "./BarraPequisa.module.css";

const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} height={25} width={25} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>


export default function BarraPesquisa() {
    return (
        <>
            <div className={`${styles.barraPesquisaContainer} d-flex mx-3`}>
                <div className={styles.icone}>
                    {icon}
                </div>

                <input
                    className={styles.barraPesquisaInput}
                    type="text"
                    placeholder="O que você quer aprender?"
                />
            </div>
        </>
    )
}