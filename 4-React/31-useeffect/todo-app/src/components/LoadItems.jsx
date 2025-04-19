import { useContext, useEffect } from "react";
import TodoItemsContext from "../store/TodoItemsContext";
import { useState } from "react";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext); // `todoItems` is an array of objects
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

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
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])
  // useEffect tab use krna hai jab koi bhi chiz humko kuch limited number of time execute karni ho and jab humko component ke har paint pr execute nahi krni ho.
  // useEffect second argument
    // 1. []: Empty array means the effect runs once.
    // 2. when pass nothing: Run at initial render then run after every render.
    // 3. [data]: Run at initial render then run after every re-render if data has changed since last render.

  // If `todoItems` is empty

  // boostrap spinner component
  const spinner = (
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
  

  return (
    <>
      {/* {isLoading && <p>Loading...</p>} */}
      {isLoading && spinner}
      {!isLoading && todoItems.length === 0 && <p>Nothing to do</p>}
    </>
  );
};

export default LoadItems;
