// frontend/src/components/GroupList.js
import React from "react";

const GroupList = () => {
    // Placeholder for group data
    const groups = [
        { id: 1, name: "Group 1" },
        { id: 2, name: "Group 2" },
        { id: 3, name: "Group 3" },
    ];

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">My Groups</h3>
            <ul className="space-y-2">
                {groups.map((group) => (
                    <li
                        key={group.id}
                        className="p-4 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                        {group.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroupList;
