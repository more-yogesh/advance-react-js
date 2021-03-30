import { useState } from 'react';

function App() {

  const [inputTask, setInputTask] = useState();
  const [inputTaskList, setInputTaskList] = useState([]);

  const onChangeHandler = (e) => {
    let task = e.target.value;
    setInputTask(task);
    // console.log(task);
  }

  const clickHandler = () => {
    let tasks = inputTaskList;
    tasks.push(inputTask);
    setInputTaskList(tasks);
    setInputTask('');
    // console.log(inputTaskList);
  }

  return (
    <div className="taskBox">
      <div className="taskForm">
        <input type="text" onChange={onChangeHandler} value={inputTask} />
        <button onClick={clickHandler}>Add Task</button>
      </div>
      <div className="taskList">
        {
          inputTaskList.map((value, index) => {
            return <p key={index} className="task">{value}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
