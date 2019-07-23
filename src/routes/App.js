import React from "react";

import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer";
import VisibleTodos from "../components/VisibleTodos";
function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <VisibleTodos />
      <Footer />
    </div>
  );
}

export default App;
