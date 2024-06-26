import Conversations from "./Conversations/Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

export default function Sidebar() {
  return (
    <div className="lg:w-[500px] 2xl:w-[600px] border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
}

// Starter code for Sidebar
// import Conversations from "./Conversations/Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// export default function Sidebar() {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <Conversations />
//       <LogoutButton />
//     </div>
//   );
// }
