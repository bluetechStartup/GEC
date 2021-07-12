import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import '../styles/passwordReset.scss'

function CreateProfilePage() {
    const [PROFILE, setPROFILE] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(PROFILE)
    }
    return (
        <div className="wrapperNewProfile">
            <div className="newProfile">
            <form onSubmit={handleSubmit}>
                <TextField  value={PROFILE} name="PROFILE" label="Profile name" variant="outlined" size="small" onChange={(e)=>setPROFILE(e.target.value.trim())} required/>
                <Button type="submit">ADD PROFILE</Button>
            </form>
            </div>
        </div>
    )
}

export default CreateProfilePage
