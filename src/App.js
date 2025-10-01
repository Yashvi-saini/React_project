import React ,{useState} from 'react';
import Navbar from './components/navbar';
import Taskcontainer from './components/taskcontainer';
import "./style.css";
const App = () => {
  const [tasks, setTasks] = useState({
    todo: ["Task 1", "Task 2"],
    inprogress: ["Task 3","Task 5","Task 6"],
    done: ["Task 4"]
  });

  const [draggedTask, setDraggedTask] = useState(null);

  const handleAddTask = (taskText) => {
    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, taskText]   // add to "todo"
    }));
  };

  const handleDragStart = (task, col, index) => {
    setDraggedTask({ task, col, index });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropColumn = (col) => {
    if (!draggedTask) return;
const newTasks = { ...tasks };

    //remove old
    newTasks[draggedTask.col] = newTasks[draggedTask.col].filter(
      (t, i) => i !== draggedTask.index
    );
    // Add to new column
    newTasks[col] = [...newTasks[col], draggedTask.task];

    setTasks(newTasks);
    setDraggedTask(null);
  };

  const handleDropOnTask = (col, targetIndex) => {
    if (!draggedTask) return;

    const newTasks = { ...tasks };
   
    newTasks[draggedTask.col] = newTasks[draggedTask.col].filter(
      (t, i) => i !== draggedTask.index
    );

    //rearrange within column
    if (col === draggedTask.col) {
      newTasks[col].splice(targetIndex, 0, draggedTask.task);
    } else {
      
      // Different column
      newTasks[col].splice(targetIndex, 0, draggedTask.task);
    }

    setTasks(newTasks);
    setDraggedTask(null);
  };
  
  return (
    <div className="outerbox">
      <Navbar  onAddTask={handleAddTask}/>
      <div className="columnbox">
        <Taskcontainer
          title="To Do"
          tasks={tasks.todo}
          col="todo"
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDropColumn={handleDropColumn}
          onDropOnTask={handleDropOnTask}
        />
        <Taskcontainer
          title="In Progress"
          tasks={tasks.inprogress}
          col="inprogress"
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDropColumn={handleDropColumn}
          onDropOnTask={handleDropOnTask}
        />
        <Taskcontainer
          title="Done"
          tasks={tasks.done}
          col="done"
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDropColumn={handleDropColumn}
          onDropOnTask={handleDropOnTask}
        />
      </div>
    </div>
  );
};
export default App;
