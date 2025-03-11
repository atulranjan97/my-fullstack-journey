import React, {useContext} from 'react'
import ThemeContext from '../store/ThemeContext'

const Welcome = () => {
  const {theme} = useContext(ThemeContext);
  // `useContext` returns an object of those value which Provider has passed when we provide context to the components .
  // `useContext` returns {theme: theme, toggleTheme: toggleTheme}.
  // `useContext` apne aap ye dhyaan rakhega ki agar `themeContext` ke ander humari theme ki value change hui toh jis-jis components ne bhi is theme ko use kiya hai uska re-render trigger karna hai.

  
  // `useContext`(a hook), ThemeContext ke provider ko pehle jakar check karega ki ye provider kaha par laga hai, uske baad jakar dekhega ki ThemeContext ke ander kya-kya value pass kari gayi hai, humare case me provider ne pass kiya hai `theme` and `toggleTheme`, toh yaha par un sab values ka ek object bana kar de dega jinko hum context.theme ye context.toggleTheme laga kar access kar sakte hai
  // useContext hook ko aap context ka object do, uske provider me jo-jo values di gayi hai vo sari value ye apne components ko provide kar dega.

  // const ThemeContext = useContext(ThemeContext);
  // console.log('theme:', useContext(ThemeContext).theme);

  // console.log('theme:', theme);

  return (
    <h1 className={`text-6xl font-bold text-center ${theme === 'light' ? "bg-slate-300 text-gray-800" : "text-slate-200 bg-gray-800" }`}>Welcome To Theme Changing App</h1>
  )
}

export default Welcome;
