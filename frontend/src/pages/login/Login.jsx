import { useState } from "react";
import { Link } from "react-router-dom";

import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            width={"100rem"}
            className="rounded-lg"
          />
          <h1 className="text-4xl font-semibold text-center text-gray-200">
            Welcome to{" "}
            <span className="text-5xl text-indigo-600 font-bold">
              ChatGiDay
            </span>
          </h1>
        </div>

        <h2 className="text-3xl pt-2 text-center font-semibold text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full input input-bordered h-10"
            />
            <button
              type="button"
              className="absolute text-xl top-3 hover:text-sky-500 end-0 flex items-center pe-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>
          <Link
            to="/signup"
            className="text-md text-black hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-md text-lg hover:bg-slate-700 mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Starter code for Login component
// export default function Login() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <div className="flex items-center gap-3">
//           <img
//             src="/logo.png"
//             alt="logo"
//             width={"100rem"}
//             className="rounded-lg"
//           />
//           <h1 className="text-4xl font-semibold text-center text-gray-200">
//             Welcome to{" "}
//             <span className="text-5xl text-indigo-600 font-bold">Chatto</span>
//           </h1>
//         </div>

//         <h2 className="text-3xl pt-2 text-center font-semibold text-gray-800">
//           Login
//         </h2>

//         <form>
//           <div className="py-4">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-md text-black hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Don't have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-md text-lg hover:bg-slate-700 mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
