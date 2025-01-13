import TodoItem from "./TodoItem";

const TodoItems = () => {
  const todoItems = [
    { id: 1, todoText: "Buy Milk", todoDate: "4-Jan-2025" },
    { id: 2, todoText: "Go to College", todoDate: "Weekday" },
    { id: 3, todoText: "Workout", todoDate: "Everyday" },
    { id: 4, todoText: "Review the project documentation, summarize findings, and prepare recommendations for the team meeting", todoDate: "Everyday" }
  ];

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} />
      ))}
    </>
  );
};

export default TodoItems;
