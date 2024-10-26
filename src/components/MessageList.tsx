import { useEffect, useState, useCallback } from "react";
import Answer from "./Answer";
import Question from "./Question";

type Props = {
    newQues: string;
    newAns: string;
    selectedConversation_id: string | number;
    user_id: string | number;
   }

interface Message {
    author: string,
    content: string
}

const MessageList: React.FC<Props> = ({
    newQues,
    newAns,
    selectedConversation_id,
    user_id,
}) =>  {
    
    const [messages, setMessages] = useState<Message[]>([]);
    const apiUrl: string = import.meta.env.VITE_API_URL;
    
    const handleMessageRetreive = useCallback(async () => {
        const messagesUrl = `${apiUrl}user/${user_id}/conversation/${selectedConversation_id}/messages`;
        try {
            const response = await fetch(messagesUrl, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                const messagesParsed = await response.json();
                setMessages(messagesParsed);
            } else {
                console.error('Error receiving messages');
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    }, [apiUrl, user_id, selectedConversation_id]);
    
    useEffect(() => {
        handleMessageRetreive();
    }, [handleMessageRetreive, selectedConversation_id]);

    useEffect(() => {
        if (newQues) {
            setMessages(prevMessages => [
                ...prevMessages,
                { author: 'user', content: newQues }
            ]);
        }
    }, [newQues]);

    useEffect(() => {
        if (newAns) {
            setMessages(prevMessages => [
                ...prevMessages,
                { author: 'user', content: newAns }
            ]);
        }
    }, [newAns]);

    return (
        <>
            <div className="message-list">
                {messages.map((message, index) => {
                     const key = message.author.toLowerCase() === 'chatgpt' ? `answer-${index}` : `question-${index}`;
                    if (message.author.toLowerCase() === 'chatgpt') {
                        return <Answer key={key} content={message.content} />
                    } else {
                        return <Question key={key} content={message.content} />
                    }
                })}
                
            </div>
        </>
    )
}

export default MessageList;