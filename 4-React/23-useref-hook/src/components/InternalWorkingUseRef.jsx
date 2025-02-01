import { useRef } from "react";

function InternalWorkingUseRef() {
  const firstName = useRef(null); // creates a ref object with a single property `current` with an initial value of null and returns the reference to this object which eventually gets stored in `firstName`.

  // firstName -> {current: null}   // `firstName` starts referring to the object

  console.log(firstName);
  console.log(firstName.current);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (event) => {
    firstName.current = event.target;

    // uncomment only one `console.log` at a time and examine the output in browser's console tab
        // console.log(firstName);
        console.log(firstName.current);
        // console.log(firstName.current.value);
  };

  return (
    <>
      <div>
        <form action="/submit-data" method="GET" onSubmit={handleSubmit}>

          {/* this is how we can implement`<input type="text" ref={firstName} placeholder="First Name" name="firstName"/>` on our own */}
          <input
            type="text"
            onChange={handleOnChange}
            placeholder="First Name"
            name="firstName"
          />

          <br />

          <input type="text" placeholder="Last Name" name="lastName" />

          <br />

          <label htmlFor="dob">DOB</label>
          <input type="date" id="dob" name="dob" />

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default InternalWorkingUseRef;
