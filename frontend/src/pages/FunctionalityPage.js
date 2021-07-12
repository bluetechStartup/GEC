import { Button } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/service.scss'
import { getAllProfiles } from '../redux/profile/profileActions';
import { getAllFuncs } from '../redux/functionnalities/functionsActions';

function FunctionalityPage({history}) {

    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state => state.allFuncs)
    useEffect(() => {
        dispatch(getAllFuncs())
    }, [])

    return (
        <div className="wrapperService">
            <div className="service">
                <div>
                    <h2>Functionalities</h2>
                    <Link to="/create-functionality"><AddIcon/>Add functionality</Link>
                </div>
                <table>
                    <tr>
                        <th>Functionality Id</th>
                        <th>Functionality description</th> 
                        <th></th> 
                    </tr>

                { data?.funcs?.map((x)=>{
                    return(
                        <tr key={x.FONCTIONNALITE_ID}>
                            <td>{x.FONCTIONNALITE_ID}</td>
                            <td>{x.FONCTIONNALITE_DESCR}</td>
                            <td>
                                <EditIcon onClick={()=>{console.log("edit FUNC:",x.FONCTIONNALITE_ID)}}/>
                                <DeleteIcon onClick={()=>{console.log("delete FUNC:",x.FONCTIONNALITE_ID)}}/>
                            </td>
                        </tr>
                    )
                })}                
            </table>
            </div>
        </div>
    )
}

export default FunctionalityPage
