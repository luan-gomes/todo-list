// import { NoTasks } from './NoTasks';
import { TaskItem } from './TaskItem';
import { NoTasks } from './NoTasks';
import styles from './TaskList.module.css';
import { Task } from '../App';

interface TaskListProps {
  tasks: Task[],
  handleChangeTaskCompletedStatus: (content: string) => void,
  handleDeleteTask: (content: string) => void,
}

export const TaskList = ({
  tasks,
  handleChangeTaskCompletedStatus,
  handleDeleteTask
}: TaskListProps) => {
  const tasksCompletedCounter = tasks.reduce((previousValue, currentValue) => {
    if (currentValue.completed) {
      return previousValue + 1;
    }
    return previousValue;
  }, 0);
  const tasksCounter = tasks.length;
  const isTasksListEmpty = tasksCounter === 0;

  return (
    <section className={styles.taskList}>
      <div className={styles.tasksCount}>
        <div className={styles.tasksInfo}>
          <strong className={styles.created}>Tarefas criadas</strong>
          <div className={styles.counter}>
            <span>{tasksCounter}</span>
          </div>
        </div>
        <div className={styles.tasksInfo}>
          <strong className={styles.done}>Concluídas</strong>
          <div className={styles.counter}>
            <span>{`${tasksCompletedCounter} de ${tasksCounter}`}</span>
          </div>
        </div>
      </div>
      {
        isTasksListEmpty && <NoTasks />
      }
      {
        tasks.map(task => {
          return (
            <TaskItem
              key={task.content}
              content={task.content}
              completed={task.completed}
              handleChangeTaskCompletedStatus={handleChangeTaskCompletedStatus}
              handleDeleteTask={handleDeleteTask}
            />
          );
        })
      }
    </section>
  )
};
