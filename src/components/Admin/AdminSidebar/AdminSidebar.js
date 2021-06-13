import React from 'react';
import { NavLink } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";

const AdminSidebar = () => {
    return (
        <div className="sidebar row mt-4 justify-content-center">
            <ul className="list-group">
            <NavLink as='li' className='list-group-item' to='/dashboard' exact>
                <RiDashboardFill></RiDashboardFill> Dashboard
            </NavLink>
            <NavLink as='li' className='list-group-item' to='/dashboard' exact>
                <RiDashboardFill></RiDashboardFill> Dashboard
            </NavLink>
            <NavLink as='li' className='list-group-item' to='/dashboard' exact>
                <RiDashboardFill></RiDashboardFill> Dashboard
            </NavLink>
            <NavLink as='li' className='list-group-item' to='/dashboard' exact>
                <RiDashboardFill></RiDashboardFill> Dashboard
            </NavLink>
            <NavLink as='li' className='list-group-item' to='/dashboard' exact>
                <RiDashboardFill></RiDashboardFill> Dashboard
            </NavLink>
            <NavLink as='li' className='list-group-item' to='/dashboard' exact>
                <RiDashboardFill></RiDashboardFill> Dashboard
            </NavLink>
            <NavLink as='li' className='list-group-item' to='/dashboard' exact>
                <RiDashboardFill></RiDashboardFill> Dashboard
            </NavLink>
            </ul>
        </div>
    );
};

export default AdminSidebar;