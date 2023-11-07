import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ProtectedRoute from "../hooks/useProtectedRoute";
import Home from "./Home";
import GPTMovies from "./GPTMovies";

const Body = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route exact path="/" element={<Home />}>
                            <Route index element={<Browse />} />
                            <Route element={<Browse />} path="browse" />
                            <Route element={<GPTMovies />} path="search" />
                        </Route>
                    </Route>
                    <Route element={<Login />} path="login"></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Body;