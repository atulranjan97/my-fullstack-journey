import { createContext, useState } from "react";
import initialTodoItems from "./initialTodoItems";

const TodoItemsContext = createContext();

export const TodoItemsProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState(initialTodoItems); // `initialTodoItems` is an array of objects.
  console.log(todoItems);

  const addTodoItem = (todoText, todoDate) => {
    setTodoItems((currentItems) => {
      return [...currentItems, { id: todoText, todoText, todoDate }];
      // is shorthand of
      // return [...currentItems, {id: 3, todoText: todoText, todoDate: todoDate}]
    });
  };
  // `currentItems` ko `todoItems`(a state varible) ki latest value mil jayegi. Yaha `updatind value based on current value` wala concept use ho raha hai.
  // React automatically provides the latest state value of `todoItems` as an argument to this function.

  const deleteTodoItem = (todoId) => {
    setTodoItems((currentItems) => {
      return currentItems.filter((item) => item.id !== todoId);
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addTodoItem, deleteTodoItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContext;

// context api use karne ka ek bada advantage ye bhi hai ki jo logic hai vo ek jagah ekdm seperate ho jata hai, eg, data ko fetch karne ka, data ko maintain karne ka, data ko save karne ka, add karne ka, delete karne ka, kisi component par dependent nahi rehta , vo sara ka sara logic ek alag file me aa jata hai jo humara is file me aa gaya hai todo se related `todoItemsContext` ke ander.
