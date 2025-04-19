const TodoItemsReducer = (currentItems, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const todoText = action.payload.todoText; 
      const todoDate = action.payload.todoDate; 
      return [...currentItems, { id: todoText, todoText, todoDate }]
      // Returns a new array with the new todo item added
      // This returned value becomes the new state
    }
    case 'DELETE_ITEM':
      // return currentItems.filter((item) => item.id !== todoId);
      return currentItems.filter((item) => item.id !== action.payload.todoId);
      // Returns a new array with the specified item removed
      // This returned value becomes the new state

    default:
      break;
  }

  return currentItems;
  // This is a fallback return that executes when:
  // No case matches the action type, or
  // The `default` case is hit (which has a break statement)
  // It returns the current state unchanged (currentItems)
}

export default TodoItemsReducer;