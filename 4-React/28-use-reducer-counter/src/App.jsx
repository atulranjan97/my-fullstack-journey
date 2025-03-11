import { useReducer, useRef } from "react"

// Note: we have also removed strict mode in `main.jsx` for better understanding (which is not recommended)

const counterReducer = (currentState, action) => {
  // console.log('Inside Reducer function,', 'currentState:',currentState, ',action:',action);

  let newState = currentState;

  switch (action.type) {
    case 'INCREMENT':
      newState += 1; 
      break;
  
    case 'DECREMENT':
      newState -= 1; 
      break;

    case 'RESET':
      newState = 0;
      break;

    case 'CHANGEBY':
      // console.log(typeof action.payload.num);                   // Output: string
      newState = newState + parseInt(action.payload.num);  
      break;
      
    default:
      break;
  }

  return newState;
}
// Function(which we pass as an argument in useReducer) takes two arguments ie. `state` and `action`, on basis of these it calculates and tell what should be the new state
// this function is supposed to return new state 
// `action` me generally hum ek `type` naam ki property dalte hai(which is not compusory but is a standard)

// Responsibility of this reducer funcion(counterReducer): isko hum jab bhi `current state` denge aur ek `action` denge, isko in dono ko combine karke ek naya state return karna hai 
// here we are saying ki agar 'INCREMENT' action hua hai toh naya state `currentState + 1` ho jana chahiye 
// agar 'DECREMENT' action hua hai toh naya state `currentState - 1` ho jana chahiye 
// aur agar in do ke alawa kuch bhi action hua hai, to meri nayi state vahi rehni chahiye jo abhi meri current state hai.



function App() {
  // const [state, dispatch] = useReducer(reducerFunction, initialState);
    // `useReducer` returns an array of exactly two elements and we have destructured both elements by the name of `state` and `dispatch`
    // It can take two arguments, a `reducerFunction` and an `initialState`.
    // Reducer function: A function that takes the `current state` and an `action`, then returns the `new state`.
    // dispatch: A function used to send an action (like { type: "increment" }) to the reducer.
    // Action: An object that tells the reducer what to do (e.g., increase or decrease count).

  // Declare useState 
  // const [counterVal, setCounterVal] = useState(0);

  // Declare useReducer
  const [counterVal, counterDispatch] = useReducer(counterReducer, 0);
  // `useReducer` ko humne do argument diye, `counterReducer` naam ek reducer function and ek initial state 0.
  // jiske baad `useReducer` ne hume do chize return ki, `state variable` and a `dispatch function`. 
  // `dispatch` function ke ander hum koi bhi ek action object bana kar pass kar sakte hai.
  // is action ko handle bhi hum hi karenge apne reducer function me 

  // humne `counterReducer` naam ka ek reducer function `useReducer` ko pass kar diya, ab jab bhi koi action dispatch hoga toh `useReducer` humare function ko access kar lega ye determine karne ke liye `useReducer` ko nayi value kya return karni hai
  // Whatever value the reducer function returns becomes the new state.

  const changeByInput = useRef();

  const handleIncrement = () => {
    // setCounterVal(current => current + 1);

    counterDispatch({
      type: "INCREMENT"   // generally type(a property) ki value CAPS me di jati hai
    });
    // yaha hum bol rahein hai `counterDispatch` ek action dispatch kardo jo increment type ka hona chahiye
  }

  const handleDecrement = () => {
    // setCounterVal(current => current - 1);

    counterDispatch({
      type: "DECREMENT"   // generally type ki value CAPS me di jati hai
    });
    // yaha hum bol rahein hai `counterDispatch` ek action dispatch kardo jo decrement type ka hona chahiye
  }
  // we write these `handleIncrement` and `handleDecrement` function inside `App` function because it depends on `counterDispatch` function of `useReducer` hook.
  // aise function jo kisi par depend nahi karte unhe humesha `App` function ke bahar likhna hai kyunki vo component ke baar baar render hone par render nahi honge. 

  const handleChangeBy = () => {
    counterDispatch({
      type: "CHANGEBY",
      payload: {
        num: changeByInput.current.value
      }   
    });

    changeByInput.current.value = '';
  }
  // standard convention hai ki `type` ke alawa jitna bhi data humko add karna hai vo sab data hum `payload` me add kar rahien ho and payload ke through access karein taki clarity rahe ki `action` ke ander humesha do chize hoti hai where `type` is compulsory while `payload` is optional
  // kisi action se hone wale operation me jo-jo data required hai usko hum payload ke through pass karte hai ek object banakar.
  // reducer function ko kisi action ke regarding operation perform karne ke liye jo-jo data ki requirement hai unko hum payload through pass karte hai ek object bana kar.

  return (
    <>
      <h1>Counter: {counterVal}</h1>    {/* this `counterVal` is a state declared with the help of `useReducer` hook */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={ () => counterDispatch({type: "RESET"}) }>Reset</button>
      
      <br />
      <button onClick={handleChangeBy}>Change By</button>
      <input type="text" ref={changeByInput} placeholder="Number" />
    </>
  )
}

export default App