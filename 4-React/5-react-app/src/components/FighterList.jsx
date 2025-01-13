// `props` accessible in the child component as an object (props or destructured).
const FighterList = (props) => {
  return <ol>
    {
        props.fighters.map(fighter => <li>{fighter}</li>)
        
    }
  </ol>
}


export default FighterList;