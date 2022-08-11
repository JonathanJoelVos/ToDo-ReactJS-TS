import styles from '../components/Header.module.css'
import logoToDo from '../assets/Logo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img
                src={logoToDo}
                alt="Logo da Empresa"
            />
        </header>
    )
}