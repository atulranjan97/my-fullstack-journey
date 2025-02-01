const List = ({list}) => {

  return (
    <>
        <h2 className="mt-10 text-xl">Using map method</h2>
        <ol className="list-decimal ml-10 text-xl">
            {list.map(item => <li key={item}>{item}</li>)}
        </ol>

    </>
  );
};

export default List;
