import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';

import { useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleCompleted } from 'redux/operations';

export const TaskForm = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        cheked={task.completed}
        onChange={handleToggle}
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit" onClick={handleDelete}>
        Add task
      </Button>
    </form>
  );
};
