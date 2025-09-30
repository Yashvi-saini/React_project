import logo from './logo.svg';
import Title from './components/title';
import Todoitem from './components/todoitem';
import Button from './components/button';
import "./style.css";
const App =()=>{
  return (
    <div className="taskcontainer">
      <Title/>
       <Todoitem status="task1"/>
       <Todoitem status="task2"/>
       <Todoitem status="task3"/>
       <Todoitem status="task4"/>
      <Button/>
    </div>
  );
};

export default App;
