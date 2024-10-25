import { useEffect, useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

type Props = {
    newQues: string;
    newAns: string;
    conversation_id: string | number;
    user_id: string | number;
   }

const MessageList: React.FC<Props> = ({
    newQues,
    newAns,
    conversation_id,
    user_id,
}) =>  {

    const [messages, setMessages] = useState([]);
    const [newQuesObj, setNewQuesObj] = useState({});
    const [newAnsObj, setNewAnsObj] = useState({});

    setNewQuesObj({
        author: 'user',
        content: newQues,
    });
    setNewAnsObj({
        author: 'chatgpt',
        content: newAns,
    });

    const apiUrl: string = import.meta.env.VITE_API_URL;
    
    const handleMessageRetreive = async () => {
        const messagesUrl: string = apiUrl + 'user/' + user_id + '/conversation/' + conversation_id + '/messages'
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
                console.error('Error receiving messages')
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    useEffect(() => {
        handleMessageRetreive();
    }, [conversation_id]);

    return (
        <>
            <div className="message-list">
                {messages.map((message : {author: string, content: string}) => {
                    if (message.author.toLowerCase() === 'chatgpt') {
                        return <Answer content={message.content} />
                    } else {
                        return <Question content={message.content} />
                    }
                })}
            </div>
        </>
    )
}

export default MessageList;