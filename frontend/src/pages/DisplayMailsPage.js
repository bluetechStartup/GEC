import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllMailsByUser } from '../redux/allCourriersReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import "../styles/displayMails.scss"

function DisplayMailsPage({history}) {

    const dispatch = useDispatch()
    const { loading, data:mails, error } = useSelector(state => state.allMailsByUser)
    const { data:{ USER_ID } } = useSelector(state => state.user)
    useEffect(() => {
        dispatch(getAllMailsByUser(parseInt(USER_ID)))
    }, [])

    const handleMail = id => console.log("courrier id: ",id)

    return (
        <div className="displayMails">
            <div className="displayMails_header">
                <h2>Mails({mails?.reduce((n,x)=> {return n+1}, 0)})</h2>
                <FormControl variant="outlined" size="small">
                    <InputLabel>Category</InputLabel>
                    <Select label="Category" value=""  required>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="1">category1</MenuItem>
                    <MenuItem value="2">category2</MenuItem>
                    <MenuItem value="2">category2</MenuItem>
                    <MenuItem value="3">category2</MenuItem>
                    {/* { profiles?.data && profiles?.data.map((x)=>{
                        return(<MenuItem key={x.PROFIL_ID} value={x.PROFIL_ID}>{x.PROFIL_DESCR}</MenuItem>)
                    }) } */}
                    </Select>
                </FormControl>
            </div>
            
            { loading && <div className="loadMails"><CircularProgress/></div> }
            { mails?.length > 0  ? 
            <table>
                <tr>
                    <th>Reference</th>
                    <th>Receipt date</th>
                    <th>Mail date</th>
                    <th>Registration date</th>
                    <th>Objet</th>
                    
                </tr>
                { mails.map((x)=>{
                    return(
                        <tr key={x.COURRIER_ID} onClick={()=>history.push(`/mails/${x.COURRIER_ID}`)} className="mailRow">
                            <td>{x.REFERENCE}</td>
                            <td>{x.DATE_RECEPTION}</td>
                            <td>{x.DATE_COURRIER}</td>
                            <td>{x.DATE_ENREGISTREMENT}</td>
                            <td>{x.OBJET}</td> 
                        </tr>
                    )
                })}
                
                
                
            </table> : <h3>There is no mail !</h3>}
        </div>
    )
}

export default DisplayMailsPage
