import ComputerIcon from '@mui/icons-material/Computer';
import './navBar.css'
import { useTheme } from '../context/themeContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';


function NavBar() {
    const themeColor = ['#2C3E50', '#F4A261', '#2A9D8F', '#4FA3D9'];
    const { changeTheme, theme, themes } = useTheme();
    const { isLoggedIn, user, logout } = useContext(AuthContext);

    return (
        <>
            <div className="nav-container">
                <Link to='/' className='remove-link'>
                    <div className="logo-container" component={Link} to={'/'}>
                        <ComputerIcon />
                        <h2>Interview Tracker</h2>
                    </div>
                </Link>
                <div className='theme-container'>
                    <div className='color-selector-container'>
                        {Object.entries(themes).map(([key, value]) => (
                            <div key={key} className='color-selector'
                                style={{
                                    backgroundColor: value.primaryColor,
                                    border: value.name === theme.name ? '3px solid #fff' : '2px solid #fff',
                                    cursor: 'pointer'
                                }}
                                onClick={() => changeTheme(value)}
                            >
                            </div>
                        ))}
                    </div>

                    {isLoggedIn ? (
                        <div className='nav-links-contanier'>
                            <Link to='dashboard' className='remove-link'>
                                <div>Dashboard</div>
                            </Link>
                            <div onClick={logout}>
                                Logout
                            </div>


                        </div>
                    ) : ''}
                </div>
            </div>
        </>
    )
}

export default NavBar;