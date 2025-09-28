import './homePage.css'
import ComputerIcon from '@mui/icons-material/Computer';
import PaletteIcon from '@mui/icons-material/Palette';
import BarChartIcon from '@mui/icons-material/BarChart';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function HomePage() {
    const [createNewAc, setCreateNewAc] = useState(false);
    return (
        <div className="welcome-container">
            <div className="welcome-text">
                <h1>Welcome to Interview Tracker</h1>
                <p>
                    A modern, intuitive solution to track your interviews, manage applications, and stay organized throughout your job search.
                </p>

                <div className="features">
                    <div className="feature">
                        <ComputerIcon className="feature-icon" />
                        <h3>Easy Interview Management</h3>
                        <p>Schedule, track, and organize your interviews efficiently with reminders and status updates.</p>
                    </div>

                    <div className="feature">
                        <PaletteIcon className="feature-icon" />
                        <h3>Customizable Dashboard</h3>
                        <p>Personalize your dashboard layout to match your workflow and style.</p>
                    </div>

                    <div className="feature">
                        <BarChartIcon className="feature-icon" />
                        <h3>Progress Tracking</h3>
                        <p>Visual charts and reports to track your application success rate and interview performance over time.</p>
                    </div>
                </div>
            </div>

            <div className="login-card">
                <h2>Login to Get Started</h2>
                {createNewAc ?
                    (<TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Full name"
                        defaultValue=""
                        margin="normal"

                    />) : ''}
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    margin="normal"

                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Password"
                    defaultValue=""
                    margin="normal"
                />
                <Button variant="outlined" size="small">
                    Login
                </Button>

                <Button variant="outlined" size="small" className="google-login">
                    <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" /> Sign in with Google
                </Button>
                {createNewAc ? (<p>
                    Already have an account? <a className='cursor-pointer' onClick={() => setCreateNewAc(false)}>Click here</a>
                </p>) : (<p>
                    Don't have an account? <a className='cursor-pointer' onClick={() => setCreateNewAc(true)}>Create one now</a>
                </p>)}

            </div>
        </div>
    )
}

export default HomePage;