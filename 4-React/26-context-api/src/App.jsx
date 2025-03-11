import { useState } from 'react';
import Welcome from './components/Welcome';
import ThemeToggle from './components/ThemeToggle';
import ThemeContext from './store/ThemeContext';
import './App.css';

function App() {
  // to use a context first we have to create it using a method `createContext()`
  // const ThemeContext = createContext();
  // ideally hum ye context aisi jagah define kar rahe hote hai jaha baki components ko bhi accessible ho, kyunki ye data wala kaam hai so hum generally `app.jsx` me define na karke kisi bahar file me define kar rahe hote hai aur usko hum generally dusre folder me daal rahe hote hai, `component` folder me nahi dalte kyunki ye ek component nahi hai aur ek data wala kaam hai, toh humne `src` ke ander `store` naam ka folder create kiya hai(general convention hai `store` banane ki), is folder ke ander `ThemeContext.jsx` naam ki file banayi hai jisme humne `ThemeContext` ko define kiya hai `createContext()` ki help se. 
  
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    // Here we used `Change value based on current value` concept.
  }

  return (
    // Providing Context to Components
      <ThemeContext.Provider value={{ theme, toggleTheme }} >   
          <Welcome />
          <ThemeToggle />
      </ThemeContext.Provider>
      // `value` contains the reference to the object {theme, toggleTheme}
      //  `value={{theme, toggleTheme}}` is shorthand of `value={{theme: theme, toggleTheme: toggleTheme}}`  
      // `value` naam se object pass kar rahien hai jise <Welcome/> and <toggleTheme/> and their decendent components(if any) access kar sakte hai.
      
      // A Provider wraps around components that need access to the context.
      // we wrap components with `themecontext.provider`.
      // `value={{ theme, toggletheme }}` passes data and functions down.
      // Now, child components can use this context using `useContext()`.
  )
}

export default App;

// ek createContext() se context banaya hai pehle, is context ne humko ek provider diya hai, is provider ko humne apne saare component as children banakar pass kar diya hai, aur uske baad humne isko value naam ka parameter de diya hai jisme hum ek object pass kar rahein hai jisme humne unko current `theme` ki value ke sath-sath `toggleTheme` naam ka ek function bhi de diya hai.
// humne <Welcome /> and <ThemeToggle /> ko kuch pass nahi kiya hai, humne to ek jagah bana diya hai jaha par ye dono value(`theme` and `toggleTheme`) padi hui hai, `theme` bhi pada hua and `toggleTheme` bhi pada hua hai, jis component ka mann kare vo use kar le, toh is vajah se component me prop drilling nahi hui jisse components ki props ki quanity nahi badhi 

// koi bhi aisa data jo bahut sare component ko chahiye agar, to usko hum context bana sakte hai
