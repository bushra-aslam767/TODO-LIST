import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) return; // empty na add kare

    onAddTodo({ name, date });
    setName("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;

