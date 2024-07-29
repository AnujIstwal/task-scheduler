// frontend/src/components/TaskList.js
import React from "react";

const TaskList = () => {
    // Placeholder for task data
    const tasks = [
        { id: 1, title: "Task 1", status: "pending" },
        { id: 2, title: "Task 2", status: "in progress" },
        { id: 3, title: "Task 3", status: "completed" },
    ];

    return (
        <div>
            <h3>My Tasks</h3>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
