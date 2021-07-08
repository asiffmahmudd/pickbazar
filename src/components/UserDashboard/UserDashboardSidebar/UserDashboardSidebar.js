import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from '../../../contexts/AuthContext';
import './UserDashboardSidebar.css'

const UserDashboardSidebar = () => {

    const {logout} = useAuth()

    return (
        <div className="bg-white pt-5 pb-5 shadow">
            <div>
                <NavLink to='/user/orders' className="user-sidebar-nav" exact>
                    <div className='user-sidebar-item pl-5 pt-3 pb-3' >
                        Your Orders
                    </div>
                </NavLink>
                <NavLink to='/user/profile' className="user-sidebar-nav" exact>
                    <div className='user-sidebar-item pl-5 pt-3 pb-3' >
                        Profile
                    </div>
                </NavLink>
                <div className='user-sidebar-item pl-5 pt-3 pb-3 hover-pointer' onClick={logout}>
                    Logout
                </div>
            </div>
        </div>
    );
};

export default UserDashboardSidebar;