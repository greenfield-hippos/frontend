import React, { useState } from 'react';
import { Message } from './ChatWindow';

interface SendMessageProps {
    conversationId: string;
    onNewMessage: (message: Message) => void;
}

const SendMessage: React.FC<SendMessageProps> = ({ conversationId, onNewMessage }) => {
    const [userMessage, setUserMessage] = useState<string>("");
    const [isSending, setIsSending] = useState<boolean>(false);

    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSendMessage = async () => {
        if (!userMessage.trim()) return; 

        const newMessage = {
            chat_user_id: "1", // We need the result user ID
            id: `${Date.now()}`, // Generate a unique ID
            conversation_id: conversationId,
            author: 'user',
            content: userMessage,
            timestamp: new Date(),
        };
        onNewMessage(newMessage); 
        setIsSending(true);
        setUserMessage(''); 

        try {
            const response = await fetch(apiUrl+"api/chat", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: "1", conversation_id: conversationId, message: userMessage }),
            });
            const data = await response.json();

            const assistantMessage : Message = {
                id: `${Date.now() + 1}`,
                chat_user_id: "1",
                conversation_id: conversationId,
                author: 'assistant',
                content: data.response, 
                timestamp: new Date(),
            };
            onNewMessage(assistantMessage); 
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="send-message">
            <textarea
                placeholder="Type your message..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                disabled={isSending}
            />
            <button onClick={handleSendMessage} disabled={isSending || !userMessage.trim()}>
                {isSending ? 'Sending...' : 'Send'}
            </button>
        </div>
    );
};

export default SendMessage;