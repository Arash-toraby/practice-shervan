function ButtonEdit({ onClick, isEditingField }) {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-2 rounded-md text-xs ml-5 ${
        isEditingField ? "bg-blue-500 text-white" : "bg-slate-200"
      }`}
    >
      {isEditingField ? "Done" : "Edit"}
    </button>
  );
}

// function ButtonEdit({ onClick, isEditing }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-slate-200 py-1
//        px-2 rounded-md text-xs ml-5"
//     >
//       {isEditing ? "Done" : "Edit"}
//     </button>
//   );
// }

export default ButtonEdit;
