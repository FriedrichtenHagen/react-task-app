import './App.css';
import { Overview } from './Overview.js'
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([{task: "go shopping", id: 123}, {task: "go gym", id: 4555}]);

  function handleDeleteButton(event, key){
    // find the task that should be deleted
    const deletedTask = taskList.find(object => object.id === key)
    console.log(deletedTask)
    // remove it from the taskList state
    const currentTaskListState = taskList.slice()
    const index = currentTaskListState.indexOf(deletedTask)
    currentTaskListState.splice(index, 1);
    setTaskList(currentTaskListState)
    console.log(taskList)
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
    

  )
}

export default App;
