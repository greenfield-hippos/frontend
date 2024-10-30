import { Conversation, User } from "../types";
import moment from "moment";
const apiUrl = import.meta.env.VITE_API_URL;

interface ConversationListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string | null) => void;
  fetchConversations: Function;
  user: User;
}

const ConversationList: React.FC<ConversationListProps> = ({
  user,
  conversations,
  onSelectConversation,
  fetchConversations,
}) => {
  async function deleteConversation(cid: string) {
    const deleteUrl =
      apiUrl + "users/" + user.id + "/conversations/" + cid + "/";
    await fetch(deleteUrl, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await fetchConversations();
  }

  return (
    <>
      <div className="conversation-list-tab">
        <button
          type="button"
          onClick={() => {
            onSelectConversation(null);
          }}
        >
          + New Conversation
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
              <div className="time-bar">
                <p className="conversation-time">
                  {moment(conversation.updated_at).fromNow()}
                </p>
                <div
                  className="trash"
                  onClick={() => {
                    onSelectConversation(null);
                    deleteConversation(conversation.id);
                  }}
                >
                  🗑️
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ConversationList;
