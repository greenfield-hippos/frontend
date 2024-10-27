import { useState } from "react";
import { User } from "../types";
const apiUrl: string = import.meta.env.VITE_API_URL;

type Props = {
   setSigninOrSignup: (a: string) => void;
   setUserLoggedIn: (a: boolean) => void;
   setUser: (user: User) => void;
  }

const Signin: React.FC<Props> = ({
    setSigninOrSignup,
    setUserLoggedIn,
    setUser
}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState(""); 

    const handleSigninSubmit = async (username: string, password: string) => {
        const signinUrl = apiUrl + "login";
        try {
            const response = await fetch(signinUrl, {
            method: 'POST',
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password}),
            });
            if (response.ok) {
                const { authenticationSuccessful, chatUser } = await response.json();
                if (authenticationSuccessful)  {
                    setUserLoggedIn(true)
                    setUser(chatUser);
                } else {
                    alert('Incorrect password')
                }
            } else {
                console.error('Error logging in')
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }
    

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
                            type="password"
                        />
                    </div>
                    <button type="button" onClick={() => handleSigninSubmit(userName, password)}>Sign in</button>
                </form>
            </div>
            <p className="signup-link" onClick={() => setSigninOrSignup("Signup")}>Not signed up?</p>
        </>
    )
}

export default Signin;