import { useContext } from "react";
import TodoItemsContext from "../store/TodoItemsContext";
import Button from "./Button";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext); // `todoItems` is an array of objects

  // If `todoItems` is not empty
  if (todoItems.length !== 0) { return <></>; } // agar `todoItems` empty nahi hai toh is condition ke true hone par blank fragments return kar diya, it's like saying kuch render mat karna

  // If `todoItems` is empty
  const loadItemsHandler = () => {
    /*
      This handler function is called when the "Load Todos" button is clicked.
      It performs the following steps:
      1. Makes a GET request to fetch todo items from our dummy backend API
      2. Converts the response to JSON format
      3. Transforms the received data to match our app's data structure
      4. Updates the global todo items state using context
    */

    // Make GET request to our dummy backend API running on port 5000
    fetch("http://localhost:5000/todos")
      .then((res) => res.json()) // Parse JSON response
      .then((items) => {
        // Transform the received data structure to match our app's structure
        const newItems = items.map((item) => ({
          // For each item from API, create a new object with our expected properties
          id: item.id,          // Keep the same ID
          todoText: item.task,  // API uses 'task', we use 'todoText' 
          todoDate: item.date   // API uses 'date', we use 'todoDate'
        })); 
        // Note: Wrapped object in () to avoid confusion with function body blocks
        
        // Update global todo items state using context
        addAllTodoItems(newItems);
      });
  };

  return (
    <>
      <h2>Enjoy your day</h2> {/* render this only if `todoItems` is empty */}
      <Button btnText={"Load Todos"} handler={loadItemsHandler}>Load Todos</Button>
    </>
  );
};

export default LoadItems;
