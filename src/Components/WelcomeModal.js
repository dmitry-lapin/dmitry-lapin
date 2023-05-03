import React, { useState } from "react";

function WelcomeModal({ welcomeIsOpen, onClose, name, handleUpdateName }) {
    const[newName, setNewName] = useState('');
    
    if (!welcomeIsOpen) {
      return null;
    }
  
    const handleNewName = (event) => {
      setNewName(event.target.value);
    }
  
    const CancelName = async() => {
      await handleUpdateName('Inkognito');
      await setNewName('');
      await onClose();
    }
  
    const SaveName = async() => {
      await handleUpdateName(newName);
      await setNewName('');
      await onClose();
    }
  
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start justify-center pt-48 z-50 backdrop-blur-md">
        <div className="bg-slate-100 rounded-xl w-11/12 sm:w-10/12 md:w-6/12 xl:w-4/12 border border-slate-700 shadow-lg">
          <div className="flex justify-between py-7 px-7">
            <h2 className="text-2xl font-bold flex justify-between items-center underline underline-offset-2 decoration-blue-500 text-slate-800 ml-4">Welcome!</h2>
            <svg onClick={CancelName} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 rounded-lg bg-slate-300 hover:bg-slate-400 duration-150 ring ring-transparent hover:ring-offset-2 hover:ring-slate-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="px-7">
            <p className="font-semibold text-slate-800 text-md">Hello! Please, enter your name below.</p>
            <div className="flex content-center justify-between my-5">
              <label className="md:text-md lg:text-lg font-semibold text-slate-800 underline decoration-blue-600 underline-offset-2">Your name: </label>
              <input value={newName} onChange={handleNewName} className="ring ring-transparent focus:ring-offset-2 duration-150 focus:ring-blue-500 min-w-[75%] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-lg py-2.5 px-4 shadow-sm focus:outline-none sm:text-sm" placeholder="For example: Bryan Gold" type="text" name="search"/>  
            </div>
          </div>
          <div className="pb-5 bg-slate-200 rounded-b-lg mt-5 pt-5 px-9 flex justify-end">
  
                <button onClick={CancelName} className="text-sm xl:text-lg flex items-center bg-red-500 hover:bg-red-600 duration-150 ring ring-transparent hover:ring-offset-2 hover:ring-red-600 rounded-lg font-semibold text-slate-100 ml-1 py-1.5 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                No, it's a secret.</button>
  
                <button onClick={SaveName} className="text-sm xl:text-lg flex items-center bg-blue-500 hover:bg-blue-600 duration-150 ring ring-transparent hover:ring-offset-2 hover:ring-blue-600 rounded-lg font-semibold text-slate-100 ml-1 py-1.5 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Save</button>
  
              </div>
        </div>
      </div>
    );
  }

  export default WelcomeModal;