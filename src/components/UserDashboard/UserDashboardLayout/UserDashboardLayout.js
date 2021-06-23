import React from 'react';
import UserDashboardSidebar from '../UserDashboardSidebar/UserDashboardSidebar';
import UserProfileHeader from '../UserDashboardHeader/UserDashboardHeader';
import './UserDashboardLayout.css'

const UserDashboardLayout = ({children}) => {
    return (
        <div className="user-dashboard-layout">
            <UserProfileHeader></UserProfileHeader>
            <div className="container-fluid pb-5" style={{marginTop: '89px'}}>
                <div className="row mt-4" style={{margin:'0'}}>
                    <div className="col-lg-3 user-dashboard-sidebar-container mt-4">
                        <UserDashboardSidebar></UserDashboardSidebar>
                    </div>
                    <div className="col-lg-9 user-dashboard-body-container mt-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardLayout;