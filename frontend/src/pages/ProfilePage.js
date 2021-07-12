import { Button } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/service.scss'
import { getAllProfiles } from '../redux/profile/profileActions';

function ProfilePage({history}) {

    const dispatch = useDispatch()
    const { loading, data:profiles, error } = useSelector(state => state.allProfiles)
    useEffect(() => {
        dispatch(getAllProfiles())
    }, [])

    return (
        <div className="wrapperService">
            <div className="service">
                <div>
                    <h2>Profiles</h2>
                    <Link to="/create-profile"><AddIcon/>Add profile</Link>
                </div>
                <table>
                    <tr>
                        <th>Profile Id</th>
                        <th>Profile description</th> 
                        <th></th> 
                    </tr>

                { profiles?.data?.map((x)=>{
                    return(
                        <tr key={x.PROFIL_ID}>
                            <td>{x.PROFIL_ID}</td>
                            <td>{x.PROFIL_DESCR}</td>
                            <td>
                                <EditIcon onClick={()=>{console.log("edit profile:",x.PROFIL_ID)}}/>
                                <DeleteIcon onClick={()=>{console.log("delete profile:",x.PROFIL_ID)}}/>
                            </td>
                        </tr>
                    )
                })}                
            </table>
            </div>
        </div>
    )
}

export default ProfilePage
