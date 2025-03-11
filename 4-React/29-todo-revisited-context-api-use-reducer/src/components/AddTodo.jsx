import { useContext, useRef } from "react";
import Button from "./Button";
import TodoItemsContext from "../store/TodoItemsContext";

const AddTodo = () => {

  const {addTodoItem} = useContext(TodoItemsContext);
  // useContext(todoItemsContext) returns {todoItems: todoItems, addTodoItems: f(todoText, todoDate){...}, deleteTodoItems: f(todoId){...}}
  // console.log(addTodoItem);

  const todoTextInput = useRef();
  const todoDateInput = useRef();

  const addHandler = () => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value
    addTodoItem(todoText, todoDate);

    todoDateInput.current.value = "";
    todoTextInput.current.value = "";
  }

  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here"
            ref={todoTextInput}
          />
        </div>

        <div className="col-3">
          <input type="date" className="form-control" ref={todoDateInput} />
        </div>

        <div className="col-2">
            <Button btnType={'success'} btnText={'Add'} handler={addHandler}/>
          {/* <button type="button" className="btn btn-success">Add</button> */}
        </div>
      </div>
    </div>
  );
  {/* picked this responsive grid layout from bootstrap, sum of all col-span must be exactly 10 */}
};

export default AddTodo;
