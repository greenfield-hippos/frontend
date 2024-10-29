import { Favorites } from "../types";
import moment from "moment";

interface FavoriteListProps {
    favorites : Favorites;
    handleFavoriteMessage: (id: number | null) => void;
}

const FavoriteList: React.FC<FavoriteListProps> = ({ favorites, handleFavoriteMessage }) => {
    return (
        <>
            <div>
                {favorites.question.length === 0
                    ? (<p>No favorite messages.</p>)
                    : ((favorites.question).map((question) => (
                        <div 
                            key={question.id}
                            className="conversation-item"
                            onClick={() => handleFavoriteMessage(favorites.question.indexOf(question))}
                        >
                        <h3>{question.content || "Untitled Message"}</h3>
                        <p className="conversation-time">{moment(question.timestamp).fromNow()}</p>
                    </div>
                    ))
                )}
            </div>
        </>
    )
}

export default FavoriteList;