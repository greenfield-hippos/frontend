import { useEffect, useState } from "react";
import ConversationList from "./ConversationList";
import FavoriteList from "./FavoriteList";

interface SidebarContentListProps {
    messages:  object[];
    setUser_id: (a:string | number) => void;
}

const SidebarContentList: React.FC<SidebarContentListProps> = () => {
    const [selectedContentType, setSelectedContentType] = useState("conversation");

    useEffect(() => {

    }, [selectedContentType]);
    
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
            ? <ConversationList setUser_id={setUser_id} /> 
            : <FavoriteList />
            }
        </>
    )
}

export default SidebarContentList;