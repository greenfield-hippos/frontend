import { Conversation } from "../types";
import moment from "moment";

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
        <div className="adjust-button">
          <button
            type="button"
            onClick={() => {
              fetchFavoriteData();
            }}
          >
            Favorite Messages
          </button>
          <button
            type="button"
            onClick={() => {
              onSelectConversation(null);
            }}
          >
            + New Conversation
          </button>
        </div>
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
