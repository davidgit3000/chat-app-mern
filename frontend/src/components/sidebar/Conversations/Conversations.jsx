import useGetConversations from "../../../hooks/useGetConversations";
import Conversation from "./Conversation";

export default function Conversations() {
  const { loading, conversations } = useGetConversations();
  // console.log("Conversations: ", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversation.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

// Starter code for Conversation
// import Conversation from "./Conversation";

// export default function Conversations() {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// }
