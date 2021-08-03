import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Link } from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import '../styles/passwordReset.scss'
import { addFuncFinish, getFunc, updateFunctionality } from '../redux/functionnalities/functionsActions';

function UpdateFunctionalityPage({ match,history }) {

    const id = parseInt(match.params.id)

    const dispatch = useDispatch()
    const { loading, data:functionRetreived, functionUpdated, error } = useSelector(state => state.singleFunc)

    const [FUNCTIONALITY, setFUNCTIONALITY] = useState("")
    const [FUNCTIONALITY_URL, setFUNCTIONALITY_URL] = useState("")

    useEffect(() => {
        dispatch(getFunc(id))
    }, [])

    useEffect(() => {
        if(functionRetreived){
            setFUNCTIONALITY(functionRetreived?.data.FONCTIONNALITE_DESCR)
            setFUNCTIONALITY_URL(functionRetreived?.data.FONCTIONNALITE_URL)
        }
    }, [functionRetreived])

    useEffect(() => {
        if(functionUpdated){
            setFUNCTIONALITY("")
            setFUNCTIONALITY_URL("")
            setTimeout(() => {
                dispatch(addFuncFinish())
                history.push("/functionalities")
            }, 2000);
        }
    }, [functionUpdated])

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateFunctionality(id,FUNCTIONALITY,FUNCTIONALITY_URL))
    }
    return (
        <div className="wrapperNewFunctionality">
            <Link to="/functionalities"><BackspaceIcon/></Link>
            <div className="newFunctionality">
            { loading && <CircularProgress/>}
            { error && <div className="alert error">{error}</div> }
            { functionUpdated && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>Functionnality updated successfully</div>}
            <h2>Update functionality</h2>
            <form onSubmit={handleSubmit}>
                <TextField  value={FUNCTIONALITY}  label="Functionality descr" variant="outlined" size="small" onChange={(e)=>setFUNCTIONALITY(e.target.value.trim())} required/>
                <TextField  value={FUNCTIONALITY_URL}  label="Functionality url" variant="outlined" size="small" onChange={(e)=>setFUNCTIONALITY_URL(e.target.value.trim())} required/>
                <Button type="submit">UPDATE FUNCTIONALITY</Button>
            </form>
            </div>
        </div>
    )
}

export default UpdateFunctionalityPage
