import { NewTask } from './NewTask';
import { Task } from './Task';
import styles from './ToDoList.module.css';

let listYourTask = [
    {
        id: "1",
        description: '..'
    },
    {
        id: '2',
        description: ','
    }
]

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
                {listYourTask.map(task => {
                    return <Task id={task.id} description={task.description} />
                })}
            </section>
        </article>
    )
}