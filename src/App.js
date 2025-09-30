import React from 'react';
import Navbar from './components/navbar';
import Taskcontainer from './components/taskcontainer';
import "./style.css";
const App =()=>{
  return (
   
    <div className="outerbox">
      <Navbar/>
      <div className="columnbox">
      <Taskcontainer title="To Do" />
      <Taskcontainer title="In Progress" />
      <Taskcontainer title="Done" />
      </div>
    </div>
  );
};

export default App;
