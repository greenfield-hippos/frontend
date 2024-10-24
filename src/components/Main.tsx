// import { useContext } from "react";
// import Login from "./Login";
import Header from "./Header";
import Content from "./Content";

const Main: React.FC = () => {
    // check if the user is logged in
    // how? useContext?
    // const { isLoggedIn } = useContext(XXX);

    // if (!isLoggedIn) {
    //     return <Login setUserLoggedIn={() => {return false}}/>
    // }

    return (
        <>
            <div className="main-container">
                <Header />
                <Content />       
            </div>
        </>
    )
}

export default Main;