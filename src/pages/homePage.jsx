import './homePage.css'
import ComputerIcon from '@mui/icons-material/Computer';
import PaletteIcon from '@mui/icons-material/Palette';
import BarChartIcon from '@mui/icons-material/BarChart';


function HomePage() {
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
                <input type="email" placeholder="Email*" />
                <input type="password" placeholder="Password*" />
                <button>Login</button>
                <button className="google-login">
                    <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" /> Sign in with Google
                </button>
                <p>
                    Don't have an account? <a href="#">Create one now</a>
                </p>
            </div>
        </div>
    )
}

export default HomePage;