import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllMailsByUser } from '../redux/allCourriersReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
import "../styles/displayMails.scss"

function DisplayMailsPage() {

    const dispatch = useDispatch()
    const { loading, data:mails, error } = useSelector(state => state.allMailsByUser)
    const { data:{ USER_ID } } = useSelector(state => state.user)
    useEffect(() => {
        dispatch(getAllMailsByUser(parseInt(USER_ID)))
    }, [])

    const handleMail = id => console.log("courrier id: ",id)

    return (
        <div className="displayMails">
            <h2>Mails({mails?.reduce((n,x)=> {return n+1}, 0)})</h2>
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
                        <tr key={x.COURRIER_ID} onClick={()=>handleMail(x.COURRIER_ID)} className="mailRow">
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
