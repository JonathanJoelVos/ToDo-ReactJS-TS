import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, HTMLAttributes, useState } from 'react'
import { Task } from './Task';


interface NewTask extends HTMLAttributes<HTMLInputElement> { }



export function NewTask(props: NewTask) {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleTask(event: FormEvent) {
        event.preventDefault();
        setTask([...task, newTask]);
        setNewTask('');
    }

    function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
        event.target.setCustomValidity("");
    }


    return (
        <>  
            <form className={styles.newTask} onSubmit={handleTask}>
                <label>
                    <input type='text' placeholder={props.placeholder} onChange={handleNewTask} value={newTask}/>
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
                        <span>0</span>
                    </div>
                    <div className={styles.taskCompleted}>
                        Concluídas
                        <span>2 de 5</span>
                    </div>
                </header>
            </section>
            <div>
                {task.map(task => {
                    return <Task id={task} description={task} />
                })}
            </div>
        </>

    )
}