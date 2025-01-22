const List = ({list}) => {

  return (
    <>
        {list}

        <h2 className="mt-10 text-xl">Hardcoded</h2>
        <ol className="list-decimal ml-10 text-xl">
            {[<li>Paul</li>, <li>Jin</li>, <li>Hwoarang</li>, <li>Kazuya</li>, <li>Law</li>]}
        </ol>


        <h2 className="mt-10 text-xl">Using map method</h2>
        <ol className="list-decimal ml-10 text-xl">
            {list.map(item => <li>{item}</li>)}
        </ol>
        {/* fighter ke list ko UI element ke list me convert kar diya, aur array object yahi banakar chhod diya, aur kyunki array object yahi banakar chhod diya hai ye jsx apne aap is array ko element by element render karwata hai */}

    </>
  );
};

export default List;
