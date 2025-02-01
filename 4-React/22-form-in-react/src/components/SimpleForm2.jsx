import React, { useState } from "react";

const SimpleForm2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default behavior(which is `sending form data to the server` and `page reloading`)
    alert(`name: ${name} , email: ${email}`);
  };

  console.log('Component Rendered'); // This will log every time the component re-renders

  return (
    <div>
      <form action="" method="GET" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />

        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm2;

/*
  Why Does the Component Re-render on Every Input Change?
      1. State Update Triggers Re-render:
          - In React, when the state of a component changes (e.g., `name` or `email` in your example), the component re-renders to reflect the new state.
          - In your code, the `onChange` event handler updates the state (`setName` or `setEmail`) every time the user types something in the input field.

      2. How Many Times Does It Re-render?
          - If you type `ATUL` in the name input field, the component will re-render 4 times (once for each character: A, T, U, L).
*/

/*
  Is This a Problem?
  Not necessarily! React is designed to handle frequent re-renders efficiently. Here’s why:

    1. Virtual DOM:
      - React uses a Virtual DOM to optimize re-renders. It compares the previous and new Virtual DOM trees and updates only the parts of the actual DOM that have changed.
      - This makes re-renders very fast, even if they happen frequently.

    2. Performance Impact:
      - For small components like your form, frequent re-renders won’t cause any noticeable performance issues.
      - However, for larger components or deeply nested components, frequent re-renders can become a problem.
*/