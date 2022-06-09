import TaskItem from './TaskItem';

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    );
};

export default Tasks;
