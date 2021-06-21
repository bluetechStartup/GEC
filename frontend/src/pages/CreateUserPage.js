import React,{ useState } from 'react'
import UserIllustration from '../assets/undraw_Coding_re_iv62.svg'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/create.scss'


function CreateUserPage() {
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        username:'',
        phone:null,
        password:'',
        confirm_password:''
    })

    const handleChange = (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user)
    }

    return (
        <div className="createUserWrapper">
            <div className="createUser">
                <div className="createUser__left">
                    <img src={UserIllustration} alt=''/>
                </div>
                <div className="createUser__right">
                    <h2>Create a user</h2>
                    {/* <div className="alert warning">This an error alert</div> */}
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <TextField name="firstName" label="FirstName" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField name="lastName" label="LastName" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        
                        <TextField name="email" label="Email" variant="outlined" size="small" onChange={handleChange} required/>
                        
                        <div className="formGroup">
                            <TextField name="username" label="Username" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField name="phone" label="Telephone" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        <div className="formGroup">
                            <TextField name="password" label="Password" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField name="confirm_password" label="Confirm password" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        <Button type="submit"><CircularProgress color="inherit"/>Submit</Button>
                    </form>
                </div>   
            </div>
        </div>
    )
}

export default CreateUserPage
