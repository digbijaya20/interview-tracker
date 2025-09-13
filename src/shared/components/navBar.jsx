import ComputerIcon from '@mui/icons-material/Computer';
import './navBar.css'
import { useTheme } from '../context/themeContext';


function NavBar() {
    const themeColor = ['#2C3E50', '#F4A261', '#2A9D8F', '#4FA3D9'];
    const { changeTheme, theme, themes } = useTheme();

    return (
        <>
            <div className="nav-container">
                <div className="logo-container">
                    <ComputerIcon />
                    <h2>Interview Tracker</h2>
                </div>
                <div className='theme-container'>
                    <div className='color-selector-container'>
                        {Object.entries(themes).map(([key, value]) => (
                            <div key={key} className='color-selector'
                                style={{ backgroundColor: value.primaryColor,
                                    border: value.name === theme.name ? '3px solid #fff' : '2px solid #fff',
                                    cursor: 'pointer'
                                 }}
                                onClick={() => changeTheme(value)}
                            >
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;