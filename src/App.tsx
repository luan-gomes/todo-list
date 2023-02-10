import './global.css'
import styles from './App.module.css';
import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { useState } from 'react';

export interface Task {
  content: string,
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddNewTask = (content: string) => {
    setTasks(prevState => {
      const newTask = {
        content,
        completed: false,
      };
      const tasksUpdated = [...prevState, newTask];
      return tasksUpdated
    });
  };

  const handleChangeTaskCompletedStatus = (content: string) => {
    const updatedTaskList = tasks.map(task => {
      if (task.content === content) {
        const updatedTask = {
          completed: task.completed === true ? false : true,
          content: task.content,
        }
        return updatedTask;
      }
      return task;
    })
    setTasks(updatedTaskList);
  };

  const handleDeleteTask = (content: string) => {
    const newTasksList = tasks.filter(task => {
      return task.content !== content;
    })
    setTasks(newTasksList);
  };

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <CreateTask handleAddNewTask={handleAddNewTask} />
        <TaskList
          tasks={tasks}
          handleChangeTaskCompletedStatus={handleChangeTaskCompletedStatus}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  )
}

export default App
