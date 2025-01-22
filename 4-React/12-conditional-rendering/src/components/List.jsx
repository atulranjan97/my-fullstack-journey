// Conditional renderning: Displaying the content based on certain conditions.
// we can either use if-else, ternary-operators or logical operators to perform conditional rendering, any way we want.

const List = ({list}) => {

  // if (!list || list.length) {
  //   return <h2>No Fighters are here</h2> 
  // }
  // If-else statement: Choose between two blocks of component

  return (
    <>
      {!list || list.length === 0 ? <h2>No Fighters are here</h2> : <h2>Here are the fighters</h2>}
      {/* Ternary operators: Quick way to choose between two options */}

      {/* Logical operators can be used to render content when a condition is true */}
      {list && list.length > 0 && <ol className="list-decimal ml-10 text-xl">
        {list.map(item => <li>{item}</li>)}
      </ol>}
      {/* here, first two condition must be true for the list to be rendered */}


      {/* if this component received no list/empty list/something else apart from the list, eg: a number, string, object etc from parent component
          then in such case we can implement condition like this and stop this component to render the list, this is called `Conditional Rendering` */}
    </>
  );
};

export default List;

