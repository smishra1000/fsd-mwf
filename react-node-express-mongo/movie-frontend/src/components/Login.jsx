import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const onEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const onPasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const login = async (e) => {
        e.preventDefault();

        // send data to server for account creation

        let data = await fetch("http://localhost:7000/auth/login", { method: "POST", headers: { "Content-Type": 'application/json' }, body: JSON.stringify({ email: email, password: password }) })

        navigate('/movies');

    }

    return (
        <div className="container mt-5">
            <h3>Login</h3>
            <div className="card">
                <form onSubmit={(e) => login(e)}>
                    <div class="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => onEmailChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => onPasswordChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}



export default Login