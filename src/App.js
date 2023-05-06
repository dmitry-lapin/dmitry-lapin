import './App.css';
import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ModalWindow from './Components/AddTaskModal';
import TaskList from './Components/TaskList';
import Greeting from  './Components/GreetingBlock';
import AddTaskButton from  './Components/AddTaskButton';
import WelcomeModal from  './Components/WelcomeModal';
import LogoutButton from './Components/LogoutButton';

function App() {
  const[welcomeIsOpen, setWelcomeIsOpen] = useState(false);
  useEffect(() => {
    setWelcomeIsOpen(true);
  },[])

  const[isOpen, setIsOpen] = useState(false);
  
  const handleUpdateIsOpen = (updatedIsOpen) => {
    setIsOpen(updatedIsOpen);
  };

  return(
    <div className="max-w-4xl mx-auto h-screen bg-slate-200 pt-16 bg-opacity-95">
      <div className ="flex px-20 justify-center flex-col md:flex-row md:justify-between mb-7">
        <div className="flex flex-col">
          <Greeting />
        </div>
        <div className="mt-7 space-x-5 flex flex-row justify-center md:space-x-0 md:mt-0 md:flex md:flex-col md:items-center md:justify-between">
          <AddTaskButton isOpen={isOpen} onUpdateIsOpen={handleUpdateIsOpen}/>
          <LogoutButton />
          <ModalWindow isOpen={isOpen} onUpdateIsOpen={handleUpdateIsOpen}/>
          {localStorage.getItem('userName') ? "" : <WelcomeModal welcomeIsOpen={welcomeIsOpen} onClose={() => setWelcomeIsOpen(false)}/>}
        </div>
      </div>
      <div className="bg-slate-300 w-full py-5 px-20">
        <div className="flex justify-between">
          <h1 className="text-md sm:text-xl md:text-2xl font-semibold flex items-center text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            There is your To-Do List on today!
          </h1>
        </div>
        <TaskList/>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
