import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import initialTodoItems from "./data/initialTodoItems";


function App() {

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  // `initialTodoItems` is an array of objects. 
  console.log(todoItems);

  const addTodoItem = (todoText, todoDate) => {
    setTodoItems(currentItems => {
      // return [...currentItems, {id: 4, todoText: todoText, todoDate: todoDate}]
      // is same as (shorthand of above line)
      return [...currentItems, {id: todoText, todoText, todoDate}];
    })
  } 

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
