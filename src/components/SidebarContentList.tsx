import ConversationList from "./ConversationList";
import { Conversation } from "../types";

interface SidebarContentListProps {
    conversations: Conversation[];
    onSelectConversation: (id: string) => void;
}

const SidebarContentList: React.FC<SidebarContentListProps> = ({
    conversations,
    onSelectConversation,
}) => {

    return (
        <>  
            <div className="sidebar-content">
                <ConversationList 
                    conversations={conversations}
                    onSelectConversation={onSelectConversation}
                />              
            </div>
        </>
    )
}

export default SidebarContentList;