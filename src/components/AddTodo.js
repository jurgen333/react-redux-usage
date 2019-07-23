import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTodo, deleteAllTodos, deleteCompletedTodos } from "../actions";
const AddTodo = ({ dispatch, todos }) => {
  const [todoId, setTodoId] = useState(0);
  useEffect(() => {
    const handleLoading = todos => {
      if (todos.length > 0) {
        const max = todos.reduce((prev, current) =>
          prev.id > current.id ? prev : current
        );
        console.log(max);
        setTodoId(max.id + 1);
      }
    };
    handleLoading(todos);
  }, [todos]);

  const handleDeleteAll = e => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "deleteAll":
        return dispatch(deleteAllTodos());
      case "deleteCompleted":
        return dispatch(deleteCompletedTodos());
      default:
        break;
    }
  };
  let input;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value, todoId));
        setTodoId(todoId + 1);
        input.value = "";
      }}
    >
      <input ref={el => (input = el)} type="text" name="text" />
      <button type="submit">ADD</button>
      <button name="deleteAll" onClick={handleDeleteAll}>
        Delete All
      </button>
      <button name="deleteCompleted" onClick={handleDeleteAll}>
        Delete Completed
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(mapStateToProps)(AddTodo);
