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
                    <Link className="active">Tableau de bord</Link>
                    <Link className="">Courriers</Link>
                    <Link>Donnees</Link>
                    <Link>Regles</Link>
                    <Link>Administration</Link>
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
