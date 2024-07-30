const express = require("express");
const router = express.Router();
const {
    createTask,
    fetchAll,
    fetchTask,
    updateTask,
    deleteTask,
} = require("../controllers/taskController");

router.post("/", createTask);
// router.get("/", fetchAll);
// router.get("/:id", fetchTask);
// router.put("/:id", updateTask);
// router.delete("/:id", deleteTask);

module.exports = router;
