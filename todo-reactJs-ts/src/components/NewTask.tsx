import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, HTMLAttributes, useState } from 'react'
import { Task } from './Task';


interface NewTask extends HTMLAttributes<HTMLInputElement> {

}



export function NewTask(props: NewTask) {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [count, setCount] = useState(0);
    const [checkCount, setCheckCount] = useState(0);
    function handleTask(event: FormEvent): void {
        event.preventDefault();
        if (newTask.length > 0) {
            setTask([...task, newTask]);
            setCount(count + 1);
            setNewTask('');
        }
    }

    function handleNewTask(event: ChangeEvent<HTMLInputElement>): void {
        if (event.target.value.length > 0) {
            setNewTask(event.target.value);
            event.target.setCustomValidity("");
        } else {
            setNewTask('');
        }
    }

    function deleteTodo(taskOnDelete: string, checked: boolean): void {
        if (checked && checkCount > 0) {
            setCheckCount(checkCount - 1)
        }
        const taskWhitOutDelete = task.filter(element => element !== taskOnDelete);
        setTask(taskWhitOutDelete);
        setCount(count - 1);
    }

    function checkedTask(boolean: boolean) {
        if (boolean) {
            setCheckCount(checkCount + 1)
        } else {
            setCheckCount(checkCount - 1)
        }
    }

    return (
        <>
            <form className={styles.newTask} onSubmit={handleTask}>
                <label>
                    <input type='text' placeholder={props.placeholder} onChange={handleNewTask} value={newTask} />
                </label>
                <button type='submit'>
                    Criar
                    <PlusCircle size={20} className={styles.pluscircle} />
                </button>
            </form>
            <section className={styles.taskControll}>
                <header>
                    <div className={styles.taskCreate}>
                        Tarefas criadas
                        <span>{count}</span>
                    </div>
                    <div className={styles.taskCompleted}>
                        Concluídas
                        <span>{(checkCount)} de {count}</span>
                    </div>
                </header>
            </section>
            <div>
                {task.map(task => {
                    return <Task id={task} description={task} onDeleteTodo={deleteTodo} onTasked={checkedTask} />
                })}
            </div>
        </>

    )
}