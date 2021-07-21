import React from 'react';
import adminLogo from '../../../img/adminLogo.png';
import { Link } from 'react-router-dom';
import './AdminHeader.css';
import { IoNotificationsOutline } from "react-icons/io5";
import user from '../../../img/user.png';
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useProductDrawer } from '../../../contexts/ProductDrawerContext';
import AdminProductDrawer from '../Pages/AdminProducts/AdminProductDrawer';
import { useAuth } from '../../../contexts/AuthContext';

const AdminHeader = ({setSidebarOpen}) => {
    const {isProductDrawerOpen, handleProductDrawerOpen, handleProductDrawerClose} = useProductDrawer()
    const {loggedInUser, logout} = useAuth()

    return (
        <>
        <header className="admin-header bg-white shadow-sm">
            <div className ="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
                    <Link className="navbar-brand" to="/">
                        <img src={adminLogo} alt="" />
                    </Link>

                    <div className="admin-sidebar-toggler" type="button" onClick={() => setSidebarOpen(true)}>
                        <AiOutlineAlignLeft size={30} color="rgb(22, 31, 106)"></AiOutlineAlignLeft>
                    </div>

                    <div className="navbar ml-auto" id="navbarSupportedContent">
                        <button className="ml-auto btn add-pd-btn pr-4 pl-4" onClick={()=>handleProductDrawerOpen(null)}>Add Product</button>
                        <div className="admin-notification">
                            <IoNotificationsOutline size={20} color="rgb(22, 31, 106)"></IoNotificationsOutline>
                        </div>
                        <div className="dropdown user-icon hover-pointer">
                            <img className="dropdown-toggle" src={loggedInUser.photo? loggedInUser.photo : user} alt="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/admin/settings">Settings</Link>
                                <div className="dropdown-item" href="/admin/dashboard" onClick={logout}>Logout</div>
                            </div>
                        </div>
                    </div>
                    
                </nav>
            </div>
            
        </header>
        <AdminProductDrawer product={null} isProductDrawerOpen={isProductDrawerOpen} handleProductDrawerClose={handleProductDrawerClose}></AdminProductDrawer>
        </>
    );
};

export default AdminHeader;