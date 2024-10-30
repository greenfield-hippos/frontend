import { Message } from "../types";
import { useRef, useEffect, useState } from "react";
import SimpleSpeech from "./SimpleSpeech";
const apiUrl: string = import.meta.env.VITE_API_URL;

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  //useState for favorite answer
  const [favMessages, setFavMessages] = useState<Set<string>>(new Set());

  // Ref to keep track of the last message
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the last message whenever messages change
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    messages.map((message) => {
      if (message.is_favorite) {
        setFavMessages((previewFavMessages) => {
          const update = new Set(previewFavMessages);
          update.add(message.id);
          return update;
        });
      }
    });
  }, [messages]);

  async function handleFavoriteMessage(
    messageID: string,
    is_favorite: boolean
  ) {
    try {
      const response = await fetch(`${apiUrl}messages/${messageID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_favorite }),
      });

      if (!response.ok) throw new Error("Failed to update favorite");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  //This returns the updated Set to setFavMessages.
  //It triggers component to rerender with updated favorites.
  const handleFav = (messageId: string) => {
    setFavMessages((previewFavMessages) => {
      const updatedFav = new Set(previewFavMessages);
      if (updatedFav.has(messageId)) {
        updatedFav.delete(messageId);
        handleFavoriteMessage(messageId, false);
      } else {
        updatedFav.add(messageId);
        handleFavoriteMessage(messageId, true);
      }
      return updatedFav;
    });
  };

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`message ${
            message.author === "ChatGPT" ? "ChatGPT" : "user"
          }`}
          ref={index === messages.length - 1 ? lastMessageRef : null}
        >
          <p>{message.content}</p>

          {message.author === "ChatGPT" && (
            <>
              <SimpleSpeech textToSpeak={message.content} />

              <button className="star" onClick={() => handleFav(message.id)}>
                {favMessages.has(message.id) ? "★" : "☆"}
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
