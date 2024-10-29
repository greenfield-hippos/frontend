import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import FavMessageDisplay from "./FavMessageDisplay";
import { Favorites, Message, User } from "../types";
import { Conversation } from "../types";
 
interface ChatWindowProps {
    conversation: Conversation | null;
    messages: Message[];
    onUpdateMessage: (message: Message) => void;
    user: User;
    onSelectConversation: Function;
    fetchConversations: Function;
    favorites : Favorites
    selectedFavorite: Message
}

const ChatWindow: React.FC<ChatWindowProps> = ({
    conversation,
    messages,
    onUpdateMessage,
    user,
    onSelectConversation,
    fetchConversations,
    favorites,
    selectedFavorite
}) => {

    return (
        <>
            {view === false ?
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
                :
                <div className="sidebar-content">
                    <FavMessageDisplay 
                        messages={messages}
                        favorites={favorites}
                        selectedFavorite={selectedFavorite}
                    />
                </div>
            }
        </>
    )

}

export default ChatWindow;

