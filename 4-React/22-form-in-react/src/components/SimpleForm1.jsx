import React from "react";

const SimpleForm1 = () => {

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault(); // Prevents default behavior(which is `sending form data to the server` and `page reloading`)
  };

  return (
    <div>
      <form action="/submit-data" method="GET" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        <br />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        
        <br />

        <label htmlFor="dob">DOB</label>
        <input type="date" id="dob" name="dob"/>

        <input type="submit" />
      </form>
    </div>
  );
};

export default SimpleForm1;

/*
    What Happens When the Form is Submitted?
        1. The browser collects the data as JSON object:
            '{"firstName": "Atul", "lastName": "Ranjan", "dob": "02/01/2025"}';

        2. The data is appended to the URL (because method="GET"):
            /submit-data?firstName=Atul&lastName=Ranjan&dob=02/01/2025

        3. The browser navigates to the new URL, causing a page reload.

*/
