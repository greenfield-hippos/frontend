import { useEffect, useState } from "react";
import SidebarContentList from "./SidebarContentList";
import ChatWindow from "./ChatWindow";

const Content: React.FC = () => {
    const [messages, setMessages] = useState<object[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user_id, setUser_id] = useState<number>(0);
    
    useEffect(() => {
        setIsLoading(true);
        fetchMessagesOnTheServer();
    },[]); 

    useEffect(() => {
        <p>Is Loading</p>
    },[isLoading]);

    const fetchMessagesOnTheServer = async () => {
        const messagesOnTheServer = await fetch ("xx");
        const messagesOnTheServerParsed = await messagesOnTheServer.json();
        setMessages(messagesOnTheServerParsed);
        setIsLoading(false);
    }

    


    return (
        <>
            <div className="content-container">
                <SidebarContentList 
                    messages={messages}
                    setUser_id={setUser_id}
                />
                <ChatWindow user_id={user_id}/>
            </div>
        </>
    )

}

export default Content;