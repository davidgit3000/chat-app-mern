import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts component)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/** Header */}
          <div className="bg-indigo-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-100 font-semibold flex flex-col items-center gap-2">
        <p>Welcome, David Lam!<span className=" text-3xl">👋🏻</span></p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// Starter code for MessageContainer
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// export default function MessageContainer() {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//         {/** Header */}
//         <div className="bg-indigo-500 px-4 py-2 mb-2">
//           <span className="label-text">To:</span>{" "}
//           <span className="text-gray-900 font-bold">David Lam</span>
//         </div>

//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   );
// }
