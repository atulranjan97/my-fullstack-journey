import { useState } from 'react';
import Welcome from './components/Welcome';
import ThemeToggle from './components/ThemeToggle';
import ThemeContext from './store/ThemeContext';
import './App.css';

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }

  return (
    // Providing Context to Components
      <ThemeContext.Provider value={{ theme, toggleTheme }} >   
        <Welcome />
        <ThemeToggle />
      </ThemeContext.Provider>
      // `value` contains the reference to the object {theme, toggleTheme}
      //  `value={{theme, toggleTheme}}` is shorthand of `value={{theme: theme, toggleTheme: toggleTheme}}`  
      // `value` naam se object pass kar rahien hai jise <Welcome/> and <toggleTheme/> access kar sakte hai
      
      // A Provider wraps around components that need access to the context.
      // we wrap components with `themecontext.provider`.
      // `value={{ theme, toggletheme }}` passes data and functions down.
      // Now, child components can use this context using `useContext()`.
  )
}

export default App;

// ek createContext se context banaya hai pehle, is context ne humko ek provider diya hai, is provider ko humne apne saare component as children banakar pass kar diya hai, aur uske baad humne isko value naam ka parameter de diya hai jisme hum ek object pass kar rahein hai jisme humne unko current `theme` ki value ke sath-sath `toggleTheme` naam ka ek function bhi de diya hai.
// humne <Welcome /> and <ThemeToggle /> ko kuch pass nahi kiya hai, humne to ek jagah bana diya hai jaha par ye dono value(theme and toggleTheme) padi hui hai, `theme` bhi pada hua and `toggleTheme` bhi pada hua hai, jis component ka mann kare vo use kar le, toh is vajah se  

// koi bhi aisa data jo bahut sare component ko chahiye agar to usko hum context bana sakte hai
