import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} onClick={() => toggleTodo(todo.id)} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
