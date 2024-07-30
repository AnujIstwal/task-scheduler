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
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">My Tasks</h3>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="p-4 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                        <div className="flex justify-between">
                            <span className="font-medium">{task.title}</span>
                            <span
                                className={`text-sm ${
                                    task.status === "Completed"
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {task.status}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
