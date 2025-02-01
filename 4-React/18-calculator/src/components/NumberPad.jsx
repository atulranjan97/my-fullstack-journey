import React from 'react'
import Button from './Button'
import './NumberPad.css'

const NumberPad = ({displayVal ,setDisplayVal}) => {

    const btnTextArr = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '.', '0'];
    // console.log(`displayVal: ${displayVal} , typeof displayVal: ${typeof displayVal}`);

    const addToDisplay = (btnText) => {
      // console.log(`displayVal = ${displayVal}, typeof displayVal= ${typeof displayVal}`);
      // console.log(ev)
      // console.log('ev.target.innerText:',ev.target.innerText)
      // console.log('typeof ev.target.innerText :',typeof ev.target.innerText)

      // const btnInput =  ev.target.innerText;
      // if(btnInput === 'C') {
      //   setDisplayVal('0');
      // } else if(displayVal !== '0') {
      //   setDisplayVal(displayVal + btnInput);
      // } else {    // if displayVal is 0
      //     if(btnInput === '+' || btnInput === '-' || btnInput === '*' || btnInput === '/' || btnInput === '.') {
      //       setDisplayVal(`0${btnInput}`)
      //     } else {
      //       setDisplayVal(btnInput)
      //     }
      // }

      // if(btnInput === '=') {
      //   setDisplayVal(`=${eval(displayVal)}`);
      // }

      // console.log(`btnText: ${btnText}, typeof btnText: ${typeof btnText}`);

      if (btnText === 'C') {
        setDisplayVal('');
      } else if (btnText === '=') {
        setDisplayVal(`${eval(displayVal)}`)
        // setDisplayVal(`${displayVal}
        //   =${eval(displayVal)}`);
      } else if(displayVal === '' && btnText === '+' || btnText === '-' || btnText === '*' || btnText === '/' || btnText === '.') {
          if (displayVal === '') {
            setDisplayVal(`0${btnText}`);
          } else {
            setDisplayVal(displayVal + btnText)
          }
      } else {
        setDisplayVal(displayVal + btnText)
      }


      // if (btnText === 'C') {
      //   setDisplayVal('');
      // } else if (btnText === '=') {
      //   setDisplayVal(`=${eval(displayVal)}`)
      // } else {
      //   setDisplayVal(displayVal + btnText)
      // }

    }



  return (
    <div className='btn-container'>
      {btnTextArr.map(btnText => <Button key={btnText} btnText={btnText} onClickHandler={() => addToDisplay(btnText)} />)}
      {/* {buttons.map(btnText => <Button btnText={btnText} onClickHandler={addToDisplay} />)} */}
    </div>
  )
}

export default NumberPad