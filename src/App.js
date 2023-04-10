import './App.css';
import { Overview } from './Overview.js'
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([{task: "go shopping", id: 123}, {task: "go gym", id: 4555}]);

  //const tasks = taskList.map(task => <li key={task}>{task}</li>)


  return (
    <div className="App">
      <Overview taskList={taskList} setTaskList={setTaskList}/>



      {/* <ul>
        {tasks}
      </ul> */}
    </div>
    

  );
}

export default App;
