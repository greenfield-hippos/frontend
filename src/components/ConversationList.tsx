import Search from "./Search";

export interface Conversation {
    id: string;
    title: string | null;
    lastMessage: string;    // A short preview of the last message in the conversation. Not sure is needed
    lastActive: Date;
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
                        <p className="conversation-preview">{conversation.lastMessage}</p>
                        <p className="conversation-time">{conversation.lastActive.toLocaleString()}</p>
                    </div>
                    ))
                )}
            </div>
        </>
    )
}

export default ConversationList;