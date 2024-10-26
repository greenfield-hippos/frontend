import { useEffect, useState } from "react";
import ConversationList from "./ConversationList";
import FavoriteList from "./FavoriteList";

interface Props {
    setUser_id: (a:string | number) => void;
    setSelectedConversation_id: (a:string | number) => void;
}

const SidebarContentList: React.FC<Props> = ({
    setUser_id,
    setSelectedConversation_id
}) => {
    const [selectedContentType, setSelectedContentType] = useState("conversation");
    
    return (
        <>  
            <button
                onClick={() => setSelectedContentType("conversation")}
            >
                Conversations
            </button>
            <button
                onClick={() => setSelectedContentType("favourite")}
            >
                Favorites
            </button>
            {(selectedContentType === "conversation")
            ? <ConversationList setUser_id={setUser_id} setSelectedConversation_id={setSelectedConversation_id}/> 
            : <FavoriteList />
            }
        </>
    )
}

export default SidebarContentList;