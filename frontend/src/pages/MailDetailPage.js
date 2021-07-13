import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCourrier } from '../redux/courrierReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import { Link } from "react-router-dom"
import "../styles/mailDetail.scss"
import { getAnnex } from '../redux/annexeReducer';

function MailDetailPage({match}) {

    const id = parseInt(match.params.id)
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state => state.courrier)
    const { loading:loadAnnex, data:allAnnex, error:errorAnnex } = useSelector(state => state.allAnnex)

    useEffect(() => {
        dispatch(getCourrier(id))
    }, [])

    useEffect(() => {
       data && dispatch(getAnnex(data?.COURRIER_ID))
    }, [data])

    return (
        
        <div className="mailDetail">
            <Link to="/mails"><BackIcon /></Link>                        
            { loading && <div className="loader"><CircularProgress/></div>}
            { error && <div className="alert error"><ErrorIcon/>{error}</div>}
            { data &&
            <>
            <h2>Vue global</h2>
            <div className="mailDetailInfoTop">
                <div className="mailDetailInfoTop_left">
                    <p><strong>Courrier</strong>: {data?.COURRIER_ID}</p>
                    <p><strong>Objet</strong>: {data?.OBJET}</p>
                    <p><strong>Date de reception</strong>: {data?.DATE_RECEPTION}</p>
                    <p><strong>Date d'enregistrement</strong>: {data?.DATE_ENREGISTREMENT}</p>
                </div>
                <div className="mailDetailInfoTop_right">
                    <p><strong>Exp</strong>: {data?.EXPEDITEUR_IDENTITE}</p>
                    <p><strong>Ville</strong>: {data?.VILLE_DESCR}</p>
                    <p><strong>Addr Exp</strong>: {data?.EXPEDITEUR_ADDRESSE}</p>
                    {/* <p>Email: {}</p> */}
                </div>
            </div>
            <div className="mailDetailInfoMiddle">
                <p><strong>Service Acc</strong>: {data?.SERVICE_DESCR}</p>
                <p><strong>Reference</strong>: {data?.REFERENCE}</p>
            </div>
            <div className="mailDetailInfoBottom">
                <div className="mailDetailInfoTop_left">
                    { allAnnex ? 
                    <>
                    <h3>Pieces jointes</h3>
                    <table>
                        <tr>
                            <th>Nom</th>
                            <th>Categorie</th>
                        </tr>
                    {allAnnex.map((x)=>{
                        return(<tr>
                                 <td>{x.NOM_PIECE}</td>
                                 <td>{x.CATEGORIE_ANNEXE_DESCR}</td>
                              </tr>)})
                    }
                    </table>
                   
                    </>:<p>Y a pas d'annexes</p>
                    }
                </div>
                <div className="mailDetailInfoTop_right">
                    <h3>Traitement</h3>
                    <p><strong>Exp</strong>: </p>
                    <p><strong>Ville</strong>: </p>
                    <p><strong>Tel Exp</strong>: </p>
                    <p><strong>Email</strong>: </p>
                </div>
            </div>
            </>}
        </div>
        
    )
}

export default MailDetailPage
