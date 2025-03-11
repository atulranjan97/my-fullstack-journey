import React from 'react'
import UseRefHook from './components/UseRefHook'
import ElementObject from './components/ElementObject'
import InternalWorkingUseRef from './components/InternalWorkingUseRef'
import StateVsRef from './components/StateVsRef'

const App = () => {
  return (
    <>
      {/* Uncomment only one component at a time because each one contains a topic in itself */}
        {/* <ElementObject /> */}
        {/* <UseRefHook /> */}
        <InternalWorkingUseRef />
        {/* <StateVsRef /> */}
    </>
  )
}

export default App