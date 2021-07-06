import React,{ useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import "../styles/passwordReset.scss"

function PasswordReset() {

    const [EMAIL, setEMAIL] = useState("")

    return (
        <div className="passwordResetWrapper">
            <div className="passwordReset">
                <h2>Password Reset</h2>
                <form>
                    <TextField  value={EMAIL} name="EMAIL" label="Email" variant="outlined" size="small"  onChange={(e)=>setEMAIL(e.target.value.trim())} required/>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default PasswordReset
