import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddCircleIcon  from '@material-ui/icons/AddRounded';
import CheckIcon from "@material-ui/icons/Check";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import moment from 'moment';
import { addCourrier, courrierFinish } from "../redux/courrierReducer"
import "../styles/formsEntrant.scss"
import { addAnnexe, getAnnex, removeAnnexe } from '../redux/annexeReducer';
import { getMouvements } from '../redux/mouvementReducer';
import { getVilles } from '../redux/villeReducer';
import { getCategories } from '../redux/categoryReducer';
import { getPriorities } from '../redux/priorityReducer';
import { getCivilities } from '../redux/civilityReducer';
import { getServices } from '../redux/serviceReducer';
import { getActions } from '../redux/actionsReducer';
import { getStatus } from '../redux/statusReducer';
import { getTypesAnnex } from '../redux/typesAnnexe';
import { getAnnexeCategories } from '../redux/annexeCategoryReducer';
import { getReferantsUsers } from "../redux/ReferantUserReducer"
import { useTranslation } from 'react-i18next';



function CourrierEntrantPage() {

    const { t } = useTranslation()

    const dispatch = useDispatch()
    const { data:{ USER_ID }} = useSelector(state => state.user)
    const {data: courrier, error:errorCourrier} = useSelector(state => state.courrier)
    const {data: annexe, error:errorAnnexe} = useSelector(state => state.annexe)
    const {data: allAnnex} = useSelector(state => state.allAnnex)
    const {data: removedAnnex} = useSelector(state => state.removedAnnex)
    const {data: mouvements} = useSelector(state => state.mouvements)
    const {data: categories} = useSelector(state => state.categories)
    const {data: services} = useSelector(state => state.services)
    const {data: actions} = useSelector(state => state.actions)
    const {data: civilities} = useSelector(state => state.civilities)
    const {data: status} = useSelector(state => state.status)
    const {data: villes} = useSelector(state => state.villes)
    const {data: priorities} = useSelector(state => state.priorities)
    const {data: typesAnnexe} = useSelector(state => state.typesAnnexe)
    const {data: categoriesAnnexe} = useSelector(state => state.annexeCategories)
    const {data: referantUsers} = useSelector(state => state.referantsUsers)


    // fields states for mail
    const [MOUVEMENT_ID, setMOUVEMENT_ID] = useState('')
    const [REFERENCE, setREFERENCE] = useState('')
    const [DATE_RECEPTION, setDATE_RECEPTION] = useState('2021-01-01')
    const [DATE_COURRIER, setDATE_COURRIER] = useState('2021-01-01')
    const [DATE_ENREGISTREMENT] = useState(moment().format("yyyy-MM-DD"))
    const [OBJET, setOBJET] = useState('')
    const [CATEGORIE_COURRIER_ID, setCATEGORIE_COURRIER_ID] = useState('')
    const [PRIORITE_ID, setPRIORITE_ID] = useState('')
    const [CIVILITE_ID, setCIVILITE_ID] = useState('')
    const [EXPEDITEUR_IDENTITE, setEXPEDITEUR_IDENTITE] = useState('')
    const [EXPEDITEUR_ADDRESSE, setEXPEDITEUR_ADDRESSE] = useState('')
    const [EXPEDITEUR_VILLE_ID, setEXPEDITEUR_VILLE_ID] = useState('')
    const [SERVICE_ID, setSERVICE_ID] = useState('')
    const [REFERENT_USER_ID, setREFERENT_USER_ID] = useState('')
    const [ACTION_ID, setACTION_ID] = useState('')
    const [STATUT_ID, setSTATUT_ID] = useState('')
    const [file, setFile] = useState(null)
    const [TYPE_DE_COURRIER, setTYPE_DE_COURRIER] = useState('')

    // fiels states for annexe 
    const [ANNEXE, setANNEXE] = useState(null)
    const [CATEGORIE_ANNEXE_ID, setCATEGORIE_ANNEXE_ID] = useState(null)
    const [TYPE_ANNEXE_ID, setTYPE_ANNEXE_ID] = useState(null)
    const [NOM_PIECE, setNOM_PIECE] = useState(null)
    const [COURRIER_ID, setCOURRIER_ID] = useState(null)
    
    const data = {
        MOUVEMENT_ID,
        REFERENCE,
        DATE_RECEPTION,
        DATE_COURRIER,
        DATE_ENREGISTREMENT,
        OBJET,
        CATEGORIE_COURRIER_ID,
        PRIORITE_ID,
        CIVILITE_ID,
        EXPEDITEUR_IDENTITE,
        EXPEDITEUR_ADDRESSE,
        EXPEDITEUR_VILLE_ID,
        SERVICE_ID,
        REFERENT_USER_ID,
        ACTION_ID,
        STATUT_ID,
        file,
        USER_ID
    }

    // side effects functions

    useEffect(() => {
        dispatch(getMouvements())
        dispatch(getVilles())
        dispatch(getCategories())
        dispatch(getPriorities())
        dispatch(getCivilities())
        dispatch(getServices())
        dispatch(getActions())
        dispatch(getStatus())
        dispatch(getTypesAnnex())
        dispatch(getAnnexeCategories())
    }, [])


    useEffect(() => {
        if(courrier?.insertId > 0){
            setCOURRIER_ID(courrier?.insertId)
            toRegister()
        }
    }, [courrier])

    useEffect(() => {
        if(annexe || removedAnnex){
            dispatch(getAnnex(COURRIER_ID))
            setCATEGORIE_ANNEXE_ID("")
            setTYPE_ANNEXE_ID("")
            setNOM_PIECE("")
            setANNEXE(null)
        }
    }, [annexe,removedAnnex])


    const handleFirstStep = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        for(const x in data) {
            formData.append(x, data[x]);
        }
        dispatch(addCourrier(formData))
    }

    const submitAnnexe = (e)=>{
        e.preventDefault()
        if(!ANNEXE) return
        const dataAnnexe = new FormData(e.target)
        dispatch(addAnnexe(COURRIER_ID,dataAnnexe))
        
    }

    const removeAnnex = (id) =>{
        dispatch(removeAnnexe(id))
    }

    const [steps, setSteps] = useState({
        id: true,
        register: false,
        validation: false,
    });

    const [forms, setForms] = useState({
    id: true,
    register: false,
    validation: false,
    });

    const stepClass = (step) =>
    step ? "indicator__icon active" : "indicator__icon";

    // form steps functions

    const toRegister = () => {
        setSteps({ ...steps, register: true, validation: false });
        setForms({ ...forms, id: false, register: true, validation: false });
    };

    const toId = () => {
        setSteps({ ...steps, register: false, validation: false });
        setForms({ ...forms, id: true, register: false, validation: false });
    };

    const toValidation = () => {
        setSteps({ ...steps, register: true, validation: true });
        setForms({ ...forms, id: false, register: false, validation: true });
        dispatch(courrierFinish())
    };

    return (
        <>
        {mouvements && categoriesAnnexe && priorities && categories && services && actions && civilities && status && villes && typesAnnexe ? 
        <div className="formsEntrant">
            <div>
                <h2>{t("Mail")}</h2>
            </div>
            <div className="formStep">
                <div className="formStep__indicator">
                    <div className="indicator">
                        <div className="indicator__info">
                        <div className={stepClass(steps.id)}>
                            {steps.id && <CheckIcon />}
                        </div>
                        <h5>{t("First step")}</h5>
                        </div>
                        <div className="indicator__bar"></div>
                    </div>
                    <div className="indicator">
                        <div className="indicator__info">
                        <div className={stepClass(steps.register)}>
                            {steps.register && <CheckIcon />}
                        </div>
                        <h5>{t("Second step")}</h5>
                        </div>
                        <div className="indicator__bar"></div>
                    </div>
                    <div className="indicator">
                        <div className="indicator__info">
                        <div className={stepClass(steps.validation)}>
                            {steps.validation && <CheckIcon />}
                        </div>
                        <h5>{t("Third step")}</h5>
                        </div>
                    </div>
                </div>
            </div>

            {forms.id && ( <>
            {courrier?.loading && <div className="loader"><CircularProgress/></div>}
            { errorCourrier && <div className="alert error">{errorCourrier}</div> }
            <form onSubmit={handleFirstStep} >
            <div className="form_group">
                <TextField label="Reference" variant="outlined" value={REFERENCE} onChange={(e)=>setREFERENCE(e.target.value)} required size="small"/>
                <FormControl variant="outlined" size="small">
                    <InputLabel>Mouvement ID</InputLabel>
                    <Select label="Mouvement ID" value={MOUVEMENT_ID} onChange={(e)=>setMOUVEMENT_ID(e.target.value)} required>
                    <MenuItem value=" ">None</MenuItem>
                    { mouvements?.map((x)=>{
                        return(<MenuItem key={x.MOUVEMENT_ID} value={x.MOUVEMENT_ID}>{x.MOUVEMENT_DESCR}</MenuItem>)
                    })}
                    </Select>
                </FormControl>
            </div>
            
            <div className="form__bloc">
                <div className="left">
                    <div className="date">
                        <h4>Date</h4>
                        <TextField label={t("Mail date")} type="date" variant="outlined" value={DATE_RECEPTION} onChange={(e)=>setDATE_RECEPTION(e.target.value)} size="small"/>
                        <TextField label={t("Receipt date")} type="date" variant="outlined" value={DATE_COURRIER} onChange={(e)=>setDATE_COURRIER(e.target.value)} size="small"/>
                        <TextField label={t("Registration date")} type="date" variant="outlined" value={DATE_ENREGISTREMENT} InputProps={{readOnly: true}} size="small"/>
                    </div>
                    <div className="expediteur">
                        <h4>{t("Sender")}</h4>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>{t("Civility")}</InputLabel>
                            <Select label={t("Civility")} value={CIVILITE_ID} onChange={(e)=>setCIVILITE_ID(e.target.value)} required>
                            <MenuItem value="">None</MenuItem>
                            { civilities?.map((x)=>{
                                return(<MenuItem key={x.CIVILITE_ID} value={x.CIVILITE_ID}>{x.CIVILITE_DESCR}</MenuItem>)
                            }) }
                            </Select>
                        </FormControl>
                        <TextField label={t("Sender")} variant="outlined" value={EXPEDITEUR_IDENTITE} onChange={(e)=>setEXPEDITEUR_IDENTITE(e.target.value)} required size="small"/>
                        <TextField label="Sender address" variant="outlined" value={EXPEDITEUR_ADDRESSE} onChange={(e)=>setEXPEDITEUR_ADDRESSE(e.target.value)} required size="small"/>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>{t("City")}</InputLabel>
                            <Select label={t("City")} value={EXPEDITEUR_VILLE_ID} onChange={(e)=>setEXPEDITEUR_VILLE_ID(e.target.value)} required>
                            <MenuItem value="">None</MenuItem>
                            { villes?.map((x)=>{
                                return(<MenuItem key={x.VILLE_ID} value={x.VILLE_ID}>{x.VILLE_DESCR}</MenuItem>)
                            }) }
                            </Select>
                        </FormControl>
                    </div>
                    
                </div>
                <div className="right">   
                    <div className="object">
                        <h4>{t("Object")}</h4>
                        <TextField label={t("Object")} variant="outlined" value={OBJET} onChange={(e)=>setOBJET(e.target.value)} required size="small"/>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>{t("Courrier category")}</InputLabel>
                            <Select label={t("Courrier category")} value={CATEGORIE_COURRIER_ID} onChange={(e)=>setCATEGORIE_COURRIER_ID(e.target.value)} required>
                            <MenuItem value="">None</MenuItem>
                            { categories?.map((x)=>{
                                return(<MenuItem key={x.CATEGORIE_COURRIER_ID} value={x.CATEGORIE_COURRIER_ID}>{x.COURRIER_DESCR}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>{t("Priority")}</InputLabel>
                            <Select
                            label={t("Priority")}
                            value={PRIORITE_ID}
                            onChange={(e)=>setPRIORITE_ID(e.target.value)}
                            required
                            >
                            <MenuItem value="">None</MenuItem>
                            { priorities?.map((x)=>{
                                return(<MenuItem key={x.PRIORITE_ID} value={x.PRIORITE_ID}>{x.PRIORITE_DESCR}</MenuItem>)
                            }) }
                            </Select>
                        </FormControl>
                    </div>         
                    <div className="destinateur">
                        <h4>{t("Receiver")}</h4>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>Service</InputLabel>
                            <Select label="Service" value={SERVICE_ID} 
                            onChange={ (e)=>{setSERVICE_ID(e.target.value)
                                e.target.value && dispatch(getReferantsUsers(parseInt(e.target.value)))
                            }} 
                            required>
                            <MenuItem value="">None</MenuItem>
                            {  services?.map((x)=>{
                                return(<MenuItem key={x.SERVICE_ID} value={x.SERVICE_ID}>{x.SERVICE_DESCR}</MenuItem>)
                            }) }
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>Action</InputLabel>
                            <Select label="Action" value={ACTION_ID} onChange={(e)=>setACTION_ID(e.target.value)} required>
                            <MenuItem value="">None</MenuItem>
                            { actions?.map((x)=>{
                                return(<MenuItem key={x.ACTION_ID} value={x.ACTION_ID}>{x.ACTION_DESCR}</MenuItem>)
                            }) }
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>Status</InputLabel>
                            <Select label="Status" value={STATUT_ID} onChange={(e)=>setSTATUT_ID(e.target.value)} required>
                            <MenuItem value="">None</MenuItem>
                            { status?.map((x)=>{
                                return(<MenuItem key={x.STATUT_ID} value={x.STATUT_ID}>{x.STATUT_DESCR}</MenuItem>)
                            }) }
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" size="small">
                            <InputLabel>{t("Referrer")}</InputLabel>
                            <Select label={t("Referrer")} value={REFERENT_USER_ID} onChange={(e)=>setREFERENT_USER_ID(e.target.value)} required
                            disabled={SERVICE_ID && !referantUsers?.length <= 0 ? false : true}
                            >
                            <MenuItem value="">None</MenuItem>
                            { referantUsers && referantUsers?.map((x)=>{
                                return(<MenuItem key={x.USER_ID} value={x.USER_ID}>{x.FIRST_NAME}</MenuItem>)
                            }) }
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div> 
            <div className="file-courier">
                <label htmlFor="file"><AddCircleIcon/></label>
                <input id="file" name="file" type="file" onChange={(e)=>setFile(()=>e.target.files[0])} required/>
                <p>{file ? t("File selected") : t("Please select file") }</p>
            </div>
            <Button type="submit" className="btn_next">{t("Continue")}</Button>
            </form>
            </>) }

            {forms.register && (
            <div>
                <div className="pieceJoint">
                    {errorAnnexe && <div className="alert error"><ErrorOutlineIcon/>{errorAnnexe}</div>}
                    {/* {annexe && <div className="alert success"><CheckCircleOutlineOutlinedIcon/>File has joined successfully</div>} */}
                    <h4>Attachments</h4>
                    <form onSubmit={submitAnnexe} encType="multipart/form-data">
                        <div className="form_group">
                            
                            <FormControl variant="outlined" size="small">
                                <InputLabel>Attachment category</InputLabel>
                                <Select label="Attachment category"
                                name="CATEGORIE_ANNEXE_ID"
                                value={CATEGORIE_ANNEXE_ID}
                                onChange={(e)=>setCATEGORIE_ANNEXE_ID(e.target.value)}
                                required
                                >
                                <MenuItem value="">None</MenuItem>
                                { categoriesAnnexe.map((x)=>{
                                    return(<MenuItem key={x.CATEGORIE_ANNEXE_ID} value={x.CATEGORIE_ANNEXE_ID}>{x.CATEGORIE_ANNEXE_DESCR}</MenuItem>)
                                })}
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" size="small">
                                <InputLabel>Attachment type</InputLabel>
                                <Select
                                name="TYPE_ANNEXE_ID"
                                label="Attachment type"
                                value={TYPE_ANNEXE_ID}
                                onChange={e=>setTYPE_ANNEXE_ID(e.target.value)}
                                required
                                >
                                <MenuItem value="">None</MenuItem>
                                { typesAnnexe.map((x)=>{
                                    return(<MenuItem key={x.TYPE_ANNEXE_ID} value={x.TYPE_ANNEXE_ID}>{x.TYPE_ANNEXE_DESCR}</MenuItem>)
                                }) }
                                
                                <MenuItem value={2}>Type annexe 2</MenuItem>
                                </Select>
                            </FormControl>
                            
                        </div>
                        <TextField label="Attachment name" variant="outlined" className="lastTextField"
                        name="NOM_PIECE"
                        value={NOM_PIECE}
                        onChange={e=>setNOM_PIECE(e.target.value)}
                        size="small"
                        required
                        />
                        <div className="fileWrapper">
                            <div className="file">
                                
                                <input id="annexe" name="file" type="file" onChange={e=>setANNEXE(()=>e.target.files[0])} required/>
                                
                                <p>{ANNEXE ? "File selected" :"Please select file here" }</p>
                                <label htmlFor="annexe"><AddCircleIcon/></label>
                                <Button type="submit">{t("Attach")}</Button>
                            </div>
                        </div>
                    </form>
                </div>
                { allAnnex && allAnnex.length > 0 &&
                <div className="annexTable">
                <h2>Attachments</h2>
                <table>
                    <tr>
                        <td>Type annexe</td>
                        <td>Category annexe</td>
                        <td>Annexe</td>
                        <td></td>
                    </tr>
                    {allAnnex.map((x)=>{
                    return(
                        <tr>
                            <td>{x.TYPE_ANNEXE_DESCR}</td>
                            <td>{x.CATEGORIE_ANNEXE_DESCR}</td>
                            <td>{x.NOM_PIECE}</td>
                            <td><RemoveCircleOutlineIcon onClick={()=>removeAnnex(x.COURRIER_ANNEXE_ID)}/></td>
                        </tr>)
                    })}
                </table>
                </div>}
                
                <div className="group_btn">
                    <Button className="btn_next" onClick={toValidation}>{t("Save")}</Button>
                </div>                
                
            </div>)}

            { forms.validation && 
            
            <div className="validation">
                <h2>You have registred the mail successfully</h2>
                <CheckCircleIcon/>
            </div>}            
        </div>:<div class="loadingBloc"><CircularProgress/><p>Please wait loading all datas</p></div>}
        </>
    )
}

export default CourrierEntrantPage
