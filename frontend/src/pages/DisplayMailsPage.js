import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { filterMailsByCategory, getAllMailsByUser } from '../redux/allCourriersReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import "../styles/displayMails.scss"
import { getCategories } from '../redux/categoryReducer';
import moment from 'moment';
// import 'moment/locale/fr';

function DisplayMailsPage({history}) {

    // moment.locale('en');
    const dispatch = useDispatch()
    const { loading, data:mails, error } = useSelector(state => state.allMailsByUser)
    const { data:{ USER_ID } } = useSelector(state => state.user)
    const { data: categories} = useSelector(state => state.categories)

    const [CATEGORIE, setCATEGORIE] = useState("")

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getAllMailsByUser(parseInt(USER_ID)))
    }, [])

    useEffect(() => {
        console.log("ID",CATEGORIE)
        CATEGORIE ? dispatch(filterMailsByCategory(USER_ID,CATEGORIE)) : dispatch(getAllMailsByUser(parseInt(USER_ID)))
    }, [CATEGORIE])

    return (
        <div className="displayMails">
            <div className="displayMails_header">
                <h2>Mails({mails?.reduce((n,x)=> {return n+1}, 0)})</h2>
                <FormControl variant="outlined" size="small">
                    <InputLabel>Category</InputLabel>
                    <Select label="Category" value={CATEGORIE} onChange={(e)=>{
                        setCATEGORIE(e.target.value)  
                    }} required>
                    <MenuItem value="">None</MenuItem>
                    { categories && categories?.map((x)=>{
                        return(<MenuItem key={x.CATEGORIE_COURRIER_ID} value={x.CATEGORIE_COURRIER_ID}>{x.COURRIER_DESCR}</MenuItem>)
                    }) }
                    </Select>
                </FormControl>
            </div>
            
            { loading && <div className="loadMails"><CircularProgress/></div> }
            { mails?.length > 0  ? 
            <table>
                {/* <tr>
                    <th>Sender</th>
                    <th>Receipt</th>
                    <th>Mail date</th>
                    <th>Registration</th>
                    <th>Objet</th>
                    
                </tr> */}
                { mails.map((x)=>{
                    return(
                        <tr key={x.COURRIER_ID} onClick={()=>window.open(`/mails/${x.COURRIER_ID}`)} className="mailRow">
                            <td><strong>{x.EXPEDITEUR_IDENTITE}</strong></td>
                            {/* <td>{moment(x.DATE_RECEPTION).format("LL")}</td>
                            <td>{moment(x.DATE_COURRIER).format("LL")}</td> */}
                            <td>{x.OBJET}</td> 
                            <td>{x.ACTION_DESCR}</td>
                            <td>{moment(x.DATE_ENREGISTREMENT).format("LL")}</td>
                        </tr>
                    )
                })}
                
                
                
            </table> : <h3>There is no mail !</h3>}
        </div>
    )
}

export default DisplayMailsPage
