import { useEffect, useState } from "react";
import SidebarContentList from "./SidebarContentList";
import ChatWindow from "./ChatWindow";
import { Conversation, User } from "../types";
import { Message } from "../types";

interface ContentProps {
    user: User;
}

const Content: React.FC<ContentProps> = ({ user }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        setIsLoading(true);
        fetchConversations();
    },[]);
    
    
    const fetchConversations = async () => {
        try {
            const response = await fetch (apiUrl + "users/" + user.id + "/conversations");
            const data = await response.json();
            console.log(data);
            setConversations(data);
            setIsLoading(false);
            if (data.length > 0) {
                // const latestConversation = conversations[0];
                // setSelectedConversation(latestConversation);
                // fetchMessagesForConversation(latestConversation.id)
            } else {
                initializeNewConversation();
            }
        } catch (error) {
            console.error("Error fetchin conversations: ", error);
        }
    }
    
    const fetchMessagesForConversation = async (conversationId: string) => {
        setIsLoading(true);
        try{
            const response = await fetch (apiUrl + "users/" + user.id + "/conversations/" + conversationId + "/messages");
            const data = await response.json();
            setMessages(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching messages: ", error);
            setIsLoading(false);
        }
    }

    const initializeNewConversation = () => {
        const newConversation: Conversation = {
            id: "",
            title: "New Conversation",
            updated_at: new Date(),
        };
        setSelectedConversation(newConversation);
    };

    const handleSelectConversation = (conversationId: string) => {
        const selectedConv = conversations.find(conv => conv.id === conversationId);
        if (selectedConv) {
            setSelectedConversation(selectedConv);
            fetchMessagesForConversation(conversationId);
        } 
    }

    const handleNewMessage = (newMessage : Message) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    }


    return (
        <>
            <div className="content-container">
                {isLoading && <p>Loading...</p>}

                <SidebarContentList
                    conversations={conversations}
                    onSelectConversation={handleSelectConversation}
                />

                {selectedConversation && (
                    <ChatWindow
                        user={user}
                        conversation={selectedConversation}
                        messages={messages}
                        onUpdateMessage={handleNewMessage}
                    />
                )}
            </div>
        </>
    )

}

export default Content;