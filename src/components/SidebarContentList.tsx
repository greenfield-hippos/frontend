import ConversationList from "./ConversationList";
import { Conversation, Favorites } from "../types";
import FavoriteList from "./FavoriteList";
import { useEffect } from "react";

interface SidebarContentListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string | null) => void;
  handleFavoriteMessage: (id: number | null) => void;
  fetchFavoriteData: () => void;
  setViewToCurrent: () => void;
  favorites: Favorites;
  favoriteView: boolean;
}

const SidebarContentList: React.FC<SidebarContentListProps> = ({
  conversations,
  onSelectConversation,
  handleFavoriteMessage,
  fetchFavoriteData,
  setViewToCurrent,
  favorites,
  favoriteView,
}) => {
  useEffect(() => {
    console.log(favorites);
  });

  return (
    <>
      {favoriteView === false ? (
        <div className="sidebar-content">
          <button
            type="button"
            onClick={() => {
              fetchFavoriteData();
            }}
          >
            Favorite Messages
          </button>
          <ConversationList
            conversations={conversations}
            onSelectConversation={onSelectConversation}
          />
        </div>
      ) : (
        <div className="sidebar-content">
          <button type="button" onClick={setViewToCurrent}>
            Current Messages
          </button>
          <FavoriteList
            favorites={favorites}
            handleFavoriteMessage={handleFavoriteMessage}
          />
        </div>
      )}
    </>
  );
};

export default SidebarContentList;
