import Search from "./Search";

const ConversationList = (
    // conversations,
    // onSelectConversation,
    // onAddConversation,
    // searchQuery,
    // onSearchChange
) => {


    // const filteredConversations = conversations(conversation => {
    //     return (conversation.content || "").toLowerCase().includes(searchQuery.toLowerCase());
    // })

    return (
        <>  
            <div className="conversation-list-tab">
                <Search />
                <p>Conversation 1</p>
                <p>Conversation 2</p>
                <p>Conversation 3</p>
                <p>Conversation 4</p>
            </div>
        </>
    )
}

export default ConversationList;