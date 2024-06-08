import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex sm:flex-col sm:overflow-auto lg:flex-row md:h-[30rem] md:w-[40rem] lg:h-[35rem] lg:w-[70rem] xl:w-[70rem] xl:h-[35rem] rounded-lg 2xl:h-[55rem] 2xl:w-[100rem] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
