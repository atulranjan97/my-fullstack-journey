import { useState } from "react";
import List from "./components/list"

// Remove `<StrictMode> </StrictMode>` from `main.jsx` 

function App() {
  console.log("Rendering `App` Component");

  /*  
    First, import useState from React:
      import { useState } from 'react';
  */
  const fighterArrState = useState(["Paul", "Jin", "Hwoarang", "Kazuya", "Law"]);
  // useState() is a react inbuilt method, which return an array of exactly two elements, first element stores the current state while second element contains the function that lets us update it. Humne is returned array ko `fighterArrState` me store kar liya.
  // You’ll get two things from `useState`: the current state (["Paul", "Jin", "Hwoarang", "Kazuya", "Law"]), and the function that lets you update it (setFighterArr). You can give them any names, but the convention is to write [something, setSomething].

  const fighterArr = fighterArrState[0];
  // we stored the current state in `fighterArr`
  
  const setFighterArr = fighterArrState[1];
  // We stored the function that let us update current state in `setFighterArr`
  // `fighterArrState[1]` will return a function which gets stored in `setFighterArr`
  // `fighterArr` ki value hume jab bhi change karni hai toh is `setFighterArr` method ko hume call kar dena hai.
  
  /* Shorthand:
        const fighterArrState = useState(["Paul", "Jin", "Hwoarang", "Kazuya", "Law"]);
        const fighterArr = fighterArrState[0];
        const setFighterArr = fighterArrState[1];

        <--is same as-->

        const [fighterArr, setFighterArr] = useState(["Paul", "Jin", "Hwoarang", "Kazuya", "Law"])
  */

 console.log("State value is:", fighterArr)
 console.log("SetFighterArr:", setFighterArr)
  
  const onChangeHandler = (event) => {
    if (event.key === "Enter") {
      console.log(fighterArr);
      console.log(event.target.value);

      // fighterArr.push(event.target.value); 
      // ideally humein directly `fighterArr` ko change na karke `setFighterArr` function ke through change karna hai as this method will trigger component to re-render jo ki directly `fighterArr` ko change karke nahi hoga

      const newArr = [...fighterArr, event.target.value];
      event.target.value = ''; // this will make input element empty again
      setFighterArr(newArr);  // jab is method ke through update karenge toh react poore webpage me ye variable jaha-jaha display ho raha hai, vaha-vaha se update kar dega
      console.log("newArr",newArr);
    }
  }
  
  return (
    <>
      <List list={fighterArr} />

      <input type="text" placeholder="New Student Name" onKeyDown={onChangeHandler} />
      {/* Notice how onKeyDown={onChangeHandler} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button. */}
      {/* The `onKeyDown` event in React triggers when a key is pressed down on the keyboard. It’s used to detect and handle key presses before the key is released. */}
    </>
  )
}

export default App

// jab bhi hum function component(with function keyword) banate hai , voh completely stateless hota hai, stateless means yeh apne data ke current state ko save karke nahi rakh sakta, ye baar-baar call hoga jab bhi render karna hai , aur jitni baar bhi hum isko render karne ki koshish karenge, iska jitna bhi data define kiya hai ye sara ka sara data re-define ho raha hoga


// jab bhi is component ko use karenge to iska excution start ho jayega jiski vajah se iske ander ke data(variable, array etc..) re-define hoga, toh agar humara ye functional component apne changed data ke state ko save karke rakhna chahta hai, suppose vo chahta hai ki uske ander ke array me agar kisi ne koi item add bhi kar diya toh ab agar is component ko koi dubara bhi call karke iska UI render kare toh ab us array ki updated value bhi render honi chahiye UI me jo ki nahi hogi because jab component ko again call karenge is change ko bhi render karane ke liye toh is component ka array dubara se define hoga and jo changes kiya tha humne ek element add karke vo change reset ho jayega. aisa isliye hua kyunki react ne component me hue change ke state ko kahi preserve karke nahi rakha.

// This problem arises because functional component can't manage state

// function apne local variable ko save nahi kar sakta, humko kuch external chiz chahiye yani function ko global variable ki tarah kuch bahar nikal kar rakhna padega, function ye bole ki bhai mai isko bahar nikal kar rakh deta hu aur agli baar bhi mai jab render hounga tab mai aakar isi value ko check kar lunga,


// State changes cause the component to re-render

// `App` component, `main` component me use hua hai, `App` is a function component and function component is nothing but a normal JS function, toh hum is function ko call kar rahein hai <main /> se aur ye function baad me jo bhi jsx return karega usko render kar rahein hai,   
// Ab hum ne is function ko call kar liye jisme list of 6 elements define hua hai, ab suppose humne ander-ander is array ki value change kar diya, lekin ab react ko ye kaun batayega ki is poore UI ko re-render karna hai is change ke baad, ye react ko batane wala koi nahi hai,

// Challenges:
// 1. component array poora execute hone ke baad iske ander ka list change ho gaya, ab is component ko dubara execute karna hai and isko dubara UI par lana hai
// 2. agar react ko changes ke baare me bata bhi diya hota toh bhi changes render nahi hota kyunki jaise hi component dubara render hone ke liye call hota toh iske ander ka array dubara define hota jiski vajah se saare changes anyway chale jate
// in changes ko preserve karne ka koi tareeka dhundna padega aur yahi humara state management hai