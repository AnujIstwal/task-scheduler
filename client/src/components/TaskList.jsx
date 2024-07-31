//for my tasks only
import React from "react";

const TaskList = ({ tasks, userId }) => {
    return (
        <div className="p-6 my-5 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">My Tasks</h3>
            <ul className="space-y-2">
                {tasks?.map(
                    (task) =>
                        task.assignedTo._id === userId && (
                            <li
                                key={task._id}
                                className="p-4 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                            >
                                <div className="flex justify-between">
                                    <span className="font-medium">
                                        {task.title}
                                    </span>
                                    <span
                                        className={`text-sm ${
                                            task.status === "completed"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {task.status}
                                    </span>
                                </div>
                            </li>
                        )
                )}
            </ul>
        </div>
    );
};

export default TaskList;
