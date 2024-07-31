const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all tasks
exports.fetchAll = async (req, res) => {
    try {
        const tasks = await Task.find()
            .populate("createdBy", "email username")
            .populate("assignedTo", "email username");
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get task by ID
exports.fetchTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update task by ID
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete task by ID
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
