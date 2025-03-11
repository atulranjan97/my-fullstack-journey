import { useContext } from "react";
import TodoItemsContext from "../store/TodoItemsContext";
import Button from "./Button";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext); // `todoItems` is an array of objects

  // If `todoItems` is not empty
  if (todoItems.length !== 0) { return <></>; } // agar `todoItems` empty nahi hai toh is condition ke true hone par blank fragments return kar diya, it's like saying kuch render mat karna

  // If `todoItems` is empty
  const loadItemsHandler = () => {
    // console.log('Load Items');

    // fetch todo items from dummy api
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((items) => {
        const newItems = items.map((item) => ({
          id: item.id,
          todoText: item.task,
          todoDate: item.date,
        })); // had to wrap the object inside () to avoid errors
        // console.log(newItems);
        addAllTodoItems(newItems);
      });
  };

  return (
    <>
      <h2>Enjoy your day</h2> {/* render this only if `todoItems` is empty */}
      <Button btnText={"Load Todos"} handler={loadItemsHandler}></Button>
    </>
  );
};

export default LoadItems;
