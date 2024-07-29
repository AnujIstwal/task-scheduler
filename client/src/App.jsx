// import { useState } from "react";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Box from "@mui/material/Box";

// function App() {
//     return (
//         <Box
//             width="100vw"
//             height="100vh"
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             alignItems="center"
//         >
//             <Register />
//         </Box>
//     );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
