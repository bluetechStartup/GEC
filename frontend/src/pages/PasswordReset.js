import React,{ useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import "../styles/passwordReset.scss"
import { passwordReset, submitToken } from '../redux/passwordResetReducer';

function PasswordReset({match}) {

    const dispatch = useDispatch()
    const {loading, successEmail, error} = useSelector(state => state.passwordReset)
    const [EMAIL, setEMAIL] = useState("")
    const [PASSWORD, setPASSWORD] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const token = match.params?.token

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(passwordReset(EMAIL))
    }

    const handleResetPassword = (e)=>{
        e.preventDefault()
        if(PASSWORD !== ConfirmPassword){
            console.log("passwords must match")
            return
        }
        dispatch(submitToken(token,PASSWORD))
        console.log(PASSWORD,ConfirmPassword)
    }

    return (
        <div className="passwordResetWrapper">
            <div className="passwordReset">
                { !token ? 
                <>
                { loading && <CircularProgress/>}
                { error && <div className="alert error">{error}</div> }
                { successEmail && <div className="alert success"><CheckCircleOutlineOutlinedIcon/> check your email</div>}
                <h3>Plese enter your email adress</h3>
                <form onSubmit={handleSubmit}>
                    <TextField  value={EMAIL} name="EMAIL" label="Email" variant="outlined" size="small" onChange={(e)=>setEMAIL(e.target.value.trim())}
                    type="email"
                    required/>
                    <Button type="submit">Send</Button>
                </form>
                </>
                :
                <>
                    <h3>Please enter new password</h3>
                    <form onSubmit={handleResetPassword}>
                        <TextField  value={PASSWORD} name="password" label="Password" variant="outlined" size="small" onChange={(e)=>setPASSWORD(e.target.value.trim())}
                        type="password"
                        required/>
                        <TextField  value={ConfirmPassword} label="Confirm Password" variant="outlined" size="small" onChange={(e)=>setConfirmPassword(e.target.value.trim())}
                        type="password"
                        required/>
                    <Button type="submit">Confirm password</Button>
                    </form>
                </>
                }
            </div>
        </div>
    )
}

export default PasswordReset
