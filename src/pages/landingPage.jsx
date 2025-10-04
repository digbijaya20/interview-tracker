import './landingPage.css'
import ComputerIcon from '@mui/icons-material/Computer';
import PaletteIcon from '@mui/icons-material/Palette';
import BarChartIcon from '@mui/icons-material/BarChart';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../shared/context/authContext';
import api from '../shared/utils/config';



function LandingPage() {
    const [createNewAc, setCreateNewAc] = useState(false);
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const { login, user, isLoggedIn } = useContext(AuthContext);
    const [isValidate, setValidate] = useState(false)
    const navigate = useNavigate();


    const handleAuth = async () => {
        try {
            let res;
            if (createNewAc) {
                res = await api.post('/signup', {
                    email,
                    password,
                    full_name: fullName,
                });
            } else {
                res = await api.post('/users/login', { email, password })
            }
            login(res.data.access_token);
            if(res.data.access_token)
                navigate("/dashboard");
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.detail || "Auth failed");
        }
    }

    useEffect(()=>{
        setValidate(false)
        if(createNewAc && email !== '' && password !=='' && fullname !== ''){
            setValidate(true)
        }
        if(!createNewAc && email !== '' && password !==''){
            setValidate(true)
        }

    }, [email, password, createNewAc, fullname])

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
            {!user ? (<div className="login-card">
                <h2>Login to Get Started</h2>
                {createNewAc ?
                    (<TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Full name"
                        defaultValue=""
                        margin="normal"
                        value={fullname}
                        onChange={(e)=> setFullname(e.target.value)}

                    />) : ''}
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Password"
                    defaultValue=""
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* <Link to="/dashboard"> */}
                    <Button variant="outlined" size="small" onClick={handleAuth} disabled={!isValidate}>
                        {createNewAc ? 'Sign up' : 'Login'}  {isValidate}
                    </Button>
                    {isValidate}
                {/* </Link> */}
                <Button variant="outlined" size="small" className="google-login">
                    <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" /> Sign in with Google
                </Button>
                {createNewAc ? (<p>
                    Already have an account? <a className='cursor-pointer' onClick={() => setCreateNewAc(false)}>Click here</a>
                </p>) : (<p>
                    Don't have an account? <a className='cursor-pointer' onClick={() => setCreateNewAc(true)}>Create one now</a>
                </p>)}

            </div>) : ''}

        </div>
    )
}

export default LandingPage;