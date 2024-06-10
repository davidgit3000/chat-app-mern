import { Link } from "react-router-dom";
import GenderSelect from "./GenderSelect";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });

  const { loading, signup } = useSignup();
  const handleGenderSelect = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="pb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="pb-4 relative">
            <input
              type={show.password ? "text" : "password"}
              placeholder="Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute text-xl top-3 hover:text-sky-500 end-0 flex items-center pe-3"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              {show.password ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>
          <div className="pb-2 relative">
            <input
              type={show.confirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute text-xl top-3 hover:text-sky-500 end-0 flex items-center pe-3"
              onClick={() =>
                setShow({ ...show, confirmPassword: !show.confirmPassword })
              }
            >
              {show.confirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>
          <GenderSelect
            onSelectChange={handleGenderSelect}
            selectedGender={inputs.gender}
          />
          <span className="text-md text-black">Already have an account? </span>
          <Link
            className="text-md underline text-white hover:underline hover:text-blue-600 inline-block"
            to="/login"
          >Login here</Link>
          <div>
            <button
              className="btn btn-block btn-md text-lg mt-2 border border-slate-700 hover:text-gray-500"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign up"
              )}
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
