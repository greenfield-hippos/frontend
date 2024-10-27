import { Message } from "../types";
import { useRef, useEffect } from "react";

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {

    // Ref to keep track of the last message
    const lastMessageRef = useRef<HTMLDivElement | null>(null);

    // Scroll to the last message whenever messages change
    useEffect(() => {
        if(lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth"});
        }
    }, [messages]);

    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <div 
                    key={message.id} 
                    className={`message ${message.author === "ChatGPT" ? "ChatGPT" : "user"}`}
                    ref={index === messages.length -1 ? lastMessageRef : null }>
                    <p>{message.content}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;