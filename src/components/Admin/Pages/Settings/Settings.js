import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import { FaCartPlus } from "react-icons/fa";
import './Settings.css';
import { useProductDrawer } from '../../../../contexts/ProductDrawerContext';
import CategoryDrawer from '../Category/CategoryDrawer';
import { useState } from 'react';
import CouponDrawer from '../Coupons/CouponDrawer';
import { BsFillInboxesFill } from "react-icons/bs";
import { RiCoupon3Fill } from "react-icons/ri";

const Settings = () => {

    const [isCategoryDrawerOpen, setCategoryDrawerOpen] = useState(false);
    const handleCategoryDrawerClose = () => {
        setCategoryDrawerOpen(false)
    }
    const handleCategoryDrawerOpen = () => {
        setCategoryDrawerOpen(true)
    }

    const [isCouponDrawerOpen, setCouponDrawerOpen] = useState(false);
    const handleCouponDrawerClose = () => {
        setCouponDrawerOpen(false)
    }
    const handleCouponDrawerOpen = () => {
        setCouponDrawerOpen(true)
    }

    const {handleProductDrawerOpen} = useProductDrawer()
    return (
        <AdminLayout>
            <div className="settings w-100 mt-3">
                <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div className="p-4 bg-white d-flex align-items-center hover-pointer" onClick={handleProductDrawerOpen}>
                            <div className="mr-4">
                                <FaCartPlus color="rgb(0, 197, 141)" size={70}></FaCartPlus>
                            </div>
                            <div>
                                <h2 className="settings-title">Add Products</h2>
                                <p className="settings-para">Add products from here</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="p-4 bg-white d-flex align-items-center hover-pointer" onClick={handleCategoryDrawerOpen}>
                            <div className="mr-4">
                                <BsFillInboxesFill color="rgb(0, 197, 141)" size={70}></BsFillInboxesFill>
                            </div>
                            <div>
                                <h2 className="settings-title">Add Categories</h2>
                                <p className="settings-para">Add product categories from here</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="p-4 bg-white d-flex align-items-center hover-pointer" onClick={handleCouponDrawerOpen}>
                            <div className="mr-4">
                                <RiCoupon3Fill color="rgb(0, 197, 141)" size={70}></RiCoupon3Fill>
                            </div>
                            <div>
                                <h2 className="settings-title">Add Coupons</h2>
                                <p className="settings-para">Add coupons from here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CategoryDrawer isCategoryDrawerOpen={isCategoryDrawerOpen} handleCategoryDrawerClose={handleCategoryDrawerClose}></CategoryDrawer>
            <CouponDrawer isCouponDrawerOpen={isCouponDrawerOpen} handleCouponDrawerClose={handleCouponDrawerClose}></CouponDrawer>
        </AdminLayout>
    );
};

export default Settings;