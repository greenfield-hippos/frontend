import { Message, Favorites } from "../types";
//import { useRef, useEffect } from "react";

interface FavMessageDisplayProps {
    messages: Message[];
    favorites : Favorites;
    selectedFavorite : Message;
}

const FavMessageDisplay: React.FC<FavMessageDisplayProps> = ({ selectedFavorite }) => {

    return (
        <div className="message-list">
                <div 
                    key={selectedFavorite.id} 
                    className="message ChatGPT"
                >
                    <p>{selectedFavorite.content}</p>
                </div>
        </div>
    );
};

export default FavMessageDisplay;