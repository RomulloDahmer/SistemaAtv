import PropTypes from 'prop-types';

const Todo = ({ todo, completeTodo, removeTodo }) => {
  const handleCompleteTodo = () => {
    completeTodo(todo.id);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        {todo.description && <p className="description">{todo.description}</p>}
      </div>
      <div>
        <button className="complete" onClick={handleCompleteTodo}>
          Completar
        </button>
        <button className="remove" onClick={handleRemoveTodo}>
          Excluir
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default Todo;
