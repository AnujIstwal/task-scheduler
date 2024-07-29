// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// MongoDB connection
connectDB();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(
//     cors({
//         origin: "http://localhost:5173",
//         credentials: true,
//     })
// );

// Define routes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/users", require("./routes/users"));
// app.use("/api/tasks", require("./routes/tasks"));
// app.use("/api/groups", require("./routes/groups"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
