import TaskItem from './TaskItem';

const TasksOpen = ({ tasks, onDelete, offToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    offToggle={offToggle}
                />
            ))}
        </>
    );
};

export default TasksOpen;
