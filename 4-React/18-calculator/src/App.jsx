import React, {useState} from "react";
import Display from "./components/Display";
import NumberPad from "./components/NumberPad";

function App() {

  let [displayVal, setDisplayVal] = useState('');

  return (
    <div className="calc-body">
      <Display textToShow={displayVal} />
      <NumberPad displayVal={displayVal} setDisplayVal={setDisplayVal} />
    </div>
    
  );
}

export default App;
