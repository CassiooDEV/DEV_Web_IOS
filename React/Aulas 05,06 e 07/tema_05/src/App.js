import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Consulta médica',
            day: '5 de Fev as 14:30',
            reminder: true,
        },
        {
            id: 2,
            text: 'Reunião na Escola',
            day: '6 de Fev as 13:30',
            reminder: true,
        },
        {
            id: 3,
            text: 'Compras no Supermercado',
            day: '7 de Fev as 8:30',
            reminder: false,
        },
    ]);
    // Deletar tarefa
    const deletaTarefa = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    // Alterar o reminder
    const mudarReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
        console.log(id);
    };

    return (
        <div className="container">
            <Header title="tarefas" />
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deletaTarefa}
                    onToggle={mudarReminder}
                />
            ) : (
                'Você não tem tarefas, pode tirar férias!'
            )}
        </div>
    );
}

export default App;
