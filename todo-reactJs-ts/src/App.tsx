import styles from './App.module.css'
import './global.css'
import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList'



export function App() {
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <ToDoList />
            </main>
        </div>
    )
}