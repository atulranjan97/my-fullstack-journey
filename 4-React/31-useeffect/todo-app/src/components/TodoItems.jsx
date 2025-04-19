import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoItemsContext from "../store/TodoItemsContext";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} />
      ))}
    </>
    /*
      - If `todoItems = []`, `.map()` runs but has no elements to iterate over.
      - It produces an empty output, meaning nothing will be rendered in the UI.
      - No error will occur.

      React Handles It Gracefully
        - The component will still render, but it won’t display any <TodoItem> components.
        - If TodoItems is inside a <div>, the <div> will be empty.
    */
  );
};

export default TodoItems;
