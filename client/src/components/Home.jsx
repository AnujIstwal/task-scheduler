import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskList from "./TaskList";
import GroupList from "./GroupList";
import TaskModal from "./TaskModal";

const Home = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const avatarAlpha = user.username
        ? user.username.slice(0, 2).toUpperCase()
        : "";
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <header className="bg-blue-500 text-white p-4 shadow-md flex items-center justify-between">
                <h1 className="text-2xl font-bold">Task Management System</h1>
                <nav className="mt-2">
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/tasks" className="hover:underline">
                                Tasks
                            </Link>
                        </li>
                        <li>
                            <Link to="/groups" className="hover:underline">
                                Groups
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="hover:underline">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout" className="hover:underline">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full font-bold text-lg">
                    {avatarAlpha}
                </div>
            </header>
            <div className="flex flex-1">
                <aside className="w-64 bg-gray-200 p-4 border-r border-gray-300">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/tasks"
                                className="block hover:bg-gray-300 p-2 rounded"
                            >
                                My Tasks
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/groups"
                                className="block hover:bg-gray-300 p-2 rounded"
                            >
                                My Groups
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/notifications"
                                className="block hover:bg-gray-300 p-2 rounded"
                            >
                                Notifications
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                                className="block hover:bg-gray-300 p-2 rounded"
                            >
                                Settings
                            </Link>
                        </li>
                    </ul>
                </aside>
                <main className="flex-1 p-6">
                    <button
                        onClick={openModal}
                        className="w-32 h-32 bg-white text-slate-700 text-4xl flex items-center justify-center rounded-lg shadow-lg hover:bg-slate-100 transition-colors"
                    >
                        +
                    </button>
                    <TaskModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        userId={user._id}
                    />
                    <TaskList />
                    <GroupList />
                </main>
            </div>
        </div>
    );
};

export default Home;
