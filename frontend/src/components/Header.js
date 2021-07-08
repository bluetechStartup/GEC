import React,{ useState } from 'react'
import { useSelector } from "react-redux";
import SendIcon from '@material-ui/icons/Send';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, withRouter } from 'react-router-dom';
import '../styles/header.scss'

function Header({location}) {

    const { data:userInfo } = useSelector(state => state.user)
    return (
        location.pathname !== '/login' ?
        <div className="header">
            <Link to="/update/1"><SendIcon/></Link>
            <div><LanguageIcon/><h3>en</h3></div>
            {userInfo ?
                <div><Avatar/><h4>{userInfo.FIRST_NAME}</h4></div>:<Link to="/login">Login</Link>
            }
        </div> : null
    )
}

export default withRouter(Header)
