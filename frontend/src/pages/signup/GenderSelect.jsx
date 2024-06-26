const GenderSelect = ({ onSelectChange, selectedGender }) => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-900">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onSelectChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-900">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onSelectChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderSelect;

// Starter code for GenderSelect component
// const GenderSelect = () => {
//   return (
//     <div className="flex ">
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text text-gray-900">Male</span>
//           <input
//             type="radio"
//             name="radio-2"
//             value="male"
//             className="radio radio-primary border-slate-800"
//           />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text text-gray-900">Female</span>
//           <input
//             type="radio"
//             name="radio-2"
//             value="female"
//             className="radio radio-primary border-slate-800"
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderSelect;
