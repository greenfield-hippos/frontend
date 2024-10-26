import { useState } from "react";
const apiUrl: string = import.meta.env.VITE_API_URL;

type Props = {
    setNewQues: (a: string) => void;
    setNewAns: (a: string) => void;
   }

const SendMessage: React.FC<Props> = ({
    setNewQues,
    setNewAns
}) =>  {

    const [userMessage, setUserMessage] = useState("");

    const handleMessageSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const sendMessageUrl = apiUrl + 'api/chat';
        setNewQues(userMessage);
        try {
            const response = await fetch(sendMessageUrl, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message: userMessage}),
            });
            if (response.ok) {
                const ans: {response: string, conversation_id: string | number} = await response.json();
                setNewAns(ans.response);
                console.log(ans.response);
            } else {
                console.error('Error receiving message')
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    return (
        <>
            <div className="send-message">
                <form onSubmit={handleMessageSubmit}>
                    <textarea placeholder="Type your message here" onChange={(e) => setUserMessage(() => e.target.value)}></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )

}

export default SendMessage;