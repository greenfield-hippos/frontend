import { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import './Login.css'

type Props = {
    setUserLoggedIn: (a: boolean) => void;
}


const Login: React.FC<Props> = ({
    setUserLoggedIn
}) => {
    const [signinOrSignup, setSigninOrSignup] = useState<string>("Signin");

    useEffect(() => {
        
    }, [signinOrSignup])

    return (
        <>
            {(signinOrSignup === "Signin") 
                ? <Signin setSigninOrSignup={setSigninOrSignup} setUserLoggedIn={setUserLoggedIn} /> 
                : <Signup setSigninOrSignup={setSigninOrSignup} setUserLoggedIn={setUserLoggedIn}/>
            }
        </>
    )
}

export default Login;