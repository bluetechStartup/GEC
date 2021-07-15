import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Link } from "react-router-dom"
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import '../styles/passwordReset.scss'
import { addProfileFinish, getProfile, updateProfile } from '../redux/profile/profileActions';

function UpdateProfilePage({ match }) {

    const id = parseInt(match.params.id)

    const dispatch = useDispatch()
    const { loading, profileUpdated, error } = useSelector(state => state.createdOrUpdateProfile)
    const { data:profileRetrieved } = useSelector(state => state.singleProfile)
    const [PROFILE, setPROFILE] = useState("")
    const [PROFILE_DESCR, setPROFILE_DESCR] = useState("")


    useEffect(() => {
        dispatch(getProfile(id))
    }, [])

    useEffect(() => {
        if(profileUpdated){
            setTimeout(() => {
                dispatch(addProfileFinish())
            }, 1000);
        }
    }, [profileUpdated])

    useEffect(() => {
        if(profileRetrieved){
            setPROFILE(profileRetrieved?.data.PROFIL_CODE)
            setPROFILE_DESCR(profileRetrieved?.data.PROFIL_DESCR)
        }
    }, [profileRetrieved])

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateProfile(id,PROFILE,PROFILE_DESCR))

    }
    return (
        <div className="wrapperNewService">
            <Link to="/profiles"><BackspaceIcon/></Link>
            <div className="newService">
            { loading && <CircularProgress/>}
            { error && <div className="alert error">{error}</div> }
            { profileUpdated && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>Profile updated successfully</div>}
            <h2>Update service</h2>
            <form onSubmit={handleSubmit}>
                <TextField  value={PROFILE} label="Profile name" variant="outlined" size="small" onChange={(e)=>setPROFILE(e.target.value.trim())} required/>
                <TextField  value={PROFILE_DESCR} label="Profile descr" variant="outlined" size="small" onChange={(e)=>setPROFILE_DESCR(e.target.value.trim())} required/>
                <Button type="submit">UPDATE PROFILE</Button>
            </form>
            </div>
        </div>
    )
}

export default UpdateProfilePage
