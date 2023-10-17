import './App.css'
import axios from "axios";
function App() {

    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080': window.location.origin

        window.open(host + '/oauth2/authorization/github', '_self')
    }

    function getUser() {
        axios.get("/api/users/me")
            .then((r) => {
                console.log(r.data)
            })
            .catch(e => e.message)
    }

    return (
        <>
            <div>
                <button onClick={login}>Login</button>
                <button onClick={getUser}>Me</button>
            </div>
        </>
    )
}

export default App
