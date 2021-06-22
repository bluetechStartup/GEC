import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/update.scss'
import UpdateProfileSvg from '../assets/undraw_Wall_post_re_y78d.svg'

function UpdateUserPage({match}) {
    const dispatch = useDispatch();
    const {loading, error, data} = useSelector(state => state.singleUser);

    const [warning, setWarning] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [user, setUser] = useState({
        FIRST_NAME:'',
        LAST_NAME:'',
        USER_NAME:'',
        TELEPHONE:'',
        EMAIL:'',
        PASSWORD:'',
        PROFIL_ID:1,
    })

    return (
        <div className="wrapperUpdate">
            <div className="updateUser">
                <div className="updateUser__right">
                    <h2>Update a user</h2>
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
                <div className="updateUser__left">
                    <img src={UpdateProfileSvg} alt=''/>
                </div> 
            </div>
        </div>
    )
}

export default UpdateUserPage
