import React, { useEffect, useContext } from "react";
import { authContext, firebaseContext } from "./Store/FirebaseContext";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from './Pages/Create'
function App() {
    const { setUser } = useContext(authContext);
    const { firebaseAuth } = useContext(firebaseContext);
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user);
                console.log("loginn in ");
            }
        });
    });
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
