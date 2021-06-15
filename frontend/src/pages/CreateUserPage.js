import React from 'react'
import UserIllustration from '../assets/undraw_Coding_re_iv62.svg'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/create.scss'


function CreateUserPage() {
    return (
        <div className="createUserWrapper">
            <div className="createUser">
                <div className="createUser__left">
                    <img src={UserIllustration} alt=''/>
                </div>
                <div className="createUser__right">
                    <h2>Create a user</h2>
                    <div className="form">
                        <div className="formGroup">
                            <TextField id="outlined-basic" label="FirstName" variant="outlined" size="small" />
                            <TextField id="outlined-basic" label="LastName" variant="outlined" size="small"/>
                        </div>
                        <div className="formGroup">
                            <TextField id="outlined-basic" label="Date" variant="outlined" size="small" type="date" defaultValue="2021-01-01"/>
                            <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
                        </div>
                        <TextField id="outlined-basic" label="Adress" variant="outlined" size="small" />
                    </div>

                    <Button><CircularProgress color="inherit"/>Submit</Button>
                </div>   
            </div>
        </div>
    )
}

export default CreateUserPage
