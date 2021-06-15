import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CreateIcon from '@material-ui/icons/Create';
import '../styles/listingUsers.scss'

function ListingUsersPage() {
    return (
        <div className="usersWrapper">
            <div className="users">
                <div className="users__header">
                    <h1>Users</h1>
                    <div className="options">
                        <div className="counter">Total of users(14)</div>
                        <div className="searchInput">
                            <input type="text" placeholder="Search user here..."/>
                            <IconButton><SearchRoundedIcon/></IconButton>
                        </div>
                    </div>
                </div> 
                <div className="users__table">
                    <table>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Jill lorem ipus</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td><span className="user">User</span></td>
                            <td>
                                <IconButton><LockOutlinedIcon/></IconButton>
                                <IconButton><CreateIcon/></IconButton>
                                <IconButton><OpenInNewIcon/></IconButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td><span className="user isAdmin">Admin</span></td>
                            <td>
                                <IconButton><LockOutlinedIcon/></IconButton>
                                <IconButton><CreateIcon/></IconButton>
                                <IconButton><OpenInNewIcon/></IconButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td><span className="user isAdmin">Admin</span></td>
                            <td>
                                <IconButton><LockOutlinedIcon/></IconButton>
                                <IconButton><CreateIcon/></IconButton>
                                <IconButton><OpenInNewIcon/></IconButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td><span className="user">User</span></td>
                            <td>
                                <IconButton><LockOutlinedIcon/></IconButton>
                                <IconButton><CreateIcon/></IconButton>
                                <IconButton><OpenInNewIcon/></IconButton>
                            </td>
                        </tr>
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default ListingUsersPage
