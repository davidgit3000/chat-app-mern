import GenderSelect from "./GenderSelect";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Sign Up
        </h1>

        <form>
          <div className="py-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="pb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="pb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="pb-2">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderSelect />
          <a
            className="text-sm text-black hover:underline hover:text-blue-600 inline-block"
            href="#"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-md text-lg mt-2 border  border-slate-700 hover:text-gray-500">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Starter code for the Signup component
// import GenderSelect from "./GenderCheckbox";

// export default function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-800">
//           Sign Up
//         </h1>

//         <form>
//           <div className="py-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div className="pb-4">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div className="pb-4">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div className="pb-2">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <GenderSelect />
//           <a
//             className="text-sm text-black hover:underline hover:text-blue-600 inline-block"
//             href="#"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-md text-lg mt-2 border  border-slate-700 hover:text-gray-500">
//               Sign up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
