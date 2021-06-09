import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../styles/home.scss'

function Home() {
    return (
        <div className="parent_home">
            <div className="home">
                <div className="home__options">
                    <Link className="active">Sign in</Link>
                    <Link>Sign up</Link>
                </div>
                <div className="home__shape"></div>
                <div className="home__info">
                    <Button className="google_home">
                        Log out Mr X
                    </Button>
                    <h2>Welcome X</h2>                  
                </div>
            </div>
        </div>
    )
}

export default Home
