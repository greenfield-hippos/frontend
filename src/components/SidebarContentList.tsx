import ConversationList from "./ConversationList";
import { Conversation, Favorites, User } from "../types";
import FavoriteList from "./FavoriteList";
import { useEffect } from "react";

interface SidebarContentListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string | null) => void;
  handleFavoriteMessage: (id: number | null) => void;
  fetchFavoriteData: () => void;
  setViewToCurrent: () => void;
  fetchConversations: Function;
  favorites: Favorites;
  favoriteView: boolean;
  user: User;
}

const SidebarContentList: React.FC<SidebarContentListProps> = ({
  user,
  conversations,
  onSelectConversation,
  handleFavoriteMessage,
  fetchFavoriteData,
  setViewToCurrent,
  fetchConversations,
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
            fetchConversations={fetchConversations}
            user={user}
          />
        </div>
      ) : (
        <div className="sidebar-content">
          <button
            type="button"
            onClick={() => {
              setViewToCurrent();
            }}
          >
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
