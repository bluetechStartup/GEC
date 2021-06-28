import React,{ useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import '../styles/grantingRights.scss'
import { getAllProfiles } from '../redux/profile/profileActions';

function GrantingRights() {
    
    const dispatch = useDispatch()
    const { loading, data:profiles, error} = useSelector(state => state.allProfiles)
    useEffect(() => {
        dispatch(getAllProfiles())
    }, [])

    console.log(profiles)

    const [profile, setProfile] = useState('')
    const [fonctionnalite, setFonctionnalite] = useState('')
    const [rights, setRights] = useState({
        post:false,
        delete:false,
        update:false,
        get:false
    })


    const handleChange = (e) =>{
        e.target.name === 'profile' ? setProfile(e.target.value) : setFonctionnalite(e.target.value)
        console.log("profile:", profile, "func:",fonctionnalite)
    }

    return (
        <div className="wrapperGranting">
            <div className="granting">
                <div className="granting__left">
                    <div className="forms">
                        { profiles?.data && 
                        <FormControl variant="outlined" >
                            <InputLabel>Profile</InputLabel>
                            <Select
                            name="profile"
                            label="Profile" value={profile} onChange={handleChange}
                            >
                            <MenuItem value="">None</MenuItem>
                            { profiles?.data.map((profile)=>{
                                return <MenuItem key={profile.PROFIL_ID} value={profile.PROFIL_ID}>{profile.PROFIL_DESCR}</MenuItem>
                            }) }
                            </Select>
                        </FormControl>
                        }
                        <FormControl variant="outlined" disabled={ profile ? false : true }>
                            <InputLabel >Functions</InputLabel>
                            <Select
                            label="Functions" value={fonctionnalite} onChange={handleChange} 
                            >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={10}>Utilisateurs</MenuItem>
                            <MenuItem value={20}>Admin</MenuItem>
                            <MenuItem value={30}>Assistant</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <h4 className="msgInfo">Please select a profile and functionality !</h4>
{/*                     
                    <div className="checks">
                        <div>
                            <p>Grant a user the right to create</p>
                            <Switch
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                        <div><p>Grant a user the right to update</p>
                            <Switch
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                        <div><p>Grant a user the right to delete</p>
                            <Switch
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                        <div><p>Grant a user the right to retrieve</p>
                            <Switch
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                    </div>
                    <Button>Grant rights</Button> */}

                    
                </div>
                <div className="granting__right">
                    <div className="table">
                        {/* <h3>There is no user selected</h3> */}
                        <h3>Pierre</h3>
                        <table>
                            <tr>
                                <th>Functionnalities</th>
                                <th>Rights</th>
                                
                            </tr>
                            {/* <tr>
                                <td rowSpan="2">Empty</td>
                            </tr> */}
                            <tr>
                                <td>Utilisateurs</td>
                                <td>R</td>
                            </tr>
                            <tr>
                                <td>Administration</td>
                                <td>R</td>
                            </tr>
                            <tr>
                                <td>Assistant</td>
                                <td>R</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrantingRights
