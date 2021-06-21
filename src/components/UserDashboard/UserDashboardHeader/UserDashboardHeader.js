import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.svg';
import user from '../../../img/user.jpg';

const UserDashboardHeader = () => {
    return (
        <header className="bg-white user-profile-header">
            <div className ="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
                    <Link className="navbar-brand d-flex align-items-center" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="dropdown user-icon hover-pointer ml-auto">
                        <img className="dropdown-toggle" src={user} alt="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/admin/settings">Settings</Link>
                            <div className="dropdown-item" href="/admin/dashboard">Logout</div>
                        </div>
                    </div>
                </nav>
            </div>
            
        </header>
    );
};

export default UserDashboardHeader;