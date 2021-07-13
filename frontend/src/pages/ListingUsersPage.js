import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import '../styles/listingUsers.scss'
import { getAllUsers } from '../redux/user/userActions';

function ListingUsersPage() {

    const dispatch = useDispatch()
    const { data:allUsers, loading } = useSelector(state => state.allUsers)

    useEffect(() => {
        dispatch(getAllUsers())  
    }, [])

    useEffect(() => {
        console.log(allUsers?.data)
    }, [])

    return (
        <div className="usersWrapper">
            <div className="users">
                <div className="users__header">
                    <div>
                        <h1>Users</h1>
                        <Link to="/create"><AddIcon/>Add User</Link>
                    </div>
                    
                    <div className="options">
                        <div className="counter">Total of users(14)</div>
                        <div className="searchInput">
                            <input type="text" placeholder="Search user here..."/>
                            <IconButton><SearchRoundedIcon/></IconButton>
                        </div>
                    </div>
                </div> 
                <div className="users__table">
                { loading && <CircularProgress/>}
                {allUsers?.data && allUsers?.data.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                    
                        </thead>
                        
                        { allUsers?.data.map((user)=>{
                            return(
                                <tr key={user.USER_ID}>
                                    <td>{user.FIRST_NAME}</td>
                                    <td>{user.LAST_NAME}</td>
                                    <td><span className="user">{user.PROFIL_ID}</span></td>
                                    <td>
                                        {user.IS_ACTIVE === 1 ?
                                            <IconButton><LockOutlinedIcon/></IconButton>:
                                            <IconButton><LockOpenOutlinedIcon/></IconButton>
                                        }
                                        <IconButton><CreateIcon/></IconButton>
                                        <IconButton><OpenInNewIcon/></IconButton>
                                    </td>
                                </tr>
                            )
                        })} 
                        
                    </table>:<div>No data</div>}
                </div>
                
            </div>
        </div>
    )
}

export default ListingUsersPage
