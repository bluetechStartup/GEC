import React,{ useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import UserIllustration from '../assets/undraw_Coding_re_iv62.svg'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createUser } from '../redux/user/userActions'
import '../styles/create.scss'


function CreateUserPage() {
    
    const dispatch = useDispatch();
    const {loading, error, data} = useSelector(state => state.singleUser);

    const [user, setUser] = useState({
        FIRST_NAME:'',
        LAST_NAME:'',
        USER_NAME:'',
        TELEPHONE:null,
        EMAIL:'',
        PASSWORD:'',
        CONFIRM_PASSWORD:''
    })

    const handleChange = (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(user)
        dispatch(createUser(user))
    }

    return (
        <div className="createUserWrapper">
            <div className="createUser">
                <div className="createUser__left">
                    <img src={UserIllustration} alt=''/>
                </div>
                <div className="createUser__right">
                    <h2>Create a user</h2>
                    {error && <div className="alert error">Error</div>}
                    {data?.success && <div className="alert success">This a succes alert</div>}
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <TextField name="FIRST_NAME" label="FirstName" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField name="LAST_NAME" label="LastName" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        
                        <TextField name="EMAIL" label="Email" variant="outlined" size="small" onChange={handleChange} required/>
                        
                        <div className="formGroup">
                            <TextField name="USER_NAME" label="Username" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField name="TELEPHONE" label="Telephone" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        <div className="formGroup">
                            <TextField name="PASSWORD" label="Password" type="password" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField name="CONFIRM_PASSWORD" label="Confirm password" type="password" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        <Button type="submit">{loading ?<CircularProgress color="inherit"/>: 'Submit'}</Button>
                    </form>
                </div>   
            </div>
        </div>
    )
}

export default CreateUserPage
