import React from "react";

function TaskList({ tasks }) {
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
         <div className="p-0 flex flex-col my-14 justify-center items-center taskItem">
          {tasks.length === 0 ? (
            <NoData />
          ) : (
            <ul className="w-full">
              {tasks.map((task) => (
                <div key={task.id} className="ring-transparent w-full bg-slate-200 rounded-md shadow-lg flex p-4 my-2 border-[1px] border-transparent duration-150 hover:border-[1px] hover:border-slate-400">
                  <div className="">
                    <input type="checkbox" value="" className="w-4 h-4 mt-1" />
                  </div>
                  <li className="px-4 flex-col space-y-3">
                  <p className="font-semibold text-lg">{task.title}</p>
                  <p className="font-normal text-md italic">{task.description}</p>
                  {task.tagList.length < 1 ? null : (
                    <div className="flex flex-row"> {(task.tagList).map((tag, index) => (
                      <p key={index} className="mx-1 cursor-pointer border rounded-[4px] py-[1px] px-1.5 border-slate-400 font-semibold duration-150 hover:bg-slate-300">#{tag.trim()}</p>
                    ))} </div>
                  )}  
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  export default TaskList;