export default function Login() {
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
            <span className="text-5xl text-indigo-600 font-bold">Chatto</span>
          </h1>
        </div>

        <h2 className="text-3xl pt-2 text-center font-semibold text-gray-800">
          Login
        </h2>

        <form>
          <div className="py-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-md text-black hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </a>

          <div>
            <button className="btn btn-block btn-md text-lg hover:bg-slate-700 mt-2">
              Login
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
