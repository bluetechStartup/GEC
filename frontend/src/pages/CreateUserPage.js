import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import UserIllustration from '../assets/undraw_Coding_re_iv62.svg'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { createUser, finishRequest } from '../redux/user/userActions'
import '../styles/create.scss'
import { getAllProfiles } from '../redux/profile/profileActions';


function CreateUserPage() {
    
    const dispatch = useDispatch();
    const { data:profiles } = useSelector(state => state.allProfiles)
    const {loading, error, data} = useSelector(state => state.userCreatedOrUpdated);

    const [warning, setWarning] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [user, setUser] = useState({
        FIRST_NAME:'',
        LAST_NAME:'',
        USER_NAME:'',
        TELEPHONE:'',
        EMAIL:'',
        PASSWORD:'',
        PROFIL_ID:''
    })

    useEffect(() => {
        dispatch(getAllProfiles())
    }, [])

    useEffect(() => {
        if (data && data.success){
            setUser({
                FIRST_NAME:'',
                LAST_NAME:'',
                USER_NAME:'',
                TELEPHONE:'',
                EMAIL:'',
                PASSWORD:'',
                PROFIL_ID:'',
            })
            setConfirmPassword('')
            setTimeout(() => {
                dispatch(finishRequest())
            }, 3500);
        }
    }, [data])

    const handleChange = (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setWarning('')

        if (user.PASSWORD !== confirmPassword){
            setWarning('Two passwords must be the same !')
            return
        }
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
                    
                    {warning && <div className="alert warning"><WarningIcon/>{warning}</div>}
                    {error && !warning && <div className="alert error"><ErrorOutlineIcon/>{error}</div>}
                    {data?.success && !warning && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>Registered successfully !</div>}
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <TextField value={user.FIRST_NAME} name="FIRST_NAME" label="FirstName" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField value={user.LAST_NAME} name="LAST_NAME" label="LastName" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        <div className="formGroup">
                            <TextField value={user.EMAIL} name="EMAIL" label="Email" variant="outlined" size="small" onChange={handleChange} required/>
                            <FormControl variant="outlined" size="small">
                                <InputLabel>Profil</InputLabel>
                                <Select label="Profil" value={user.PROFIL_ID} onChange={(e)=>setUser({...user,PROFIL_ID:e.target.value})} required>
                                <MenuItem value="">None</MenuItem>
                                { profiles?.data && profiles?.data.map((x)=>{
                                    return(<MenuItem key={x.PROFIL_ID} value={x.PROFIL_ID}>{x.PROFIL_DESCR}</MenuItem>)
                                }) }
                                </Select>
                            </FormControl>
                        </div>
                        
                        <div className="formGroup">
                            <TextField value={user.USER_NAME} name="USER_NAME" label="Username" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField value={user.TELEPHONE} name="TELEPHONE" label="Telephone" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        <div className="formGroup">
                            <TextField value={user.PASSWORD} name="PASSWORD" label="Password" type="password" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField name="CONFIRM_PASSWORD" value={confirmPassword} label="Confirm password" type="password" variant="outlined" size="small" onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                        </div>
                        <Button type="submit" disabled={loading && true }>{loading ?<CircularProgress color="inherit"/>: 'Submit'}</Button>
                    </form>
                </div>   
            </div>
        </div>
    )
}

export default CreateUserPage
