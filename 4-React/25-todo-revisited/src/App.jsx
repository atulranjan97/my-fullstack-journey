import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import initialTodoItems from "./data/initialTodoItems";


function App() {

  const [todoItems, setTodoItems] = useState(initialTodoItems);  // `initialTodoItems` is an array of objects. 
  console.log(todoItems);

  const addTodoItem = (todoText, todoDate) => {
    setTodoItems(currentItems => {
      // return [...currentItems, {id: 4, todoText: todoText, todoDate: todoDate}]
          // is same as (shorthand of above line)
      return [...currentItems, {id: todoText, todoText, todoDate}];
    })
  } 
  // `currentItems` ko `todoItems`(a state varible) ki latest value mil jayegi. Yaha `updatind value based on current value` wala concept use ho raha hai.
  // React automatically provides the latest state value of `todoItems` as an argument to this function.
  // Here, `currentItems` represents the latest value of `todoItems` at the time of execution.

  const deleteTodoItem = (todoId) => {
      setTodoItems(currentItems => { 
        return currentItems.filter(item => item.id !== todoId)
      })
  }

  return (
    <>
      <center>
        <AppName />
        <AddTodo addTodoItem={addTodoItem} />
        <TodoItems todoItems={todoItems} deleteTodoItem={deleteTodoItem} />
      </center>
    </>
  );
}

export default App;
