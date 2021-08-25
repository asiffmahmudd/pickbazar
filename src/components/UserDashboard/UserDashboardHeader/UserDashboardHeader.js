import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import logo from '../../../img/logo.svg';
import user from '../../../img/user.png';
import UserDrawer from '../../Header/UserDrawer';
import { AiOutlineAlignLeft } from "react-icons/ai";

const UserDashboardHeader = () => {

    const {loggedInUser, logout} = useAuth()
    const [isUserDrawerOpen, setUserDrawerOpen] = useState(false)

    const handleUserDrawerClose = () => {
        setUserDrawerOpen(false)
    }

    return (
        <>
            <header className="bg-white user-profile-header">
                <div className ="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
                        <div className="d-flex">
                            <div className="user-drawer-toggle">
                                <AiOutlineAlignLeft size={30} 
                                    color="rgb(22, 31, 106)" 
                                    className="mr-3"
                                    onClick={()=>setUserDrawerOpen(true)}
                                />
                            </div>
                            <Link className="navbar-brand d-flex align-items-center" to="/"><img src={logo} alt="" /></Link>
                        </div>
                        <div className="dropdown user-icon hover-pointer ml-auto">
                            <img className="dropdown-toggle" src={loggedInUser?.photo? loggedInUser.photo: user} alt="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/user/profile">Profile</Link>
                                <Link className="dropdown-item" to="/user/orders">Your Orders</Link>
                                <div className="dropdown-item" href="/admin/dashboard" onClick={logout}>Logout</div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <UserDrawer
                isUserDrawerOpen={isUserDrawerOpen}
                handleUserDrawerClose={handleUserDrawerClose}
            />
        </>
    
    );
};

export default UserDashboardHeader;