import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import { Message, User } from "../types";
import { Conversation } from "../types";
 
interface ChatWindowProps {
    conversation: Conversation | null;
    messages: Message[];
    onUpdateMessage: (message: Message) => void;
    user: User;
    onSelectConversation: Function;
    fetchConversations: Function;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
    conversation,
    messages,
    onUpdateMessage,
    user,
    onSelectConversation,
    fetchConversations
}) => {

    return (
        <>
            <div className="chat-window">
                <h2>{conversation?.title || "Untitled Conversation"}</h2>
                <MessageList messages={messages}/>
                <SendMessage 
                    conversationId={conversation?.id || null}
                    onNewMessage={onUpdateMessage}
                    user={user}
                    onSelectConversation={onSelectConversation}
                    fetchConversations={fetchConversations}
                />
            </div>
        </>
    )

}

export default ChatWindow;

