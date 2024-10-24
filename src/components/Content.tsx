import { useEffect, useState } from "react";
import SidebarContentList from "./SidebarContentList";
import ChatWindow from "./ChatWindow";

const Content: React.FC = () => {
    const [messages, setMessages] = useState<object[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
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

                />
                <ChatWindow />
            </div>
        </>
    )

}

export default Content;