export default function Conversation() {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="./logo.png" alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-bold text-gray-200">David Lam</p>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
}

// Starter code for Conversation
// export default function Conversation() {
//     return (
//       <>
//         <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online">
//             <div className="w-12 rounded-full">
//               <img src="./logo.png" alt="user avatar" />
//             </div>
//           </div>

//           <div className="flex flex-col flex-1">
//             <p className="font-bold text-gray-200">David Lam</p>
//           </div>
//         </div>

//         <div className="divider my-0 py-0 h-1" />
//       </>
//     );
//   }