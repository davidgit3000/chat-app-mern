import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout";

export default function LogoutButton() {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto pt-3">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer hover:bg-red-500 rounded-md"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}
