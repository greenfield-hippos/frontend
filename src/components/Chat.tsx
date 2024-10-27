import Header from "./Header";
import Content from "./Content";
import { User } from "../types";

interface ChatProps {
    user: User;
    handleLogOut: Function;
}

const Chat: React.FC<ChatProps> = ({ user, handleLogOut }) => {
  
    return (
        <>
            <div className="main-container">
                <Header handleLogOut={handleLogOut}/>
                <Content user={user}/>       
            </div>
        </>
    )
}

export default Chat;