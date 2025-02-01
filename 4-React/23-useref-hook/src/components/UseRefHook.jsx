import { useRef } from "react";

function UseRefHook() {
  // `useRef()` is a hook in React that allows you to create a mutable object that persists across renders. It is commonly used to access and interact with DOM elements directly, but it can also be used to store any mutable value that doesn't trigger a re-render when it changes.
  const firstName = useRef(null); // creates a ref object with a single property `current` with an initial value of null and returns the reference to this object which eventually gets stored in `firstName`.

  // firstName -> {current: null}   // `firstName` starts referring to the object

  console.log(firstName);
  console.log(firstName.current);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <form action="/submit-data" method="GET" onSubmit={handleSubmit}>

          {/* Attaching the Ref to a DOM Element: */}
          <input type="text" ref={firstName} placeholder="First Name" name="firstName" />
          {/* The `ref` attribute on this <input> element is set to `firstName`. This associates the `firstName` with this actual DOM element. */}
          {/* means property `current` now contains reference to this input element, firstName -> {current: input} */}

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

export default UseRefHook;
