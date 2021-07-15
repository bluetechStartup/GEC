import React,{ useState, useEffect} from 'react'
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
import { getCategories } from '../redux/categoryReducer';
import { getAllUsers } from '../redux/user/userActions';
// import "../styles/regles.scss"
import '../styles/passwordReset.scss'
import { addRule } from '../redux/ReglesReducer';

function ReglesPage() {

    const dispatch = useDispatch()
    const { data:categories } = useSelector(state => state.categories)
    const { data:users } = useSelector(state => state.allUsers)
    const { loading, ruleAdded, error } = useSelector(state => state.regles)

    const [CATEGORIE, setCATEGORIE] = useState("")
    const [PERSONNE, setPERSONNE] = useState("")
    const [HEURE, setHEURE] = useState("")

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getAllUsers())
        
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("heure: ",HEURE, "PERSONID: ",PERSONNE,"CATEGORIYID: ", CATEGORIE)
        dispatch(addRule(HEURE, PERSONNE, CATEGORIE))

    }

    return (
        <div className="wrapperReglesPage">
            <Link to="/service"><BackspaceIcon/></Link>
            <div className="reglesPage">
            { loading && <CircularProgress/>}
            { error && <div className="alert error">{error}</div> }
            { ruleAdded && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>Service added successfully</div>}
                <h2>Add new rule</h2>
                <form onSubmit={handleSubmit}>
                    <div className="regles_form">
                        <TextField  value={HEURE} type="number" label="Nombre d'heure" variant="outlined" size="small" onChange={(e)=>setHEURE(e.target.value.trim())} required/>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>Category</InputLabel>
                            <Select label="Category" value={CATEGORIE} onChange={(e)=>setCATEGORIE(e.target.value)} required>
                            <MenuItem value=" ">None</MenuItem>
                            { categories && categories.map((x)=>{
                                return(<MenuItem key={x.CATEGORIE_COURRIER_ID} value={x.CATEGORIE_COURRIER_ID}>{x.COURRIER_DESCR}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>Personne</InputLabel>
                            <Select label="Personne" value={PERSONNE} onChange={(e)=>setPERSONNE(e.target.value)} required>
                            <MenuItem value=" ">None</MenuItem>
                            { users && users?.data.map((x)=>{
                                return(<MenuItem key={x.USER_ID} value={x.USER_ID}>{x.FIRST_NAME}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    </div>
                    <Button type="submit">ADD RULE</Button>
                </form>
            </div>
        </div>
    )
}

export default ReglesPage
