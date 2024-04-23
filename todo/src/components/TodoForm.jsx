import PropTypes from "prop-types";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTodo(title, description);
    setTitle("");
    setDescription("");
    updateLocalStorage(title, description);
  };

  const updateLocalStorage = (title, description) => {
    const storedTodos = localStorage.getItem("todos");
    const todos = storedTodos ? JSON.parse(storedTodos) : [];
    const newTodos = [
      ...todos,
      { id: Math.floor(Math.random() * 1000), title, description, isCompleted: false }
    ];
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          className="input"
          value={title}
          placeholder="Digite o título"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="input"
          value={description}
          placeholder="Digite a descrição do projeto"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
