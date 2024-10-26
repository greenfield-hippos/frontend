import Search from "./Search";

export interface Conversation {
    id: string;
    title: string | null;
    updated_at: Date;
}

interface ConversationListProps {
    conversations: Conversation[];
    onSelectConversation: (id: string) => void;
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
                <Search />
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