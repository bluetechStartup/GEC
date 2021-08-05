import React,{ useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import NearMeIcon from '@material-ui/icons/NearMe';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar'
import { Link, withRouter } from 'react-router-dom';
import 'moment/locale/fr';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'
import '../styles/header.scss'

function Header({location}) {

    const [lang,setLang] = useState('en')
    const { t } = useTranslation();
    
    // HANDLE CHANGE LANGUAGE
    const handleLanguage = (Language)=> {
        i18n.changeLanguage(Language)
        moment.locale(Language);
    }

    useEffect(() => {
        handleLanguage(lang)
    }, [lang])

    

    const { data:userInfo } = useSelector(state => state.user)
    return (
        location.pathname !== '/login' ?
        <div className="header">
            <Link to="/"><NearMeIcon/></Link>
            <div>
                <LanguageIcon/>
                {lang === "fr" ?
                <h4 onClick={()=>setLang(()=>'en')}>en</h4>:
                <h4 onClick={()=>setLang(()=>'fr')}>fr</h4>}
            </div>
            {userInfo ?
                <div><Avatar/><h4>{userInfo.FIRST_NAME}</h4></div>:<Link to="/login">Login</Link>
            }
        </div> : null
    )
}

export default withRouter(Header)
