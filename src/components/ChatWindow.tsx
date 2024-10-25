import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

const ChatWindow = () => {

    return (
        <>
            <div className="chat-window">
                <MessageList />
                <SendMessage />
            </div>
        </>
    )

}

export default ChatWindow;