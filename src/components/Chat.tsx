// import { useContext } from "react";
// import Login from "./Login";
import Header from "./Header";
import Content from "./Content";
// import Login from "./Login";

const Chat: React.FC = () => {
    // From Laurence chat
    // const isLoggedIn = () => {
    //     const sessionCookie = document.cookie.split('; ').find(row => row.startsWith('yourCookieName='));
    //     return sessionCookie ? true : false;
    // };
      
    // // Usage
    // if (isLoggedIn()) {
    //   console.log('User is logged in');
    // } else {
    //   console.log('User is not logged in');
    //   return <Login setUserLoggedIn={() => {return false}}/>
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

export default Chat;