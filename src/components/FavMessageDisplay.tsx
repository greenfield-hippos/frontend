import { Message, Favorites } from "../types";
//import { useRef, useEffect } from "react";

interface FavMessageDisplayProps {
    messages: Message[];
    favorites : Favorites;
    selectedFavorite : Message | null;
}

const FavMessageDisplay: React.FC<FavMessageDisplayProps> = ({ selectedFavorite }) => {

    return (
        selectedFavorite === null ? (
            <div className="message-list">
                No message selected.
            </div>
            ) :
            (
            <div className="message-list">
                <div 
                    key={selectedFavorite.id} 
                    className="message ChatGPT"
                >
                    <p>{selectedFavorite.content}</p>
                </div>
            </div>
            )
    );
};

export default FavMessageDisplay;