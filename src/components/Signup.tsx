import { useState } from "react";
const apiUrl: string = import.meta.env.VITE_API_URL;

type Props = {
    setSigninOrSignup: (a: string) => void;
   }

const Signup: React.FC<Props> = ({
    setSigninOrSignup,
}) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignupSubmit = async (pass: string, confPass: string) => {
        const signupUrl = apiUrl + "signup";
        if (pass !== confPass) {
            alert("Passwords don't match!");
        } else {
            try {
                const response = await fetch(signupUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: userName, password: password}),
                });
                if (response.ok) {
                alert('User created successfully. Please proceed to log in');
                setSigninOrSignup('Signin');
                } else {
                alert('Sorry, that username is already taken. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    return (
        <>
            <div className="login-container">
                <h2>Create Account</h2>
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
                    <div className="password-box">
                        <input 
                            value={confirmPassword}
                            placeholder="Confirm your password"
                            onChange={(e) => setConfirmPassword(() => e.target.value)}
                            className="password-input"
                            type="password"
                        />
                    </div>
                    <button type="button" onClick={() => handleSignupSubmit(password, confirmPassword)}>Sign Up</button>
                </form>
            </div>
            <p className="signup-link" onClick={() => setSigninOrSignup("Signin")}>Already signed up?</p>
        </>
    )
}

export default Signup;