import { nanoid } from "nanoid";
import "./App.css";
import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const saveToLocalStarage = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleTodoCheckboxClick = (id) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      saveToLocalStarage(newTodos);
      return newTodos;
    });
  };

  const handleTodoDeleteClick = (id) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => todo.id !== id);
      saveToLocalStarage(newTodos);
      return newTodos;
    });
  };

  const handleTodoSubmit = (title) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.push({
        id: `${nanoid()}`,
        title: title,
        completed: false,
      });
      saveToLocalStarage(newTodos);
      return newTodos;
    });
  };

  const todoList = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        onCheckboxClick={handleTodoCheckboxClick}
        onDeleteClick={handleTodoDeleteClick}
      />
    );
  });

  return (
    <div className="container">
      <h1>TodoList</h1>
      <ul className="todoList">{todoList}</ul>
      <AddForm onSubmit={handleTodoSubmit} />
    </div>
  );
}

export default App;
