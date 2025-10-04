import { useContext } from 'react';
import api from '../shared/utils/config';
import { AuthContext } from '../shared/context/authContext';

function DashboardPage(){
    const {user, logout} = useContext(AuthContext);
    console.log(user)
    return(
        <div>Hello {user?.full_name}! welcome to interview tracker. </div>
    )
}

export default DashboardPage;