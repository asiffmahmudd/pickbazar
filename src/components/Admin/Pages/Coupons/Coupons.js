import React from 'react';
import { useState } from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import CouponDrawer from './CouponDrawer';
import CouponItem from './CouponItem';
import CouponsHeader from './CouponsHeader';
import coupons from '../../../../data/coupons';

const Coupons = () => {

    return (
        <AdminLayout>
            <div className="admin-coupon admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <CouponsHeader></CouponsHeader>
                    </div>
                    <div className="col-lg-12 admin-products-body mt-5">
                        <div className="table-responsive">
                            <table className="table bg-white border table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Campaigns Name</th>
                                        <th scope="col">Code</th>
                                        <th scope="col">Remaining Coupon</th>
                                        <th scope="col">Expiration Date</th>
                                        <th scope="col">Creation Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        coupons.map((coupon,index) => (
                                            <CouponItem 
                                                key={index}
                                                coupon={coupon}>
                                            </CouponItem>)
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Coupons;