import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalWindow({isOpen, onUpdateIsOpen, tasks, handleUpdateTaskList}) {
    const[newTitle, setNewTitle] = useState('');
    const[newTask, setNewTask] = useState('');
    const[newTagArr, setNewTagArr] = useState('');
    
    const toastOptions = {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  };
  
    const handleNewTitle = (event) => {
      setNewTitle(event.target.value);
    }
  
    const handleNewTask = (event) => { 
      setNewTask(event.target.value);
    }
  
    const handleNewTagArr = (event) => {
      setNewTagArr(event.target.value)
    }
  
    const closeModal = () => {
      onUpdateIsOpen(false);
    }
    
    const AddTask = async() => { 
  
      try { 
        await handleUpdateTaskList([...tasks, {id: tasks.length+1, title: newTitle, description: newTask, tagList: newTagArr.length === 0 ? newTagArr : newTagArr.split(",")}]);
        await setNewTask('');
        await setNewTitle('');
        await setNewTagArr('');
        await toast.success('Success!', toastOptions);
        await closeModal();
      } catch(error) {
        console.log(error);
        toast.error('Error!', toastOptions);
      }
    }
  
    return(
      <>
        
      {isOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start justify-center pt-48 z-50">
            <div className="bg-slate-100 rounded-xl w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 border border-slate-700 shadow-lg">
              <h2 className="text-2xl font-semibold flex justify-between items-center px-9 py-8 underline underline-offset-2 decoration-blue-500 text-slate-800">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                  </svg>
                  Add new task
                </div>
              <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 rounded-lg bg-slate-300 hover:bg-slate-400 duration-150 ring ring-transparent hover:ring-offset-2 hover:ring-slate-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </h2>
              <div className="px-9">
                
                <div className="mb-6 flex content-center justify-between">
                  <label className="text-sm min-[500px]:text-lg font-semibold text-slate-800 underline decoration-blue-600 underline-offset-2">Title</label>
                  <input value={newTitle} onChange={handleNewTitle} className="ring ring-transparent focus:ring-offset-2 duration-150 focus:ring-blue-500 min-w-[75%] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-lg py-2.5 px-4 shadow-sm focus:outline-none sm:text-sm" placeholder="Do my algebra homework..." type="text" name="search"/>  
                </div>
                <div className="flex content-center justify-between mb-6">
                  <label className="text-sm min-[500px]:text-lg font-semibold text-slate-800 underline decoration-green-600 underline-offset-2">Description</label>
                  <textarea value={newTask} onChange={handleNewTask} className="ring ring-transparent focus:ring-offset-2 duration-150 focus:ring-green-600 min-w-[75%] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-lg py-2.5 px-4 shadow-sm focus:outline-none sm:text-sm" rows="5" placeholder="I need to complete the first three algebra problems on page 37 and also learn the theorem."/>
                </div>
                <div className="flex content-center justify-between">
                  <label className="text-sm min-[500px]:text-lg font-semibold text-slate-800 underline decoration-fuchsia-600 underline-offset-2">Tags</label>
                  <textarea value={newTagArr} onChange={handleNewTagArr} className="ring ring-transparent focus:ring-offset-2 duration-150 focus:ring-fuchsia-600 min-w-[75%] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-lg py-2.5 px-4 shadow-sm focus:outline-none sm:text-sm" rows="5" placeholder="For example: school, study, learning, mental_grow. Attention: SPLIT IT BY COMMA! (,)"/>
                </div>
              </div>
  
              <div className="pb-5 bg-slate-200 rounded-b-lg mt-5 pt-5 px-9 flex justify-end">
  
                <button onClick={closeModal} className="flex items-center bg-red-500 hover:bg-red-600 duration-150 ring ring-transparent hover:ring-offset-2 hover:ring-red-600 rounded-lg px-5 py-2 mr-1 text-lg font-semibold text-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel</button>
  
                <button onClick={AddTask} disabled={!newTitle || !newTask} className="flex items-center bg-blue-500 hover:bg-blue-600 duration-150 ring ring-transparent hover:ring-offset-2 hover:ring-blue-600 rounded-lg py-2 px-6 ml-2 text-lg font-semibold text-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Save</button>
  
              </div>
          </div>
        </div>
      )}
      </>
    );
  }

  export default ModalWindow;