import styles from './Task.module.css';
import { Trash, Check } from 'phosphor-react'
import { HTMLAttributes } from 'react'

interface TaskList extends HTMLAttributes<HTMLElement> {
    id: string;
    description: string;
}

export function Task({ id, description }: TaskList) {
    return (
        <section className={styles.task}>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{/* aqui tem que achar um jeito de vincular o id com algo */}
                <Check />
            </label>
            <p>{description}</p>
            <button>
                <Trash className={styles.trashTask} />
            </button>
        </section>
    )
}