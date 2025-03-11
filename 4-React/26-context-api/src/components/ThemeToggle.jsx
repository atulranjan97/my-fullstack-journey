import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext'

const ThemeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <button className={`border block mx-auto mt-8 p-2 ${theme === 'light' ? "border-black bg-slate-400" : "border-white bg-slate-800 text-white"}`} onClick={toggleTheme} >Change Theme to {theme === 'light' ? 'dark' : 'light'}</button>
  )
}

export default ThemeToggle;