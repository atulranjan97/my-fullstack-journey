import './Display.css'

const Display = ({textToShow}) => {

  return (
    <div className='calc-display'>
      {textToShow ? textToShow : '0'}
    </div> 
  )
}

export default Display