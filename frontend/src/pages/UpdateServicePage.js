import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Link } from "react-router-dom"
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import '../styles/passwordReset.scss'
import { addService, addServiceFinish, getSingleService, updateService } from '../redux/serviceReducer';
import { getHierarchies } from '../redux/hierarchieReducer';

function UpdateServicePage({ match }) {

    const id = parseInt(match.params.id)

    const dispatch = useDispatch()
    const { loading, serviceRetrieved, serviceUpdated, error } = useSelector(state => state.services)
    const { data:hierarchies } = useSelector(state => state.hierarchies)
    const [SERVICE, setSERVICE] = useState("")
    const [SERVICE_DEP, setSERVICE_DEP] = useState("")
    const [HIERARCHIE, setHIERARCHIE] = useState("")


    useEffect(() => {
        dispatch(getSingleService(id))
        dispatch(getHierarchies())
    }, [])

    useEffect(() => {
        if(serviceUpdated){
            setTimeout(() => {
                dispatch(addServiceFinish())
            }, 2000);
        }
    }, [serviceUpdated])

    useEffect(() => {
        if(serviceRetrieved){
            setSERVICE(serviceRetrieved[0].SERVICE_DESCR)
            setSERVICE_DEP(1)
            setHIERARCHIE(serviceRetrieved[0].HIERARCHIE_ID)
        }
    }, [serviceRetrieved])

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(SERVICE,SERVICE_DEP,HIERARCHIE)
        dispatch(updateService(id,SERVICE, SERVICE_DEP, HIERARCHIE))

    }
    return (
        <div className="wrapperNewService">
            <Link to="/service"><BackspaceIcon/></Link>
            <div className="newService">
            { loading && <CircularProgress/>}
            { error && <div className="alert error">{error}</div> }
            { serviceUpdated && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>Service added successfully</div>}
            <h2>Update service</h2>
            <form onSubmit={handleSubmit}>
                <TextField  value={SERVICE} name="SERVICE" label="Service name" variant="outlined" size="small" onChange={(e)=>setSERVICE(e.target.value.trim())} required/>
                <FormControl variant="outlined" size="small">
                    <InputLabel>Hierarchie</InputLabel>
                    <Select label="Hierarchie" value={HIERARCHIE} onChange={(e)=>setHIERARCHIE(e.target.value)} required>
                    <MenuItem value=" ">None</MenuItem>
                    { hierarchies && hierarchies.map((x)=>{
                        return(<MenuItem key={x.HIERARCHIE_ID} value={x.HIERARCHIE_ID}>{x.HIERARCHIE_DESCR}</MenuItem>)
                    })}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" size="small">
                    <InputLabel>Service dependante</InputLabel>
                    <Select label="Service dependante" value={SERVICE_DEP} onChange={(e)=>setSERVICE_DEP(e.target.value)} required>
                    <MenuItem value=" ">None</MenuItem>
                    <MenuItem value={1}>DEP1</MenuItem>
                    <MenuItem value={1}>DEP2</MenuItem>
                    <MenuItem value={3}>DEP2</MenuItem>
                    {/* { profiles?.data && profiles?.data.map((x)=>{
                        return(<MenuItem key={x.PROFIL_ID} value={x.PROFIL_ID}>{x.PROFIL_DESCR}</MenuItem>)
                    }) } */}
                    </Select>
                </FormControl>
                <Button type="submit">UPDATE SERVICE</Button>
            </form>
            </div>
        </div>
    )
}

export default UpdateServicePage
