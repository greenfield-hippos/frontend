import { Conversation, Favorites } from "../types";
import moment from "moment";

interface FavoriteListProps {
    favorites : Favorites;
    conversations: Conversation[];
    onSelectConversation: (id: string | null) => void;
}

const FavoriteList: React.FC<FavoriteListProps> = ({ favorites }) => {
    return (
        <>
            <div>
                {favorites.question.length === 0
                    ? (<p>No favorite messages.</p>)
                    : ((favorites.question).map((question) => (
                        <div 
                            key={question.id}
                            className="conversation-item"
                            onClick={() => onSelectConversation(question.id)}
                        >
                        <h3>{question.content || "Untitled Message"}</h3>
                        <p className="conversation-time">{moment(question.timestamp).fromNow()}</p>
                    </div>
                    ))
                )}
            </div>

            {/* <div className="conversation-list-tab">
                <button type="button" onClick={() => onSelectConversation(null)}>New Conversation</button>
                {conversations.length === 0 
                    ? (<p>No conversations yet.</p>) 
                    : (conversations.map((conversation) => (
                        <div 
                            key={conversation.id}
                            className="conversation-item"
                            onClick={() => onSelectConversation(conversation.id)}
                        >
                        <h3>{conversation.title || "Untitled Conversation"}</h3>
                        <p className="conversation-time">{moment(conversation.updated_at).fromNow()}</p>
                    </div>
                    ))
                )}
            </div> */}
        </>
    )
}

export default FavoriteList;