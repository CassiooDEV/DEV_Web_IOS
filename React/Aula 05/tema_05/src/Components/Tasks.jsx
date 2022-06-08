import TaskItem from './TaskItem';
const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default Tasks;
