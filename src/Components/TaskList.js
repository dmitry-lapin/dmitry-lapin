import React from "react";

function TaskList() {
  const storedData = localStorage.getItem('taskList');
  let tasks = storedData ? JSON.parse(storedData) : [];

  const handleClick = (event) => {
    try {
      let divToDelete = event.target.closest('.taskItem');
      if(divToDelete) divToDelete.remove();


      const value = event.target.closest('button').value;
      const filteredArr = tasks.filter(obj => obj.id !== parseInt(value));

      localStorage.setItem('taskList', JSON.stringify(filteredArr));
    } catch(error) {
      console.log(error);
    }
  }

    function NoData() {
      return(
        <>
          <img className="h-48 w-48" src="../img/i-dont-know.png" alt="no-data" />
          <p className="text-2xl font-semibold underline decoration-blue-500 text-slate-800 ">No tasks to display...</p>
        </>
      )
    }
  
    return (
      <div id="renderTasks">
         <div className="p-0 flex flex-col my-14 justify-center items-center">
          {tasks.length === 0 ? (
            <NoData />
          ) : (
            <ul className="w-full">
              {tasks.map((task) => (
                <div key={task.id} className="taskItem flex justify-between ring-transparent w-full bg-slate-200 rounded-md shadow-lg p-4 my-2 border-[1px] border-transparent duration-150 hover:border-[1px] hover:border-slate-400">
                  <li className="px-4 flex-col space-y-3">
                  <p className="font-semibold text-lg border-l pl-2 border-blue-600">{task.title}</p>
                  <p className="font-normal text-md italic border-l pl-2 border-green-600">{task.description}</p>
                  {task.tagList.length < 1 ? null : (
                    <div className="flex flex-row flex-wrap space-x-2 sm:justify-normal justify-center border-l pl-2 border-fuchsia-600"> {(task.tagList).map((tag, index) => (
                      <p key={index} className="my-1 cursor-pointer border rounded-[4px] py-[1px] px-1.5 border-fuchsia-600 font-semibold duration-150 hover:bg-slate-300 shadow-md">#{tag.trim()}</p>
                    ))} </div>
                  )}  
                  </li>
                  <button value={task.id} className="self-start mt-3" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer text-slate-800 hover:text-red-500 duration-150" alt="delete selected tasks.">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  export default TaskList;