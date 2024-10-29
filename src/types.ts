export interface Message {
    id: string;
    conversation_id?: string | null;
    author: string;
    chat_user_id: string | null;
    content: string;
    is_favorite?: boolean;
    timestamp: Date;
}

export interface Conversation {
    id: string ;
    title: string ;
    updated_at: Date ;
}

export interface Favorites {
    question: Array<Message>;
    answer: Array<Message>;
}

export interface User {
    id: string | null;
    username: string | null;
    is_admin: boolean | null;
    account_created: Date | null;
    last_login: Date | null;
}