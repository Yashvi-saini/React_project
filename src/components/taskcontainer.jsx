import React from 'react';
import Title from './title';
import Todoitem from './todoitem';
import Button from './button';

const Taskcontainer= ({title})=>{
    return (
  <div className="taskcontainer">
    <Title text={title}/>
    <Todoitem status="task1"/>
       <Todoitem status="task2"/>
       <Todoitem status="task3"/>
       <Todoitem status="task4"/>
      <Button/>
  </div>
    );
};
export default Taskcontainer;