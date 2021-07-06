import React,{ useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import "../styles/passwordReset.scss"
import { passwordReset } from '../redux/passwordResetReducer';

function PasswordReset() {

    const dispatch = useDispatch()
    const {loading, data, error} = useSelector(state => state.passwordReset)
    const [EMAIL, setEMAIL] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(passwordReset(EMAIL))
    }

    return (
        <div className="passwordResetWrapper">
            <div className="passwordReset">
                { loading && <CircularProgress/>}
                { error && <div className="alert error">{error}</div> }
                { data && <div>Data sended</div>}
                <h3>Plese enter your email adress</h3>
                <form onSubmit={handleSubmit}>
                    <TextField  value={EMAIL} name="EMAIL" label="Email" variant="outlined" size="small" onChange={(e)=>setEMAIL(e.target.value.trim())}
                    type="email"
                    required/>
                    <Button type="submit">Send</Button>
                </form>
            </div>
        </div>
    )
}

export default PasswordReset
