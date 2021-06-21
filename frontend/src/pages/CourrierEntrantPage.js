import React,{ useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckIcon from "@material-ui/icons/Check";
import "../styles/formsEntrant.scss"


function CourrierEntrantPage() {

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
    };

    return (
        <div className="formsEntrant">
            <div>
                <h2>Courrier Entrant</h2>
            </div>
            <div className="formStep">
                <div className="formStep__indicator">
                    <div className="indicator">
                        <div className="indicator__info">
                        <div className={stepClass(steps.id)}>
                            {steps.id && <CheckIcon />}
                        </div>
                        <h5>first step</h5>
                        </div>
                        <div className="indicator__bar"></div>
                    </div>
                    <div className="indicator">
                        <div className="indicator__info">
                        <div className={stepClass(steps.register)}>
                            {steps.register && <CheckIcon />}
                        </div>
                        <h5>second step</h5>
                        </div>
                        <div className="indicator__bar"></div>
                    </div>
                    <div className="indicator">
                        <div className="indicator__info">
                        <div className={stepClass(steps.validation)}>
                            {steps.validation && <CheckIcon />}
                        </div>
                        <h5>third step</h5>
                        </div>
                    </div>
                </div>
            </div>

            {forms.id && ( <>
            <TextField label="No de reference" variant="outlined" />
            <div className="form__bloc1">
                <div className="date">
                    <h4>Date</h4>
                    <TextField
                        label="Date du courrier"
                        type="date"
                        variant="outlined"
                        defaultValue="2021-01-01"
                    />
                    <TextField label="Date du courrier" type="date" variant="outlined" defaultValue="2021-01-01"/>
                    <TextField label="Date du courrier" type="date" variant="outlined" defaultValue="2021-01-01"/>
                </div>
                <div className="details">
                    <h4>Details</h4>
                    <FormControl variant="outlined" >
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div> 
            <Button onClick={toRegister}>next</Button>
            </>) }

            {forms.register && (
            <div className="form__bloc2">
                <div className="expediteur">
                    <h4>expediteur</h4>
                    <FormControl variant="outlined" >
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="destinataire">
                    <h4>Destinataire</h4>
                    <FormControl variant="outlined">
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Object</InputLabel>
                        <Select
                        label="Object"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="piece">
                    <h4>Pièce joint</h4>
                    <FormControl variant="outlined" >
                        <InputLabel>Categorie</InputLabel>
                        <Select
                        label="Categorie"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Type de piece</InputLabel>
                        <Select
                        label="Type de piece"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField label="Nom de pièce" variant="outlined" />
                    <AddCircleIcon className="btn"/>
                </div>
                <div style={{ display:"flex" }}>
                    <Button onClick={toId}>prev</Button>
                    <Button onClick={toValidation}>next</Button>
                </div>                
                
            </div>)}

            { forms.validation && <Button onClick={toRegister}>prev</Button>}
            
        </div>
    )
}

export default CourrierEntrantPage
