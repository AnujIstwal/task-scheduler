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
        <div>
            <h3>My Groups</h3>
            <ul>
                {groups.map((group) => (
                    <li key={group.id}>{group.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GroupList;
