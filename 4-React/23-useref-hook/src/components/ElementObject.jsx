import React from 'react';

const ElementObject = () => {
  // define the input element as a variable outside the JSX
  const inpObj = <input type="text" placeholder="Name" />;
  console.log('inpObj:', inpObj);
//   console.log(<input type="text" placeholder="Name" />)

  return (
    <div>
      {/* Render the variable inside the JSX */}
      {inpObj}
    </div>
  );
};

export default ElementObject;