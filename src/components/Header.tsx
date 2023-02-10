import styles from './Header.module.css';
import TodoLogo from '../assets/todo-logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt='Todo list logo' />
    </header>
  );
};
