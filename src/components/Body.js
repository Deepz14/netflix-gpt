import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ProtectedRoute from "../hooks/useProtectedRoute";

const Body = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route exact path="/" element={<Navigate to="/browse" />} />
                        <Route element={<Browse />} path="browse" />
                    </Route>
                    <Route element={<Login />} path="login"></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Body;