import { Conversation } from "../types";

interface ConversationListProps {
    conversations: Conversation[];
    onSelectConversation: (id: string | null) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
    conversations,
    onSelectConversation,
}) => {

    
    // const filteredConversations = conversations(conversation => {
    //     return (conversation.content || "").toLowerCase().includes(searchQuery.toLowerCase());
    // })

    return (
        <>  
            <div className="conversation-list-tab">
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
                        <p className="conversation-time">{conversation.updated_at.toLocaleString()}</p>
                    </div>
                    ))
                )}
            </div>
        </>
    )
}

export default ConversationList;