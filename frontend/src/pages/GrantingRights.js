import React,{ useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import '../styles/grantingRights.scss'

function GrantingRights() {
    
    const [rights, setRights] = useState({
        post:false,
        delete:false,
        update:false,
        get:false
    })


    const handleChange = (e) =>{
        setRights({
            ...rights,
            [e.target.name]: e.target.checked
        })
        
    }
    return (
        <div className="wrapperGranting">
            <div className="granting">
                <div className="granting__left">
                    <div className="forms">
                        <FormControl variant="outlined" >
                            <InputLabel >User</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            label="User"
                            >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={10}>Pierre</MenuItem>
                            <MenuItem value={20}>Jean</MenuItem>
                            <MenuItem value={30}>Francis</MenuItem>
                            
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" >
                            <InputLabel >Routes</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            label="Routes"
                            >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={10}>Utilisateurs</MenuItem>
                            <MenuItem value={20}>Admin</MenuItem>
                            <MenuItem value={30}>Assistant</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {/* <h4 className="msgInfo">Please select a user</h4> */}
                    
                    <div className="checks">
                        <div>
                            <p>Grant a user the right to create</p>
                            <Switch
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                        <div><p>Grant a user the right to update</p>
                            <Switch
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                        <div><p>Grant a user the right to delete</p>
                            <Switch
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                        <div><p>Grant a user the right to retrieve</p>
                            <Switch
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></div>
                    </div>
                    <Button>Grant rights</Button>

                    
                </div>
                <div className="granting__right">
                    <div className="table">
                        {/* <h3>There is no user selected</h3> */}
                        <h3>Pierre</h3>
                        <table>
                            <tr>
                                <th>Route</th>
                                <th>Rights</th>
                                
                            </tr>
                            {/* <tr>
                                <td rowSpan="2">Empty</td>
                            </tr> */}
                            <tr>
                                <td>Utilisateurs</td>
                                <td>C R U D</td>
                            </tr>
                            <tr>
                                <td>Administration</td>
                                <td>R C</td>
                            </tr>
                            <tr>
                                <td>Assistant</td>
                                <td>R C U</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrantingRights
