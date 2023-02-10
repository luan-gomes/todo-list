import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './CreateTask.module.css';

interface CreateTaskProps {
  handleAddNewTask: (content: string) => void,
}

export const CreateTask = ({ handleAddNewTask }: CreateTaskProps) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleFormSubmit = (event: FormEvent) => {
    event?.preventDefault();
    handleAddNewTask(newTaskText);
    setNewTaskText('');
  };

  const handleNewTaskTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  };

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Este campo é obrigatório');
  };

  const isNewTaskTextEmpty = newTaskText.length === 0;

  return (
    <section className={styles.createTask}>
      <form className={styles.addTaskForm} onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={newTaskText}
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewTaskTextChange}
          onInvalid={handleNewTaskInvalid}
        />
        <button type="submit" disabled={isNewTaskTextEmpty}>
          Criar
          <PlusCircle size={16}/>
        </button>
      </form>
    </section>
  )
};
