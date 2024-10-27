import React, { useState } from 'react';
import { Message, User } from '../types';

interface SendMessageProps {
    conversationId: string | null | undefined;
    onNewMessage: (message: Message) => void;
    user: User;
    onSelectConversation: Function;
    fetchConversations: Function;
}

const SendMessage: React.FC<SendMessageProps> = ({ 
    conversationId,
    onNewMessage,
    user,
    onSelectConversation,
    fetchConversations
 }) => {
    const [userMessage, setUserMessage] = useState<string>("");
    const [isSending, setIsSending] = useState<boolean>(false);

    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSendMessage = async () => {
        if (!userMessage.trim()) return; 

        const newMessage = {
            chat_user_id: user.id,
            id: `${Date.now()}`, // Generate a unique ID
            conversation_id: conversationId,
            author: 'user',
            content: userMessage,
            is_favorite: false,
            timestamp: new Date(),


        };
        onNewMessage(newMessage); 
        setIsSending(true);
        setUserMessage(''); 

        try {
            const response = await fetch(apiUrl+"api/chat", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: user.id, conversation_id: conversationId, message: userMessage }),
            });
            const data = await response.json();
            console.log(data.conversation_id);
            const assistantMessage : Message = {
                id: `${Date.now() + 1}`,
                chat_user_id: user.id,
                conversation_id: data.conversation_id,
                author: 'assistant',
                content: data.response, 
                timestamp: new Date(),
            };
            onNewMessage(assistantMessage); 
            await fetchConversations();
            onSelectConversation(data.conversation_id);
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