import { useState } from "react";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");



    return (
        <>
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="username-box">
                        <input
                            value={userName}
                            placeholder="Enter your user name"
                            onChange={(e) => setUserName(() => e.target.value)}
                            className="username-input"
                        />
                    </div>
                    <div className="password-box">
                        <input 
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(() => e.target.value)}
                            className="password-input"
                        />
                    </div>
                </form>

            </div>
        </>
    )
}

export default Login;