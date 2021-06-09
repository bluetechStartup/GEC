import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../styles/login.scss'

function LoginPage() {
    return (
        <div className="parent_login">
            <div className="login">
                <div className="login__options">
                    <Link className="active">Sign in</Link>
                    <Link>Sign up</Link>
                </div>
                <div className="login__shape"></div>
                <div className="login__form">
                    <form>
                        <h2>Sign in</h2>
                        <Button className="google_login">
                            <img src="./google.svg"/>
                            <p>Sign in with google</p>
                        </Button>
                        <label>Email adress</label>
                        <input type="text"/>
                        <label>Password</label>
                        <input type="password"/>
                        <Button type="submit" className="submit">Sign in</Button>
                        <Link><p>Forget password?</p></Link>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage
