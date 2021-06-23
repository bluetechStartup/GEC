import React,{useEffect, useLayoutEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import '../styles/update.scss'
import UpdateProfileSvg from '../assets/undraw_Wall_post_re_y78d.svg'
import { getSingleUser, updateUser } from '../redux/user/userActions';

function UpdateUserPage({match}) {

    const userId = parseInt(match.params.id)
    const dispatch = useDispatch();

    const {token} = useSelector(state => state.user);
    const {loading, error, data} = useSelector(state => state.userCreatedOrUpdated);
    const singleUser = useSelector(state => state.singleUser);
    const {loading:singleUserload, error:singleUserError, data:singleUserData} = singleUser;

    const [user, setUser] = useState({
        FIRST_NAME:'',
        LAST_NAME:'',
        USER_NAME:'',
        TELEPHONE:'',
        EMAIL:'',
        PASSWORD:'',
        PROFIL_ID:1,
    })

    useEffect(() => {
        dispatch(getSingleUser(userId))
    }, [])

    useEffect(() => {
        
        if(singleUserData && singleUserData.success){
            setUser({
                FIRST_NAME:singleUserData.FIRST_NAME,
                LAST_NAME:singleUserData.LAST_NAME,
                USER_NAME:singleUserData.USER_NAME,
                TELEPHONE:singleUserData.TELEPHONE,
                EMAIL:singleUserData.EMAIL,
            })
        }
    }, [singleUser])
    

    const [warning, setWarning] = useState('')

    const handleChange = (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setWarning('')
        console.log(user)
        dispatch(updateUser(user,token))
    }

    return (
        <div className="wrapperUpdate">
            <div className="updateUser">
                <div className="updateUser__right">
                    <h2>Update a user</h2>
                    {error && <div className="alert error"><ErrorOutlineIcon/>{error}</div>}
                    {warning && <div className="alert warning"><WarningIcon/>{warning}</div>}
                    {data?.success && !warning && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>Registered successfully !</div>}
                    
                    {singleUserload && <CircularProgress/>}
                    {singleUserError && <div className="alert error"><ErrorOutlineIcon/>{singleUserError}</div>}
                    {(singleUserData && singleUserData.success) &&
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <TextField value={user.FIRST_NAME} name="FIRST_NAME" label="FirstName" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField value={user.LAST_NAME} name="LAST_NAME" label="LastName" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        
                        <TextField value={user.EMAIL} name="EMAIL" label="Email" variant="outlined" size="small" onChange={handleChange} required/>
                        
                        <div className="formGroup">
                            <TextField value={user.USER_NAME} name="USER_NAME" label="Username" variant="outlined" size="small" onChange={handleChange} required/>
                            <TextField value={user.TELEPHONE} name="TELEPHONE" label="Telephone" variant="outlined" size="small" onChange={handleChange} required/>
                        </div>
                        <Button type="submit" disabled={loading && true }>{loading ?<CircularProgress color="inherit"/>: 'Submit'}</Button>
                    </form>}
                    
                </div> 
                <div className="updateUser__left">
                    <img src={UpdateProfileSvg} alt=''/>
                </div> 
            </div>
        </div>
    )
}

export default UpdateUserPage
