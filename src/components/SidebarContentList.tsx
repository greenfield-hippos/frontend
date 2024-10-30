import ConversationList from "./ConversationList";
import { Conversation, Favorites, Message } from "../types";
import FavoriteList from "./FavoriteList";
import { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";

interface SidebarContentListProps {
  conversations: Conversation[];
  onSelectConversation: (conversationId: string | null) => void;
  handleFavoriteMessage: (id: number | null) => void;
  fetchFavoriteData: () => void;
  setViewToCurrent: () => void;
  favorites: Favorites;
  favoriteView: boolean;
  setSelectedFavorite: Dispatch<SetStateAction<Message | null>>;
  selectedFavorite: Message | null;
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
