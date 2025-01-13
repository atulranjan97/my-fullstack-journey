import './App.css'
import Title from './components/Title';
import FighterList from './components/FighterList';
import Button from './components/Button';

function App() {
  const tekkenFighters = ['Jin', 'Paul', 'Hwoarang', 'Kazuya', 'Eddy', 'Yoshimitsu', 'King', 'Law', 'Brayan'];
  const streetFighters = ['Ryu', 'Ken', 'Chun-Li', 'Guile', 'Blanka', 'Balrog', 'Vega', 'Sagat', 'M. Bison'];

  const clickMeHandler = () => {
    console.log('clickMeHandler Clicked');
  }
  const deleteHandler = () => {
    console.log('deleteHandler Clicked');
  }
  const sendHandler = () => {
    console.log('sendHandler Clicked');
  }

  return (
    <>
      {/* props:  props (short for "properties") are a way to pass data from a parent component to a child component. */}
      {/* Props are read-only, meaning that a child component cannot modify the props directly. Instead, it can only use them for rendering or passing them down to its own child components */}
      {/* Data flows from the parent to the child, ensuring a unidirectional data flow. */}
      {/* props allow components to render dynamic content based on the passed data */}
      <Title titleText="Hello World" />
      <Title titleText="KG Coding" />
      <Title titleText="Subscribe" />
      <Title titleText="Learning Props" />

      <FighterList fighters={tekkenFighters}/>
      <FighterList fighters={streetFighters}/>

      <Button btnType='success' btnText='Click Me' handler={clickMeHandler} />
      <Button btnType='danger' btnText='Delete' handler={deleteHandler} />
      <Button btnText='Send' handler={sendHandler} />
    </>
  )

// 1. Props are passed as attributes to components: <Component propName="value" />.
// 2. They are accessible in the child component as an object (props or destructured).
// 3. Props enable component reusability by making components customizable.
}

export default App
