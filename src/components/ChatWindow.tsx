import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import { Message, User } from "../types";
import { Conversation } from "../types";
 
interface ChatWindowProps {
    conversation: Conversation ;
    messages: Message[];
    onUpdateMessage: (message: Message) => void;
    user: User;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
    conversation,
    messages,
    onUpdateMessage,
    user,
}) => {

    return (
        <>
            <div className="chat-window">
                <h2>{conversation.title || "Untitled Conversation"}</h2>
                <MessageList messages={messages}/>
                <SendMessage 
                    conversationId={conversation.id}
                    onNewMessage={onUpdateMessage}
                    user={user}
                />
            </div>
        </>
    )

}

export default ChatWindow;

