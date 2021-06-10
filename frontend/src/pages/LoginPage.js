import React,{ useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { login } from '../redux/user/userActions.js'
import '../styles/login.scss';

function LoginPage({history}) {

    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user)

    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    

    useEffect(() => {
        if(userInfo.data) history.push("/home")
    }, [userInfo])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch(login(username, password))
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
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        <Button type="submit" className="submit">Sign in</Button>
                        <Link><p>Forget password?</p></Link>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage
