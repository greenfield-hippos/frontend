import { Conversation } from "./ConversationList";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

export interface Message {
    id: string;
    conversation_id: string;
    author: string;
    chat_user_id: string;
    content: string;
    is_favorite?: boolean;
    timestamp: Date;
}
 
interface ChatWindowProps {
    conversation: Conversation;
    messages: Message[];
    onUpdateMessage: (message: Message) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
    conversation,
    messages,
    onUpdateMessage
}) => {

    return (
        <>
            <div className="chat-window">
                <h2>{conversation.title} || "Untitled Conversation"</h2>
                <MessageList messages={messages}/>
                <SendMessage 
                    conversationId={conversation.id}
                    onNewMessage={onUpdateMessage}
                />
            </div>
        </>
    )

}

export default ChatWindow;

