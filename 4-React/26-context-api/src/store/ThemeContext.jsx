import { createContext } from 'react'

// Creating a Context
const ThemeContext = createContext();

console.log('typeof ThemeContext:', typeof ThemeContext)
console.log('ThemeContext', ThemeContext);

export default ThemeContext;

// First, you create a Context object using `React.createContext()`.