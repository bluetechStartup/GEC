import { Button } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/service.scss'
import { getServices } from '../redux/serviceReducer';

function ServicePage({history}) {

    const dispatch = useDispatch()
    const { loading, data:services, error } = useSelector(state => state.services)
    useEffect(() => {
        dispatch(getServices())
    }, [])

    return (
        <div className="wrapperService">
            <div className="service">
                <div>
                    <h2>Services</h2>
                    <Link to="/create-service"><AddIcon/>Add service</Link>
                </div>
                <table>
                    <tr>
                        <th>Service Id</th>
                        <th>Service description</th> 
                        <th></th> 
                    </tr>

                { services?.map((x)=>{
                    return(
                        <tr key={x.SERVICE_ID} className="mailRow">
                            <td>{x.SERVICE_ID}</td>
                            <td>{x.SERVICE_DESCR}</td>
                            <td>
                                <EditIcon onClick={()=>{console.log("edit:",x.SERVICE_ID)}}/>
                                <DeleteIcon onClick={()=>{console.log("delete:",x.SERVICE_ID)}}/>
                            </td>
                        </tr>
                    )
                })}                
            </table>
            </div>
        </div>
    )
}

export default ServicePage
