import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './ParentComponent'
import HomePage from './pages/homePage'
import { ThemeProvider } from './shared/context/themeContext'
import NavBar from './shared/components/navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ParentComponent /> */}
     <ThemeProvider>
      <NavBar/>
     <HomePage/>
     </ThemeProvider>
    </>
  )
}

export default App
