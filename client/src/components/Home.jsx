import React from "react";
import { Link } from "react-router-dom";
import TaskList from "./TaskList";
import GroupList from "./GroupList";
import "./HomePage.css";

const Home = () => {
    return (
        <div className="home-page">
            <header className="header">
                <h1>Task Management System</h1>
                <nav>
                    <Link to="/tasks">Tasks</Link>
                    <Link to="/groups">Groups</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                </nav>
            </header>
            <div className="content">
                <aside className="sidebar">
                    <ul>
                        <li>
                            <Link to="/tasks">My Tasks</Link>
                        </li>
                        <li>
                            <Link to="/groups">My Groups</Link>
                        </li>
                        <li>
                            <Link to="/notifications">Notifications</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>
                </aside>
                <main className="main-content">
                    <h2>Welcome to the Task Management System</h2>
                    <TaskList />
                    <GroupList />
                </main>
            </div>
        </div>
    );
};

export default Home;
