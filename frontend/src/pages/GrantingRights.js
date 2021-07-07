import React,{ useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import Select from '@material-ui/core/Select';
import { Button, CircularProgress } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import '../styles/grantingRights.scss'
import { getAllProfiles } from '../redux/profile/profileActions';
import { getAllFuncs, getAllFuncsByProfile, updateFuncByProfile, updateFuncFinished } from '../redux/functionnalities/functionsActions';

function GrantingRights() {
    
    const dispatch = useDispatch()
    const { data:profiles } = useSelector(state => state.allProfiles)
    const { data:functions } = useSelector(state => state.allFuncs)
    const { loading, data } = useSelector(state => state.allFuncsByProfile)
    const { data:profileUpdated } = useSelector(state => state.singleFunc)

    useEffect(() => {
        dispatch(getAllProfiles())
        dispatch(getAllFuncs())
    }, [])


    useEffect(() => {
        if (profileUpdated){
            setTimeout(() => {
                dispatch(updateFuncFinished())
                setProfile("")
                setFonctionnalite("")
            }, 1000);
        }
        
    }, [profileUpdated])

    const [profile, setProfile] = useState('')
    const [fonctionnalite, setFonctionnalite] = useState('')



    const [create, setcreate] = useState(false)
    const [read, setread] = useState(false)
    const [update, setupdate] = useState(false)
    const [del, setdelete] = useState(false)
    

    const initialState = () => {
        setcreate(false)
        setread(false)
        setupdate(false)
        setdelete(false)
    }

    const rightsFormatter = (caracts)=>{
        let rightsformat = "";
        caracts = caracts.split(",");
        if (caracts.includes('1')) rightsformat += "C " 
        if (caracts.includes('2'))  rightsformat += "R "
        if (caracts.includes('3'))  rightsformat += "U "
        if (caracts.includes('4'))  rightsformat += "D " 

        return rightsformat
    } 

    const handleProfileChange = (e) =>{
        initialState()
        setProfile(e.target.value)
        setFonctionnalite("")
        dispatch(getAllFuncsByProfile(parseInt(e.target.value)))
    }

    const handleFunctionChange = (e) =>{
        setFonctionnalite(e.target.value)
        initialState()
        if(data?.profileFuncs){
            data?.profileFuncs.forEach((x)=>{
                if(x.FONCTIONNALITE_ID === parseInt(e.target.value)){
                    let meths = x.METHODS_GRANTED.split(",")
                    if (meths.includes("1")) setcreate(true)
                    if (meths.includes("2")) setread(true)
                    if (meths.includes("3")) setupdate(true)
                    if (meths.includes("4")) setdelete(true)
                }
            })
        }
    }


    const handleSubmit = ()=>{
        let rights = "";
        if (create) rights += "1,";
        if (read) rights += "2,";
        if (update) rights += "3,";
        if (del) rights += "4";

        const dataInfo = {
            "PROFIL_ID": profile,
            "FONCTIONNALITE_ID": fonctionnalite,
            "METHODS_GRANTED": rights
        }
        
        dispatch(updateFuncByProfile(dataInfo))
    }

    return (
        <div className="wrapperGranting">
            <div className="granting">
                <div className="granting__left">
                    <div className="forms">
                        
                        <FormControl variant="outlined" >
                            <InputLabel>Profile</InputLabel>
                            <Select
                            name="profile"
                            label="Profile" value={profile} onChange={handleProfileChange}
                            >
                            <MenuItem value="">None</MenuItem>
                            { profiles?.data && profiles?.data.map((profile)=>{
                                return <MenuItem key={profile.PROFIL_ID} value={profile.PROFIL_ID}>{profile.PROFIL_DESCR}</MenuItem>
                            }) }
                            </Select>
                        </FormControl>
                        
                        <FormControl variant="outlined" disabled={ profile ? false : true }>
                            <InputLabel >Functions</InputLabel>
                            <Select
                            label="Functions" value={fonctionnalite} onChange={handleFunctionChange} 
                            >
                            <MenuItem value="">None</MenuItem>
                            { functions?.funcs && functions?.funcs.map((func)=>{
                                return <MenuItem key={func.FONCTIONNALITE_ID} value={func.FONCTIONNALITE_ID}>{func.FONCTIONNALITE_URL}</MenuItem>
                            }) }
    
                            </Select>
                        </FormControl>
                    </div>
                    { fonctionnalite ?
                    <>
                    <div className="checks">
                        { profileUpdated?.success && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>Has updated successfully !</div>}
                        <div className="checkbox">
                            <p>Grant a user the right to create</p>
                            <Switch
                            color="primary"
                            checked={create}
                            onChange={(e)=>setcreate(e.target.checked)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                        <div className="checkbox"><p>Grant a user the right to retrieve</p>
                            <Switch
                            color="primary"
                            checked={read}
                            onChange={(e)=>setread(e.target.checked)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                        <div className="checkbox"><p>Grant a user the right to update</p>
                            <Switch
                            color="primary"
                            checked={update}
                            onChange={(e)=>setupdate(e.target.checked)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                        <div className="checkbox"><p>Grant a user the right to delete</p>
                            <Switch
                            color="primary"
                            checked={del}
                            onChange={(e)=>setdelete(e.target.checked)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                    </div>
                    <Button onClick={handleSubmit}>Grant rights</Button>
                    </>
                    :<h4 className="msgInfo">Please select a profile and functionality !</h4>
                    }

                </div>
                <div className="granting__right">
                    <div className="table">
                        <table>
                            <tr>
                                <th>Functionnalities</th>
                                <th>Rights</th>
                            </tr>
                            
                            { data?.profileFuncs.length > 0 && profile ? data?.profileFuncs.map((x)=>{
                                return (<tr key={x.FONCTIONNALITE_ID}>
                                            <td>{x.FONCTIONNALITE_URL}</td>
                                            <td>{rightsFormatter(x.METHODS_GRANTED)}</td>
                                        </tr>)
                            }): <tr>
                                    <td rowSpan="2">No functionnality !</td>
                                </tr>
                            }
                            
                        </table>
                        { loading && <CircularProgress/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrantingRights
