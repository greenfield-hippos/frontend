import { Conversation } from "../types";
import moment from "moment";
const apiUrl = import.meta.env.VITE_API_URL;

interface ConversationListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string | null) => void;
  fetchFavoriteData: () => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  onSelectConversation,
  fetchFavoriteData,
}) => {
  return (
    <>
      <div className="conversation-list-tab">
        <button type="button" onClick={() => onSelectConversation(null)}>
          New Conversation
        </button>
        <button type="button" onClick={fetchFavoriteData}>
          Favorite messages
        </button>
        {conversations.length === 0 ? (
          <p>No conversations yet.</p>
        ) : (
          conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="conversation-item"
              onClick={() => onSelectConversation(conversation.id)}
            >
              <h3>{conversation.title || "Untitled Conversation"}</h3>
              <p className="conversation-time">
                {moment(conversation.updated_at).fromNow()}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ConversationList;
