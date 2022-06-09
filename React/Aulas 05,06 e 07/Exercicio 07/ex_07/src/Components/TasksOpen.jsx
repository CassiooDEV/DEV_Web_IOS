import TaskItem from './TaskItem';

const TasksOpen = ({ tasks, onDelete, onToggle }) => {
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

export default TasksOpen;
