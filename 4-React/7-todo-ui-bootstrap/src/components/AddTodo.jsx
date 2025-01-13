import Button from "./Button";

const AddTodo = () => {

  const addHandler = () => {
    console.log(`Trying to add item`);
  }

  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here"
          ></input>
        </div>

        <div className="col-3">
          <input type="date" className="form-control"></input>
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
