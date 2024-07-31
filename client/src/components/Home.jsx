import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import TaskList from "./TaskList";
import GroupList from "./GroupList";
import TaskModal from "./TaskModal";
import TaskDetails from "./TaskDetails";

const Home = ({ user, handleLogout }) => {
    const [users, setUsers] = useState({}); //All users
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [tasks, setTasks] = useState([]);
    const [taskCreated, setTaskCreated] = useState(false);
    const [taskUpdated, setTaskUpdated] = useState(false);
    // const navigate = useNavigate();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const avatarAlpha = user?.username
        ? user?.username.slice(0, 2).toUpperCase()
        : "";

    //fetching all user
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("/api/users", {
                    withCredentials: true,
                });
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    //fetching all tasks
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("/api/tasks", {
                    withCredentials: true,
                });
                console.log(response.data);
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, [setTasks, taskCreated, setTaskCreated, taskUpdated, setTaskUpdated]);

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <header className="mx-2 mb-4 mt-2 bg-white text-slate-800 p-4 shadow-md flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-500">
                    Task Management System
                </h1>
                <nav className="mt-2">
                    <ul className="flex space-x-4 items-center">
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
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full font-bold text-lg">
                    {avatarAlpha}
                </div>
            </header>
            <div className="flex flex-1">
                <aside className="w-64 bg-white p-4 border-r ml-2 mb-6 shadow-lg rounded-lg">
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
                <main className="flex-1 p-6 bg-gray-100">
                    <button
                        onClick={openModal}
                        className="w-32 h-32 bg-white text-slate-700 text-4xl flex items-center justify-center rounded-lg shadow-lg hover:bg-slate-100 transition-colors"
                    >
                        +
                    </button>
                    <TaskModal
                        users={users}
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        userId={user?._id}
                        setTaskCreated={setTaskCreated}
                    />

                    <TaskDetails
                        users={users}
                        tasks={tasks}
                        userId={user?._id}
                        setTaskUpdated={setTaskUpdated}
                    />
                    <TaskList tasks={tasks} userId={user?._id} />
                    <GroupList />
                </main>
            </div>
        </div>
    );
};

export default Home;
