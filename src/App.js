import './App.css';
import { Overview } from './Overview.js'
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([{task: "go shopping", id: 123}, {task: "go gym", id: 4555}]);

  function handleDeleteButton(event, key){
    console.log(key)
  }


  const tasks = taskList.map(task => 
  <li key={task.id}>{task.task}
    <button onClick={event => {handleDeleteButton(event, task.id)}} key={task.id}>Delete</button>
  </li>)


  return (
    <div className="App">
      <Overview taskList={taskList} setTaskList={setTaskList}/>

      <ul>
        {tasks}
      </ul>
    </div>
    

  );
}

export default App;
