import React from 'react';
import adminLogo from '../../../img/adminLogo.png';
import { Link } from 'react-router-dom';
import './AdminHeader.css';
import { IoNotificationsOutline } from "react-icons/io5";
import user from '../../../img/user.jpg';
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useProductDrawer } from '../../../contexts/ProductDrawerContext';

const AdminHeader = ({setSidebarOpen}) => {
    const {handleProductDrawerOpen} = useProductDrawer()
    return (
        <header className="admin-header bg-white shadow-sm">
            <div className ="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
                    <Link className="navbar-brand" to="/">
                        <img src={adminLogo} alt="" />
                    </Link>

                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className="admin-sidebar-toggler" type="button" onClick={() => setSidebarOpen(true)}>
                        <AiOutlineAlignLeft size={30} color="rgb(22, 31, 106)"></AiOutlineAlignLeft>
                    </div>

                    <div className="navbar ml-auto" id="navbarSupportedContent">
                        <button className="ml-auto btn add-pd-btn pr-4 pl-4" onClick={()=>handleProductDrawerOpen(null)}>Add Product</button>
                        <div className="admin-notification">
                            <IoNotificationsOutline size={20} color="rgb(22, 31, 106)"></IoNotificationsOutline>
                        </div>
                        <div className="dropdown user-icon hover-pointer">
                            <img className="dropdown-toggle" src={user} alt="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/admin/settings">Settings</a>
                                <a className="dropdown-item" href="/admin/dashboard">Logout</a>
                            </div>
                        </div>
                    </div>
                    
                </nav>
            </div>
            
        </header>
    );
};

export default AdminHeader;