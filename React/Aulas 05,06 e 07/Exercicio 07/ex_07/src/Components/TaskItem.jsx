import { FaTimes, FaToggleOff } from 'react-icons/fa';
const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}            
        >
            <h3>
                {task.text}
                <FaToggleOff style={{cursor:'pointer'}}onClick={() => onToggle(task.id)}/>
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default TaskItem;
