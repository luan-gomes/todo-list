import styles from './NoTasks.module.css';
import Clipboard from '../assets/clipboard.svg';

export const NoTasks = () => {
  return (
    <div className={styles.noTasks}>
      <img src={Clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
