import React from 'react';
const Taskcontainer = ({
  title,
  tasks,
  col,
  onDragStart,
  onDragOver,
  onDropColumn,
  onDropOnTask,
  onDeleteTask
}) => {
  return (
    <div
      className="taskcontainer"
      onDragOver={onDragOver}
      onDrop={() => onDropColumn(col)}
    >
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="task"
          draggable
          onDragStart={() => onDragStart(task, col, index)}
          onDragOver={onDragOver}
          onDrop={(e) => {
            e.stopPropagation(); // prevent column drop
            onDropOnTask(col, index);
          }}
        >
          <span >{task}</span>{
            <button className="deletebutton" onClick={()=> onDeleteTask(col,index)}>X</button>
          }
        </div>
      ))}
    </div>
  );
};

export default Taskcontainer;
