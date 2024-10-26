import { useState } from "react";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

type Props = {
    selectedConversation_id: string | number;
    user_id: string | number;
   }

   const ChatWindow: React.FC<Props> = ({
    selectedConversation_id,
    user_id,
}) =>  {

    const [newQues, setNewQues] = useState("");
    const [newAns, setNewAns] = useState("");

    console.log(newAns, newQues);
    return (
        <>
            <div className="chat-window">
                <MessageList newQues={newQues} newAns={newAns} selectedConversation_id={selectedConversation_id} user_id={user_id}/>
                <SendMessage setNewQues={setNewQues} setNewAns={setNewAns} />
            </div>
        </>
    )

}

export default ChatWindow;