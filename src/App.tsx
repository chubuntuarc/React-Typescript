import React, { Fragment, useState } from "react";

type FormElement =  React.FormEvent<HTMLFormElement>;
interface Task {
  name: string,
  done: boolean
}

function App(): JSX.Element{
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([])
  
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };
  
  const addTask = (name: string) => {
    const newTasks: Task[] = [...tasks, {name, done: false}];
    setTasks(newTasks);
  }
  
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} />  
        <button>Save</button>
      </form>  
      {
        tasks.map((task: Task, i: number) => {
          return <p key={i}>{task.name}</p>  
        })
      }
    </Fragment>
  );
}

export default App;
