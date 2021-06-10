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

    // useEffect(() => {
    //     if(!userInfo.data) history.push("/")
    // }, [userInfo])

    const handleLogout = ()=>{ 
        dispatch(logout());
        history.push('/')
    }

    return (
        <div className="parent_home">
            <div className="home">
                <div className="home__options">
                    <Link className="active">Sign in</Link>
                    <Link>Sign up</Link>
                </div>
                <div className="home__shape"></div>
                <div className="home__info">
                    <Button className="google_home" onClick={handleLogout}>
                        Log out Mr {user?.username}
                    </Button>
                    <h2>Welcome {user?.username}</h2>                  
                </div>
            </div>
        </div>
    )
}

export default Home
