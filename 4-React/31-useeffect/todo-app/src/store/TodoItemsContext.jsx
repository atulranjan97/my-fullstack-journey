import { createContext, useReducer } from "react";

const TodoItemsContext = createContext();

const todoItemsReducer = (currentItems, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const todoText = action.payload.todoText; 
      const todoDate = action.payload.todoDate; 
      return [...currentItems, { id: todoText, todoText, todoDate }]
    }

    case 'DELETE_ITEM':
      return currentItems.filter((item) => item.id !== action.payload.todoId);

    case 'LOAD_ALL_ITEMS':
      return action.payload.allItems;
      // jab bhi koi ek baar me bahut saare items dega toh saare existing items ko replace kar denge `allItems` se

    default:
      break;
  }

  return currentItems;
}

export const TodoItemsProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoItemsReducer, []);     // `initialTodoItems` is an array of objects.
  console.log('from TodoItemsContext.jsx, todoItems:', todoItems);


  const addTodoItem = (todoText, todoDate) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { todoText, todoDate }
    });  
  };
  // `currentItems` ko `todoItems`(a state varible) ki latest value mil jayegi. Yaha `updating value based on current value` wala concept use ho raha hai.
  // React automatically provides the latest state value of `todoItems` as an argument to this function.

  const deleteTodoItem = (todoId) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: { todoId }
    })
  };

  const addAllTodoItems = (todoItems) => {
    dispatch({
      type: 'LOAD_ALL_ITEMS',
      payload: { allItems: todoItems }
    })
  };



  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addTodoItem, deleteTodoItem, addAllTodoItems }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContext;

// context api use karne ka ek bada advantage ye bhi hai ki jo logic hai vo ek jagah ekdm seperate ho jata hai, eg, data ko fetch karne ka, data ko maintain karne ka, data ko save karne ka, add karne ka, delete karne ka, kisi component par dependent nahi rehta , vo sara ka sara logic ek alag file me aa jata hai jo humara is file me aa gaya hai todo se related `todoItemsContext` ke ander.

// store ki implementation ko completely switch/change karenge from useState to useReducer par.