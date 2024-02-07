import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes.tsx";

function App() {

    const [user, setUser] = useState<string>()

    useEffect(() => {
        getUser()
    }, [])

    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin

        window.open(host + '/oauth2/authorization/github', '_self')
    }

    function logout() {
        axios.post("/api/users/logout")
            .then(() => {
                setUser(undefined)
            })
    }

    function getUser() {
        axios.get("/api/users/me")
            .then((r) => {
                setUser(r.data)
            })
            .catch(() => setUser(undefined))
    }

    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>

            <Routes>
                <Route index element={<div>
                    {
                        user ? <p>User: {user}</p> : <p>Not logged in</p>
                    }
                    <button onClick={login}>Login</button>
                    <button onClick={getUser}>Me</button>
                    <button onClick={logout}>Logout</button>
                </div>}/>
                <Route element={<ProtectedRoutes user={user}/>}>
                    <Route path="/profile" element={<div><p>{user}</p>
                        <button onClick={logout}>Logout</button>
                    </div>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
