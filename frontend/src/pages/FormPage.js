import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import "../styles/forms.scss"
import { Button } from '@material-ui/core';

function FormPage() {
    return (
        <div className="forms">
            <TextField label="No de reference" variant="outlined" />
            <div>
                <FormControl variant="outlined" >
                    <InputLabel >Type de contenu</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    label="Type de contenu"
                    >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="form__bloc1">
                <FormControl variant="outlined" >
                    <InputLabel>Entrant/Sortant</InputLabel>
                    <Select
                    label="Entrant/Sortant"
                    >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value={10}>Entrant</MenuItem>
                    <MenuItem value={20}>Sortant</MenuItem>
                    <MenuItem value={30}>Reponse</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Object" variant="outlined" />
            </div>
            <div className="form__bloc2">
                <div className="expediteur">
                    <h4>Expediteur</h4>
                    <TextField label="Nom et Prenom" variant="outlined" />
                    <TextField label="Address" variant="outlined" />
        
                    <TextField
                        label="Date du courrier"
                        type="date"
                        variant="outlined"
                        defaultValue="2021-01-01"
                    />
                </div>
                <div className="destinataire">
                    <h4>Destination</h4>
                    <FormControl variant="outlined" >
                        <InputLabel>Service</InputLabel>
                        <Select
                        label="Service"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Directeur generale</MenuItem>
                        <MenuItem value={20}>Directeur AF</MenuItem>
                        <MenuItem value={30}>Directeur Com</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Referrant</InputLabel>
                        <Select
                        label="Referrant"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>Mathias</MenuItem>
                        <MenuItem value={20}>Mélanie</MenuItem>
                        <MenuItem value={30}>Emile</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel>Action</InputLabel>
                        <Select
                        label="Action"
                        >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>A traite</MenuItem>
                        <MenuItem value={20}>A envoyer</MenuItem>
                        <MenuItem value={30}>A Executer</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Button>Souvegarder</Button>
        </div>
    )
}

export default FormPage
