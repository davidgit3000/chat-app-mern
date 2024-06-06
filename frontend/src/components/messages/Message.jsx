export default function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="./logo.png" alt="user avatar" />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's up?</div>
      <div className="chat-footer text-white opacity-50 text-xs flex gap-1 items-center">
        06:14 pm
      </div>
    </div>
  );
}