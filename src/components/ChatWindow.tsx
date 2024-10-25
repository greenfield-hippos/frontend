import { useState } from "react";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

const ChatWindow = () => {

    const [newQues, setNewQues] = useState("");
    const [newAns, setNewAns] = useState("");

    console.log(newAns, newQues);
    return (
        <>
            <div className="chat-window">
                <MessageList newQues={newQues} newAns={newAns}/>
                <SendMessage setNewQues={setNewQues} setNewAns={setNewAns} />
            </div>
        </>
    )

}

export default ChatWindow;