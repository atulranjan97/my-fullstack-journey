import React, {useContext} from 'react'
import ThemeContext from '../store/ThemeContext'

const Welcome = () => {
  const {theme} = useContext(ThemeContext);
  // const ThemeContext = useContext(ThemeContext);
  // console.log('theme:', useContext(ThemeContext).theme);

  // console.log('theme:', theme);

  return (
    <h1 className={`text-6xl font-bold text-center ${theme === 'light' ? "bg-slate-300 text-gray-800" : "text-slate-200 bg-gray-800" }`}>Welcome To Theme Changing App</h1>
  )
}

export default Welcome;

// useContext hook ThemeContext ka provider pehle jakar check karega ki ye provider kaha par laga hua hai, uske baad jakar dekhega ki ThemeContext ke ander kya-kya value pass kari gayi hai, humare case me provider ne pass kiya hai theme and toggleTheme, toh yaha par un sab value ka object bana kar de dega jinko hum context.theme ye context.toggleTheme laga kar access kar sakte hai
// useContext hook ko aap context ka object do, uske provider me jo-jo values di gayi hai vo sari value ye apne components ko provide kar dega.