import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminLayout = ({children}) => {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="container-fluid pb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-3 sidebar-container">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-lg-9 product-container justify-content-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;