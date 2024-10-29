import ConversationList from "./ConversationList";
import { Conversation } from "../types";

interface SidebarContentListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string | null) => void;
  fetchFavoriteData: () => void;
}

const SidebarContentList: React.FC<SidebarContentListProps> = ({
  conversations,
  onSelectConversation,
  fetchFavoriteData,
}) => {
  return (
    <>
      <div className="sidebar-content">
        <ConversationList
          conversations={conversations}
          onSelectConversation={onSelectConversation}
          fetchFavoriteData={fetchFavoriteData}
        />
      </div>
    </>
  );
};

export default SidebarContentList;
