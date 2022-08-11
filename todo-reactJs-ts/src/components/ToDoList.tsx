import { NewTask } from './NewTask';
import { Task } from './Task';
import styles from './ToDoList.module.css';



export function ToDoList() {
    return (
        <article className={styles.todo_background}>
            <NewTask placeholder='Adicione uma nova tarefa' />
            <section className={styles.taskControll}>
                <header>
                    <div className={styles.taskCreate}>
                        Tarefas criadas
                        <span>0</span>
                    </div>
                    <div className={styles.taskCompleted}>
                        Concluídas
                        <span>2 de 5</span>
                    </div>
                </header>
                <Task id="1" />
                <Task id="2" />
                <Task id="3" />
                <Task id="4" />
            </section>
        </article>
    )
}