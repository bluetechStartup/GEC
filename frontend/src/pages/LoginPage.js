import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import '../styles/login.scss';

function LoginPage({history}) {

    const [ email, setEmail] = useState('')
    const [ password, setPasswod] = useState('')
    const [userInfo,setUserInfo] = useState('')

    useEffect(() => {
        if(userInfo) history.push('/home') 
    }, [])
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email,password)
        axios.post("http://localhost:3005/api/users/auth",
            {email,password},
            {"Content-Type":"application/json"})
        }
    return (
        <div className="parent_login">
            <div className="login">
                <div className="login__options">
                    <Link className="active">Sign in</Link>
                    <Link>Sign up</Link>
                </div>
                <div className="login__shape"></div>
                <div className="login__form">
                    <form onSubmit={handleSubmit}>
                        <h2>Sign in</h2>
                        <Button className="google_login">
                            <img src="./google.svg"/>
                            <p>Sign in with google</p>
                        </Button>
                        <label>Email adress</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e)=>setPasswod(e.target.value)} required/>
                        <Button type="submit" className="submit">Sign in</Button>
                        <Link><p>Forget password?</p></Link>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage
