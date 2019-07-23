export const addTodo = (text, todoId) => ({
  type: "ADD_TODO",
  id: todoId,
  text
});
export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "COMPLETED",
  SHOW_ACTIVE: "ACTIVE"
};
export const deleteAllTodos = () => ({
  type: "DELETE_ALL"
});
export const deleteCompletedTodos = () => ({
  type: "DELETE_COMPLETED"
});
