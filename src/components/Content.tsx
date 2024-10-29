import { useEffect, useState } from "react";
import SidebarContentList from "./SidebarContentList";
import ChatWindow from "./ChatWindow";
import { Conversation, User, Message, Favorites } from "../types";

interface ContentProps {
  user: User;
}

const Content: React.FC<ContentProps> = ({ user }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
    const [favorites, setFavorites] = useState<Favorites>({question: [], answer: []});
    const [selectedFavorite, setSelectedFavorite] = useState<Favorites[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setIsLoading(true);
    fetchConversations();
  }, []);

  const fetchFavoriteData = async () => {
    try {
      const response = await fetch(apiUrl + "users/" + user.id + "/favorites");
      const data = await response.json();
      console.log(data);
      setFavorites(data);

      if (favorites.length > 0) {
        // do nothing
      } else {
        initializeNewConversation();
      }
    } catch (error) {
      console.error("Error fetching conversations: ", error);
    }
  };

  const fetchConversations = async () => {
    try {
      const response = await fetch(
        apiUrl + "users/" + user.id + "/conversations"
      );
      const data = await response.json();
      setConversations(data);
      setIsLoading(false);
      if (conversations.length <= 0) {
        initializeNewConversation();
      }
    } catch (error) {
      console.error("Error fetching conversations: ", error);
    }
  };

  const fetchMessagesForConversation = async (
    conversationId: string | null
  ) => {
    if (conversationId) {
      setIsLoading(true);
      try {
        const response = await fetch(
          apiUrl +
            "users/" +
            user.id +
            "/conversations/" +
            conversationId +
            "/messages"
        );
        const data = await response.json();
        setMessages(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching messages: ", error);
        setIsLoading(false);
      }
    } else {
      setMessages([]);
    }
  };

  const initializeNewConversation = () => {
    const newConversation: Conversation = {
      id: "",
      title: "Untitled Conversation",
      updated_at: new Date(),
    };
    setSelectedConversation(newConversation);
  };

  const handleSelectConversation = (conversationId: string | null) => {
    let selectedConv: Conversation | null | undefined;
    if (conversationId) {
      selectedConv = conversations.find((conv) => conv.id === conversationId);

      if (selectedConv === undefined) {
        selectedConv = null;
      }
    } else {
      selectedConv = null;
    }

    setSelectedConversation(selectedConv);
    if (selectedConversation) {
      fetchMessagesForConversation(conversationId);
    }
  };

  const handleNewMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <>
      <div className="content-container">
        {isLoading && <p>Loading...</p>}

        <SidebarContentList
          conversations={conversations}
          onSelectConversation={handleSelectConversation}
          fetchFavoriteData={fetchFavoriteData}
        />

        {
          <ChatWindow
            user={user}
            conversation={selectedConversation}
            messages={messages}
            onUpdateMessage={handleNewMessage}
            onSelectConversation={handleSelectConversation}
            fetchConversations={fetchConversations}
          />
        }
      </div>
    </>
  );
};

export default Content;
