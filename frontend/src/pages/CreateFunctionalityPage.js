import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import '../styles/passwordReset.scss'
import { addFunctionality,addFuncFinish } from '../redux/functionnalities/functionsActions';

function CreateFunctionalityPage() {

    const dispatch = useDispatch()
    const { loading, functionAdded, error } = useSelector(state => state.singleFunc)

    const [FUNCTIONALITY, setFUNCTIONALITY] = useState()
    const [FUNCTIONALITY_URL, setFUNCTIONALITY_URL] = useState()

    useEffect(() => {
        if(functionAdded?.data.insertId > 0){
            setFUNCTIONALITY("")
            setFUNCTIONALITY_URL("")
            setTimeout(() => {
                dispatch(addFuncFinish())
            }, 2000);
        }
    }, [functionAdded])

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(FUNCTIONALITY)
        dispatch(addFunctionality(FUNCTIONALITY,FUNCTIONALITY_URL))
    }
    return (
        <div className="wrapperNewFunctionality">
            <div className="newFunctionality">
            { loading && <CircularProgress/>}
            { error && <div className="alert error">{error}</div> }
            { functionAdded && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>Functionnality added successfully</div>}
            <h2>Add new functionality</h2>
            <form onSubmit={handleSubmit}>
                <TextField  value={FUNCTIONALITY}  label="Functionality descr" variant="outlined" size="small" onChange={(e)=>setFUNCTIONALITY(e.target.value.trim())} required/>
                <TextField  value={FUNCTIONALITY_URL}  label="Functionality url" variant="outlined" size="small" onChange={(e)=>setFUNCTIONALITY_URL(e.target.value.trim())} required/>
                <Button type="submit">ADD FUNCTIONALITY</Button>
            </form>
            </div>
        </div>
    )
}

export default CreateFunctionalityPage
