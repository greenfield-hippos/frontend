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
            <Search />
            <p>Conversations</p>
        </>
    )
}

export default ConversationList;