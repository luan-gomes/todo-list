import styles from './TaskItem.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';
import { Task } from '../App';

interface TaskItemProps extends Task {
  handleChangeTaskCompletedStatus: (content: string) => void,
  handleDeleteTask: (content: string) => void,
};

export const TaskItem = ({
  content,
  completed,
  handleChangeTaskCompletedStatus,
  handleDeleteTask
}: TaskItemProps) => {
  const handleCompletedButtonClick = () => {
    handleChangeTaskCompletedStatus(content);
  };

  const handleDeleteButtonClick = () => {
    handleDeleteTask(content);
  };

  return (
    <div className={
      completed ? `${styles.task} ${styles.completed}` : styles.task
    }>
      <button
        onClick={handleCompletedButtonClick}
        className={completed ? styles.taskCheckboxChecked : styles.taskCheckbox}
      >
        {
          completed ? <CheckCircle size={18} weight="fill" /> : <Circle size={18} />
        }
      </button>
      <p>{content}</p>
      <button className={styles.removeTask} onClick={handleDeleteButtonClick}>
        <Trash size={18} />
      </button>
    </div>
  );
};
