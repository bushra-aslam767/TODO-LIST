import TodoItem from "./TodoItem";

function TodoItems({ items, onDeleteTodo }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item, index) => (
        <TodoItem
          key={index}
          name={item.name}
          date={item.date}
          onDelete={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoItems;
