import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux/user/userActions.js'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import '../styles/home.scss'

function Home({history}) {

    const { t } = useTranslation()
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
                    <Link to="/entrant">{t("Mail")}</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/mails">{t("Mails")}</Link>
                    <Link to="/users">{t("Users")}</Link>
                    <Link to="/functionalities">{t("Functionalities")}</Link>
                    <Link to="/profiles">Profiles</Link>
                    <Link to="/Stat">Mail statistics</Link>
                </div>
                <div className="home__info">
                    <Button className="google_home" onClick={handleLogout}>
                        {t("Logout")} Mr {user?.FIRST_NAME}
                    </Button>
                    <h2>{t("Welcome")} {user?.FIRST_NAME}</h2>                  
                </div>
            </div>
        </div>
    )
}

export default Home
