import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
// import ParentComponent from './ParentComponent'
import LandingPage from './pages/landingPage'
import { ThemeProvider } from './shared/context/themeContext'
import NavBar from './shared/components/navBar'
import ErrorBoundary from './shared/components/errorBoundaries'
import DashboardPage from './pages/dashboardPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ParentComponent /> */}
      <ErrorBoundary>
        <ThemeProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
