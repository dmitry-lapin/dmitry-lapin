import React from "react";

function AddTaskButton({isOpen, onUpdateIsOpen}) {
    const OpenModal = () => { 
      onUpdateIsOpen(true);
  }
  return(
    <button onClick={OpenModal} className="md:order-last ring ring-transparent bg-slate-600 border-2 border-slate-700 hover:ring-slate-700 hover:ring-offset-2 shadow-lg group py-2 px-3 rounded-md hover:bg-slate-700 hover:duration-150 flex">
      <p className=" text-white font-semibold rounded-md">Add task</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" className="text-white" />
      </svg>
    </button>
  );
  }

  export default AddTaskButton;