import { useEffect, useRef, useState } from "react";
import { BsSend, BsEmojiSmile } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import EmojiPicker from "emoji-picker-react";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [open, setOpen] = useState(false);
  const pickerRef = useRef(null);

  const handleEmoji = (e) => {
    setMessage((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative bg-gray-700 border-x-blue-500 border-gray-600 rounded-lg">
        <div>
          <input
            type="text"
            className="w-5/6 bg-gray-700 border-none rounded-lg outline-none border text-sm 2xl:text-xl inline p-2.5  text-white"
            placeholder="Send a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="button"
          className=" absolute inset-y-0 end-10 flex items-center px-3 text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          <BsEmojiSmile className="w-5 h-5" />
        </button>
        <div ref={pickerRef} className="absolute bottom-14 right-0">
          {open && <EmojiPicker onEmojiClick={handleEmoji} />}
        </div>

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center px-3 text-white"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend className=" w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
}

// Starter code for MessageInput
// import { BsSend } from "react-icons/bs";

// export default function MessageInput() {
//   return (
//     <form className="px-4 my-3 ">
//       <div className="w-full">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//           placeholder="Send a message"
//         />
//         <button
//           type="submit"
//           className="absolute inset-y-0 end-0 flex items-center pe-3"
//         >
//           <BsSend />
//         </button>
//       </div>
//     </form>
//   );
// }
