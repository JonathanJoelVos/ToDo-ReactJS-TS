import { NewTask } from './NewTask';
import styles from './ToDoList.module.css';

export function ToDoList() {
    return (
        <article className={styles.todo_background}>
            <NewTask placeholder='Adicione uma nova tarefa' />
        </article>
    )
}

