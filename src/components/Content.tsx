import { useEffect, useState } from "react";
import SidebarContentList from "./SidebarContentList";
import ChatWindow from "./ChatWindow";
import { Conversation } from "./ConversationList";

const Content: React.FC = () => {
    const [messages, setMessages] = useState<object[]>([]);
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
            // const response = await fetch (apiUrl+"users/1/messages");
            // const data = await response.json();
            const data = [
                {
                    id: "1",
                    title: "JavaScript Basics",
                    lastMessage: "Can you explain closures in JavaScript?",
                    lastActive: new Date("2024-10-20T10:30:00"),
                },
                {
                    id: "2",
                    title: "React State Management",
                    lastMessage: "What's the best way to manage state in React?",
                    lastActive: new Date("2024-10-21T15:00:00"),
                },
                {
                    id: "3",
                    title: "TypeScript Tips",
                    lastMessage: "How do interfaces and types differ in TypeScript?",
                    lastActive: new Date("2024-10-22T12:45:00"),
                },
                {
                    id: "4",
                    title: null, // This could simulate a conversation that doesn't have a title
                    lastMessage: "Let's talk about best coding practices.",
                    lastActive: new Date("2024-10-23T08:20:00"),
                },
            ];

            setConversations(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetchin conversations: ", error);
        }
    }
    
    const fetchMessagesForConversation = async (conversationId: string) => {
        setIsLoading(true);
        try{
            // const response = await fetch (apiUrl+"users/1/conversations/"+conversationId+"/messages");
            // const data = await response.json();
            const data = [
                {
                    id: "1",
                    conversation_id: "1",
                    sender: "user",
                    title: "Can you explain closures in JavaScript?",
                    timestamp: new Date("2024-10-20T10:25:00"),
                },
                {
                    id: "2",
                    conversation_id: "1",
                    sender: "assistant",
                    title: "Sure! A closure is a function that retains access to its lexical scope even when the function is executed outside of that scope.",
                    timestamp: new Date("2024-10-20T10:26:00"),
                },
                {
                    id: "3",
                    conversation_id: "2",
                    sender: "user",
                    title: "What's the best way to manage state in React?",
                    timestamp: new Date("2024-10-21T15:02:00"),
                },
                {
                    id: "4",
                    conversation_id: "2",
                    sender: "assistant",
                    title: "There are multiple ways to manage state, such as using useState, useReducer, or state management libraries like Redux.",
                    timestamp: new Date("2024-10-21T15:03:00"),
                },
            ];
            setMessages(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching messages: ", error);
        }
    }

    const handleSelectConversation = (conversationId: string) => {
        const selectedConv = conversations.find(conv => conv.id === conversationId);
        if (selectedConv) {
            setSelectedConversation(selectedConv);
            fetchMessagesForConversation(conversationId);
        }
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
                        conversation={selectedConversation}
                        messages={messages}
                    />
                )}
            </div>
        </>
    )

}

export default Content;