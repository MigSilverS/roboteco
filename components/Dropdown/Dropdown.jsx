import styles from './Dropdown.module.css';

export default function Dropdown() {
    return(
        <div className={`dropdown ${styles.dropdown}`}>
            <button className={`btn btn-secondary dropdown-toggle ${styles.dropdownToggle}`} type="button" data-bs-toggle="dropdown">
                Ordem Sugerida
            </button>
        </div>
    )
}