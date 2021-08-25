import React from 'react';
import ProfileAddressSection from './ProfileAddressSection'
import UserDashboardLayout from '../UserDashboardLayout/UserDashboardLayout';
import './Profile.css'
import ProfileContactSection from './ProfileContactSection';

const Profile = () => {
    return (
        <UserDashboardLayout>
            <div className="profile container-fluid bg-white">
                <div className="profile-header-container">
                    <h3 className="profile-header">Your Profile</h3>
                </div>
                <form className="mt-4">
                    <div className="row">
                        <div className="form-group col-lg-5">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter name" />
                        </div>
                        <div className="form-group col-lg-5">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Password" />
                        </div>
                        <div className="form-group col-lg-2 align-items-end d-flex">
                            <button type="submit" className="btn btn-primary w-100">Save</button>
                        </div>
                    </div>
                </form>
                <ProfileAddressSection></ProfileAddressSection>
                <ProfileContactSection></ProfileContactSection>
            </div>
        </UserDashboardLayout>
    );
};

export default Profile;