import ConversationList from "./ConversationList";
import { Conversation, Favorites, Message, User } from "../types";
import FavoriteList from "./FavoriteList";
import { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";

interface SidebarContentListProps {
  conversations: Conversation[];
  onSelectConversation: (conversationId: string | null) => void;
  handleFavoriteMessage: (id: number | null) => void;
  fetchFavoriteData: () => void;
  setViewToCurrent: () => void;
  fetchConversations: Function;
  favorites: Favorites;
  favoriteView: boolean;
  setSelectedFavorite: Dispatch<SetStateAction<Message | null>>;
  selectedFavorite: Message | null;
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
          <ConversationList
            conversations={conversations}
            onSelectConversation={onSelectConversation}
            fetchConversations={fetchConversations}
            user={user}
            fetchFavoriteData={fetchFavoriteData}
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
