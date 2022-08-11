import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react'
import { HTMLAttributes } from 'react'


interface NewTask extends HTMLAttributes<HTMLInputElement> { }



export function NewTask(props: NewTask) {
    return (
        <div className={styles.newTask}>
            <label>
                <input type='text' placeholder={props.placeholder} />
            </label>
            <button>
                Criar
                <PlusCircle size={20} className={styles.pluscircle} />
            </button>
        </div>
    )
}