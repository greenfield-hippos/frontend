import { Message } from "../types";

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((message) => (
                <div key={message.id} className={`message ${message.author}`}>
                    <p>{message.content}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;