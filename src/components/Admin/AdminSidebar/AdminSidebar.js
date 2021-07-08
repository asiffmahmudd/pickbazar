import React from 'react';
import { NavLink } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import './AdminSidebar.css';
import { IoLogOut, IoSettings } from "react-icons/io5";
import { RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { BsFillInboxesFill,  } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

const AdminSidebar = ({setSidebarOpen}) => {

    return (
        <div className="admin-sidebar" id="sidebarContent">
            <div className="sidebar-close-container">
                <BiArrowBack size={30} onClick={() => setSidebarOpen(false)} id="sidebarClose" className="sidebar-close" ></BiArrowBack>
            </div>
            <div className="admin-sidebar-item-container">
                <NavLink to='/admin/dashboard' exact>
                    <div className='admin-sidebar-item' >
                        <RiDashboardFill></RiDashboardFill> Dashboard
                    </div>
                </NavLink>
                <NavLink to='/admin/products' exact>
                    <div className='admin-sidebar-item' >
                        <RiShoppingBag3Fill></RiShoppingBag3Fill> Products
                    </div>
                </NavLink>
                <NavLink to='/admin/category' exact>
                    <div className='admin-sidebar-item' >
                        <FaBoxOpen></FaBoxOpen> Category
                    </div>
                </NavLink>
                <NavLink to='/admin/orders' exact>
                    <div className='admin-sidebar-item' >
                        <BsFillInboxesFill></BsFillInboxesFill> Orders
                    </div>
                </NavLink>
                <NavLink to='/admin/customers' exact>
                    <div className='admin-sidebar-item' >
                        <FaUsers></FaUsers> Customers
                    </div>
                </NavLink>
                <NavLink to='/admin/coupons' exact>
                    <div className='admin-sidebar-item' >
                        <RiCoupon3Fill></RiCoupon3Fill> Coupons
                    </div>
                </NavLink>
                <NavLink to='/admin/settings' exact>
                    <div className='admin-sidebar-item' >
                        <IoSettings></IoSettings> Settings
                    </div>
                </NavLink>
            
            </div>
            <button className="btn admin-logout"><IoLogOut/> Logout</button>
        </div>
    );
};

export default AdminSidebar;