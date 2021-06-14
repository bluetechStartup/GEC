import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar'
import { Link, withRouter } from 'react-router-dom';
import '../styles/header.scss'

function Header({location}) {
    return (
        location.pathname !== '/' ?
        <div className="header">
            <Link><SendIcon/></Link>
            <div><LanguageIcon/><h4>En</h4></div>
            <div><Avatar/><h4>John Doe</h4></div>
        </div> : null
    )
}

export default withRouter(Header)
