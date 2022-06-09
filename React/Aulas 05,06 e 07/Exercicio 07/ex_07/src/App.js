import Header from './Components/Header';
import TasksOpen from './Components/TasksOpen';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Academia',
            day: 'Todos os dias as 14:00',
            reminder: true,
        },
        {
            id: 2,
            text: 'Curso Programação WEB',
            day: 'Todos os dias as 18:00',
            reminder: true,
        },
        {
            id: 3,
            text: 'Compra do mês',
            day: '11 de Jun as 8:30',
            reminder: false,
        },
        {
            id: 4,
            text: 'TCC IOS',
            day: '19 de Jul as 18:00',
            reminder: false,
        },
    ]);

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
                    onToggle={mudarReminder}
                />
            ) : (
                'Não há tarefas em aberto'
            )}
        </div>
    );
}

export default App;
