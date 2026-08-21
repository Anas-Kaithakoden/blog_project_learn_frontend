import { useState } from "react";
import { login } from "../services/api";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const data = await login(email, password);

            localStorage.setItem( "access_token", data.access_token );

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>

                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                {error && (
                    <p className="login-error">
                        {error}
                    </p>
                )}

                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;