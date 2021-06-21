import React from 'react';
import UserDashboardSidebar from '../UserDashboardSidebar/UserDashboardSidebar';
import UserProfileHeader from '../UserDashboardHeader/UserDashboardHeader';

const UserDashboardLayout = ({children}) => {
    return (
        <>
            <UserProfileHeader></UserProfileHeader>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <UserDashboardSidebar></UserDashboardSidebar>
                    </div>
                    <div className="col-lg-9">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboardLayout;