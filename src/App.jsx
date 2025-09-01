import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";

function App() {
  // Initial dummy items
  const [todoItems, setTodoItems] = useState([
    { name: "buy milk", date: "2-sep-2025" },
    { name: "buy clothes", date: "5-sep-2025" },
  ]);

  // Add new item
  const handleAddTodo = (newItem) => {
    setTodoItems([...todoItems, newItem]);
  };

  // Delete item
  const handleDeleteTodo = (index) => {
    const newList = todoItems.filter((_, i) => i !== index);
    setTodoItems(newList);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoItems items={todoItems} onDelete={handleDeleteTodo} />
    </center>
  );
}

export default App;
