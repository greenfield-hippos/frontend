import ConversationList from "./ConversationList";
import { Conversation, Favorites } from "../types";
import FavoriteList from "./FavoriteList";
import { useEffect } from "react";

interface SidebarContentListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string | null) => void;
  handleFavoriteMessage: (id: number | null) => void;
  fetchFavoriteData: () => void;
  favorites: Favorites
  favoriteView : boolean
}

const SidebarContentList: React.FC<SidebarContentListProps> = ({
  conversations,
  onSelectConversation,
  handleFavoriteMessage,
  fetchFavoriteData,
  favorites,
  favoriteView
}) => {

  useEffect(() => {
    console.log(favorites)
  })

  return (
    <>
    {favoriteView === false ?
      <div className="sidebar-content">
        <ConversationList
          conversations={conversations}
          onSelectConversation={onSelectConversation}
          fetchFavoriteData={fetchFavoriteData}
        />
      </div>
    :
    <div className="sidebar-content">
      <FavoriteList 
        favorites={favorites}
        handleFavoriteMessage={handleFavoriteMessage}
      />
    </div>
    }
    </>
  );
};

export default SidebarContentList;
