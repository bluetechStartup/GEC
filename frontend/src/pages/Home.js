import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux/user/userActions.js'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../styles/home.scss'

function Home({history}) {

    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.user)
    const user = userInfo.data

    console.log(userInfo)

    const handleLogout = ()=>{ 
        dispatch(logout());
        history.push('/')
    }

    return (
        <div className="parent_home">
            <div className="home">
                <div className="home__options">
                    <Link to="/entrant">Courriers</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/mails">Mails</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/functionalities">Functionalities</Link>
                    <Link to="/profiles">Profiles</Link>
                    <Link to="/Stat">Mail statistics</Link>
                </div>
                <div className="home__info">
                    <Button className="google_home" onClick={handleLogout}>
                        Logout Mr {user?.FIRST_NAME}
                    </Button>
                    <h2>Welcome {user?.FIRST_NAME}</h2>                  
                </div>
            </div>
        </div>
    )
}

export default Home
