import styles from './Task.module.css';
import { Trash, Check } from 'phosphor-react'

export function Task(props) {
    return (
        <section className={styles.task}>
            <input type="checkbox" id={props.id} />
            <label htmlFor={props.id}>{/* aqui tem que achar um jeito de vincular o id com algo */}
                <Check />
            </label>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button>
                <Trash className={styles.trashTask} />
            </button>
        </section>
    )
}