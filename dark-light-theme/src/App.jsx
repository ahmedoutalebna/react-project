import React, {useState} from 'react'
import './App.css'
const App = () => {
  const[currentTheme, setCurrentTheme] = useState('white')
  const[currentTitle, setCurrentTitle] = useState('black')
  const handleTheme = ()=>{
    currentTheme === 'white' ? setCurrentTheme('black') : setCurrentTheme('white')
    currentTitle === 'black' ? setCurrentTitle('white') : setCurrentTitle('black')
  }
  return (
    <div className='container'  style ={{backgroundColor: `${currentTheme}`}}>
      <h1 style ={{color: `${currentTitle}`}}>Hello world</h1>
      <button onClick={handleTheme}> <span style ={{color: `${currentTitle}`}}>Change theme </span> </button>
    </div>
  )
}

export default App