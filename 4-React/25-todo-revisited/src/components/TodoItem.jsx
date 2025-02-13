import Button from "./Button";

const TodoItem = ({id, todoText, todoDate, deleteTodoItem}) => {

  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-5 text-truncate d-flex align-items-center">{todoText}</div>

        <div className="col-3 d-flex align-items-center">{todoDate}</div>

        <div className="col-2">
            <Button btnType={'danger'} btnText={'Delete'} handler={() => deleteTodoItem(id)}/>
        </div>
      </div>
    </div>
  );
};
// text-start text-truncate d-flex align-items-center
export default TodoItem;
