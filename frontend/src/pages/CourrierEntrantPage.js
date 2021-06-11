import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "../styles/formsEntrant.scss"

function CourrierEntrantPage() {
    return (
        <div className="formsEntrant">
            <div>
                <h2>Courrier Entrant</h2>
            </div>
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
            </div>
            <Button>Souvegarder</Button>
        </div>
    )
}

export default CourrierEntrantPage
