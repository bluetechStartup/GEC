import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Link } from "react-router-dom"
import '../styles/passwordReset.scss'
import { addProfileFinish, createProfile } from '../redux/profile/profileActions';

function CreateProfilePage() {
    const [PROFILE, setPROFILE] = useState("")
    const [PROFILE_DESCR, setPROFILE_DESCR] = useState("")
    const dispatch = useDispatch()
    const { loading,data:profileAdded, error } = useSelector(state => state.createdOrUpdateProfile)

    useEffect(() => {
        if(profileAdded?.insertId > 0){
            setPROFILE("")
            setPROFILE_DESCR("")
            setTimeout(() => {
                dispatch(addProfileFinish())
            }, 2000);
        }
    }, [profileAdded])

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createProfile(PROFILE,PROFILE_DESCR))
    }
    return (
        <div className="wrapperNewProfile">
            <Link to="/profiles"><BackspaceIcon/></Link>
            <div className="newProfile">
            { loading && <CircularProgress/>}
            { error && <div className="alert error">{error}</div> }
            { profileAdded && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>Profile added successfully</div>}
            <h2>Add new profile</h2>
            <form onSubmit={handleSubmit}>
                <TextField  value={PROFILE} label="Profile code" variant="outlined" size="small" onChange={(e)=>setPROFILE(e.target.value.trim())} required/>
                <TextField  value={PROFILE_DESCR} label="Profile descr" variant="outlined" size="small" onChange={(e)=>setPROFILE_DESCR(e.target.value.trim())} required/>
                <Button type="submit">ADD PROFILE</Button>
            </form>
            </div>
        </div>
    )
}

export default CreateProfilePage
