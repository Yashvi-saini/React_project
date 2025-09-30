import React from 'react';
const Navbar=()=>{
    return (
        <nav className="navbar">
            <div className="navtitle">Progress tracker</div>
            <ul className ="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Tasks</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">log out</a></li>
            </ul>
            <button className="navbutton">+add task</button>
        </nav>
    );
};
export default Navbar;