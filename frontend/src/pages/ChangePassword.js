import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

import ChangPassSvg from '../assets/undraw_authentication_fsn5.svg'
import "../styles/changePassword.scss"
import { changePassword } from '../redux/changePasswordReducer';

function ChangePassword() {

    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state => state.changePassword)
    const { data:{ USER_ID } } = useSelector(state => state.user)

    const [PASSWORD, setPASSWORD] = useState("")
    const [OLDPASSWORD, setOLDPASSWORD] = useState("")

    const handleChangePassword = (e) =>{
        e.preventDefault()
        console.log(PASSWORD," ",OLDPASSWORD)
        dispatch(changePassword(PASSWORD, OLDPASSWORD, USER_ID))
    }

    return (
        <div className="changePasswordWrapper">
            <div className="changePassword">
                <div className="changePassword__left">
                    <img src={ChangPassSvg} alt=''/>
                </div> 
                <div className="changePassword__right">
                    <h3>Please enter new password</h3>

                    {error && <div className="alert error"><ErrorOutlineIcon/>{error}</div>}
                    {/* {warning && <div className="alert warning"><WarningIcon/>{warning}</div>} */}
                    {data?.success &&  <div className="alert success"><CheckIcon/>Password changed successfully !</div>}
                    
                    <form onSubmit={handleChangePassword}>
                        <TextField  value={OLDPASSWORD} label="Old password" variant="outlined" size="small" onChange={(e)=>setOLDPASSWORD(e.target.value.trim())}
                        type="password"
                        required/>
                        <TextField  value={PASSWORD} name="New password" label="Password" variant="outlined" size="small" onChange={(e)=>setPASSWORD(e.target.value.trim())}
                        type="password"
                        required/>
                        <Button type="submit" disabled={loading && true }>{loading ?<CircularProgress color="inherit"/>: 'Change password'}</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
