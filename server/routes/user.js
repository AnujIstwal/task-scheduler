const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authmiddleware");

router.get("/:id", authMiddleware, getUser);
//router.put("/login",authMiddleware, updateUser);

module.exports = router;
