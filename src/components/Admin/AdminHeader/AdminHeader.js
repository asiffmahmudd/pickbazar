import React from 'react';
import adminLogo from '../../../img/adminLogo.png';
import { Link } from 'react-router-dom';
import './AdminHeader.css';

const AdminHeader = () => {
    return (
        <header className="admin-header bg-white p-3 shadow-sm">
            <div className ="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4">
                    <Link className="navbar-brand d-flex align-items-center" to="/"><img src={adminLogo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                        <button className="ml-auto btn add-pd-btn pr-4 pl-4">Add Product</button>
                    </div>
                    
                </nav>
            </div>
            
        </header>
    );
};

export default AdminHeader;