const FighterList = (props) => {
  return <ol>
    {
        props.fighters.map(fighter => <li>{fighter}</li>)
        
    }
  </ol>
}


export default FighterList