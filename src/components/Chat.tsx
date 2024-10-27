import Header from "./Header";
import Content from "./Content";
import { User } from "../types";

interface ChatProps {
    user: User;
}

const Chat: React.FC<ChatProps> = ({ user }) => {
  
    return (
        <>
            <div className="main-container">
                <Header />
                <Content user={user}/>       
            </div>
        </>
    )
}

export default Chat;