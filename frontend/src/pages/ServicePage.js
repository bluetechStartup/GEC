import { Button } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/service.scss'
import { getServices, deleteService } from '../redux/serviceReducer';

function ServicePage({history}) {

    const dispatch = useDispatch()
    const { loading, data:services, serviceDeleted, error } = useSelector(state => state.services)
    
    
    useEffect(() => {
        dispatch(getServices())
    }, [])

    useEffect(() => {
        if(serviceDeleted){
            dispatch(getServices())
        }
    }, [serviceDeleted])

    const handleDelete = (id) => dispatch(deleteService(id))
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
                                <EditIcon onClick={()=>{history.push(`/service/${x.SERVICE_ID}`)}}/>
                                <DeleteIcon onClick={()=>handleDelete(x.SERVICE_ID)}/>
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
