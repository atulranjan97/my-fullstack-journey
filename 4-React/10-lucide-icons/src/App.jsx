import './App.css'
import {Camera, Icon, Trash2} from 'lucide-react'
import {appleCore, crosshairPlusDot} from '@lucide/lab'

function App() {

  return (
    <>
      <Camera color='purple' size={100} strokeWidth={1} />
      <br />
      <Trash2 color='red' size={100} strokeWidth={1} />
      <br />
      <Icon iconNode={crosshairPlusDot} size={100} strokeWidth={1} />
      <br />
      <Icon iconNode={appleCore} size={100} strokeWidth={1} />
    </>
  )
}

export default App
