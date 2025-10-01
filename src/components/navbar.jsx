import React from 'react';
const Navbar=()=>{
    return (
        <nav className="navbar">
            <div className="navtitle">Progress tracker</div>
             <input type="text" className="search" placeholder="search tasks..." />
            <button className="navbutton">+add task</button>
        </nav>
    );
};
export default Navbar;