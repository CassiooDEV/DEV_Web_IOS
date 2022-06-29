import Header from './Components/Header';
import TasksOpen from './Components/TasksOpen';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);

    const deletaTarefa = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const mudarReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className="container">
            <Header title="Tarefas" />
            {tasks.length > 0 ? (
                <TasksOpen
                    tasks={tasks}
                    onDelete={deletaTarefa}
                    offToggle={mudarReminder}
                />
            ) : (
                'Não há tarefas em aberto'
            )}
        </div>
    );
}

export default App;
