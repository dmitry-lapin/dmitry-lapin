import React from "react";

function LogoutButton() {
    const handleClick = () => {
        localStorage.clear();
        window.location.reload(false);
    }

    return(
        <button className="w-fit flex text-center group items-center" onClick={handleClick}>
            <p className=" text-slate-800 font-semibold rounded-md self-center mr-1 group duration-150 group-hover:text-red-500">Logout</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duration-150 group-hover:text-red-500 w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
        </button>
    );
}

export default LogoutButton;