import { createContext } from 'react'

// Creating a Context
const ThemeContext = createContext();
// now ek context banke taiyar ho gaya hai `ThemeContext` naam se and ye `ThemeContext` hume ek `provider` banakar de deta hai jisko hum kuch state value provide karte hai and ye provider jab bhi hum lagayenge charo taraf un components ke jinko is state value ka access chahiye to un saare components and unke ander ke nested component ko is state value ka access mil jayega

console.log('typeof ThemeContext:', typeof ThemeContext)    // Output: typeof ThemeContext: object
console.log('ThemeContext', ThemeContext);

console.log('typeof ThemeContext.Provider:', typeof ThemeContext.Provider);     // Output: typeof ThemeContext.Provider: object
// `ThemeContext.provider` is a component. 

export default ThemeContext;

// First, you create a Context object using `React.createContext()`.