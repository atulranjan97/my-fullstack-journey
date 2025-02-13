import React from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from './StateVsRef.module.css'

const StateVsRef = () => {
  console.log("Component re-rendered");

  const [stateClick, setStateClick] = useState(0);
  const refClick = useRef(0); // refVariable -> {current: 0}

  return (
    <div>
      <h1 className={styles.heading}>
        State Clicked: {stateClick}, Ref Clicked: {refClick.current}
      </h1>

      <button
        className={styles.btn}
        onClick={() => {
          console.log("State Clicked:", stateClick);
          setStateClick(stateClick + 1);
        }}
      >
        State
      </button>

      <button
        className={styles.btn}
        onClick={() => {
          console.log("Ref Clicked:", refClick.current);
          refClick.current++;
        }}
      >
        Ref
      </button>

      <p>
        <span>State</span>: The updated value of `stateClick` is displayed
        immediately after the `State button` is clicked because the component
        re-renders. You'll see `Component re-rendered` logged in the console
        every time the state button is clicked.
        <br />
        <br />
        <span>Ref</span>: The updated value of `refClick` is not
        displayed immediately after the `Ref button` is clicked because the
        component does not re-render. To see the updated ref value, you need to
        trigger a re-render (e.g., by clicking the state button). You won't see
        `Component re-rendered` logged in the console when the ref button is
        clicked.
      </p>
    </div>
  );
};

export default StateVsRef;

/*  Yeh zaroori nahi ki `useRef hook` ka use hum sirf kisi DOM element ka reference store karne ke liye hi karein. `useRef` ka use hum kisi aise data ko store karne ke liye bhi kar sakte hai jiski value hum chahte hai ki across renders persist kare.
    Infact `useRef` ka main purpose hi yahi hai ki agar hum kisi value ko persist karna chahte hai across renders toh hum us value ko `useRef` me store kar sakte hai and vo value vahan preserved rahegi. Its not limited for storing references of DOM elements only.
    
    On the other hand, useState bhi yahi kaam karta hai, only difference is ki state ki hum jab bhi value change karenge then state har baar component ko re-render bhi kar raha hoga.


    -> State:
        - Used for values that, when changed, should trigger a re-render.
        - Example: Form inputs, counters, toggles.

    -> Ref:
        - Used for values that should persist across renders but do not need to trigger a re-render.
        - Example: Storing DOM references, keeping track of previous values, or managing timers.
*/
