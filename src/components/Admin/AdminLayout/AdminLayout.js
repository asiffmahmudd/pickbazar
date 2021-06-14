import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminLayout.css'

const AdminLayout = ({children}) => {
    return (
        <>
            <AdminHeader></AdminHeader>
            <div className="container-fluid">
                <div className="row full-admin-container">
                    <div className="col-lg-2 admin-sidebar-container">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-lg-10 product-container justify-content-center">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;