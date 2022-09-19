import styles from './Task.module.css';
import { Trash, Check } from 'phosphor-react'
import { ChangeEvent, HTMLAttributes, useState } from 'react'

interface TaskList extends HTMLAttributes<HTMLElement> {
    id: string;
    description: string;
    onDeleteTodo(task: string, checked: boolean): void;
     onTasked(boolean: boolean): void;
}


export function Task({ id, description, onDeleteTodo, onTasked }: TaskList) {
    const [checked, setChecked] = useState(false);

    function handleCheckedTodo(event: ChangeEvent<HTMLInputElement>) {
        onTasked(event.target.checked)
        if (event.target.checked) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }

    function handleDeleteTodo() {
        onDeleteTodo(id, checked)
    }

    return (
        <section className={styles.task}>
            <input type="checkbox"  id={id} onChange={handleCheckedTodo} />
           {  <label htmlFor={id}>
                <Check />
            </label>}
            <p>{description}</p>
            <button onClick={handleDeleteTodo}>
                <Trash className={styles.trashTask} />
            </button>
        </section>
    )
}