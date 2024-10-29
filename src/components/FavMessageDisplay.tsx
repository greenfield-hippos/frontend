import { Message, Favorites } from "../types";
//import { useRef, useEffect } from "react";

interface FavMessageDisplayProps {
    messages: Message[];
    favorites : Favorites;
    selectedFavorite : Favorites
}

const FavMessageDisplay: React.FC<FavMessageDisplayProps> = ({ selectedFavorite }) => {

    return (
        <div className="message-list">
                <div 
                    key={selectedFavorite.answer.id} 
                    className="message ChatGPT"
                >
                    <p>{selectedFavorite.answer.content}</p>
                </div>
        </div>
    );
};

export default FavMessageDisplay;