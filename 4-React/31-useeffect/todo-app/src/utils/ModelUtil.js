export const todoItemToClientModel = (serverItem) => {
    return {
        id: serverItem.id,
        todoText: serverItem.text,
        todoDate: serverItem.date
    }
}