function TodoItems({ items, onDelete }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.name} - {item.date}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;
