import './App.css'
import axios from "axios";
function App() {

    function login() {
        window.open('http://localhost:8080/oauth2/authorization/github', '_blank')
    }

    function getHello() {
        axios.get("/api/hello")
            .then((r) => {
                console.log(r.data)
            })
            .catch(e => e.message)
    }

    return (
        <>
            <div>
                <button onClick={login}>Login</button>
                <button onClick={getHello}>Hello</button>
            </div>
        </>
    )
}

export default App
