import { useState } from 'react'
import './App.css'
// import ParentComponent from './ParentComponent'
import HomePage from './pages/homePage'
import { ThemeProvider } from './shared/context/themeContext'
import NavBar from './shared/components/navBar'
import ErrorBoundary from './shared/components/errorBoundaries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ParentComponent /> */}
      <ErrorBoundary>
        <ThemeProvider>
          <NavBar />
          <HomePage />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
