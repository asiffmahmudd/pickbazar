import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import { FaCartPlus } from "react-icons/fa";
import './Settings.css';
import { useProductDrawer } from '../../../../contexts/ProductDrawerContext';
import CategoryDrawer from '../Category/CategoryDrawer';
import { useState } from 'react';
import CouponDrawer from '../Coupons/CouponDrawer';
import { BsFillInboxesFill } from "react-icons/bs";
// import { RiCoupon3Fill } from "react-icons/ri";
import {IoLogoWebComponent} from "react-icons/io5";
import LogoDrawer from './LogoDrawer';
import { AiFillFileImage } from "react-icons/ai";
import SliderDrawer from './SliderDrawer';
import Loading from '../../../Loading/Loading';
import { useItem } from '../../../../contexts/ItemContext';
import { useEffect } from 'react';
import { deleteSlider, getSlider } from '../../../../utils/network';

const Settings = () => {

    const [isCategoryDrawerOpen, setCategoryDrawerOpen] = useState(false);
    const handleCategoryDrawerClose = () => {
        setCategoryDrawerOpen(false)
    }
    const handleCategoryDrawerOpen = () => {
        setCategoryDrawerOpen(true)
    }

    // const [isCouponDrawerOpen, setCouponDrawerOpen] = useState(false);
    // const handleCouponDrawerClose = () => {
    //     setCouponDrawerOpen(false)
    // }
    // const handleCouponDrawerOpen = () => {
    //     setCouponDrawerOpen(true)
    // }

    const [isLogoDrawerOpen, setLogoDrawerOpen] = useState(false);
    const handleLogoDrawerClose = () => {
        setLogoDrawerOpen(false)
    }
    const handleLogoDrawerOpen = () => {
        setLogoDrawerOpen(true)
    }

    const [isSliderDrawerOpen, setSliderDrawerOpen] = useState(false);
    const handleSliderDrawerClose = () => {
        setSliderDrawerOpen(false)
    }
    const handleSliderDrawerOpen = () => {
        setSliderDrawerOpen(true)
    }
    const {loading, setLoading} = useItem()

    const {handleProductDrawerOpen} = useProductDrawer()

    const [sliderImages, setSliderImages] = useState([])
    const [sliderLoading, setSliderLoading] = useState()
    const [sliderChange, setSliderChange] = useState(true)

    
    
    useEffect(() => {
        setSliderLoading(true)
        getSlider()
        .then(result => {
            console.log(result)
            setSliderImages(result)
            setSliderLoading(false)
        })
        .catch(e => {
            setSliderLoading(false)
        })
    }, [sliderChange])

    return (
        <AdminLayout>
            <Loading loading={sliderLoading} />
            <Loading loading={loading} />
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

                    {/* <div className="col-lg-6 mt-4">
                        <div className="p-4 bg-white d-flex align-items-center hover-pointer" onClick={handleCouponDrawerOpen}>
                            <div className="mr-4">
                                <IoLogoWebComponent color="rgb(0, 197, 141)" size={70}></IoLogoWebComponent>
                            </div>
                            <div>
                                <h2 className="settings-title">Add Coupons</h2>
                                <p className="settings-para">Add coupons from here</p>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-lg-6 mt-4">
                        <div className="p-4 bg-white d-flex align-items-center hover-pointer" onClick={handleLogoDrawerOpen}>
                            <div className="mr-4">
                                <IoLogoWebComponent color="rgb(0, 197, 141)" size={70}></IoLogoWebComponent>
                            </div>
                            <div>
                                <h2 className="settings-title">Add Logo</h2>
                                <p className="settings-para">Add logo from here</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="p-4 bg-white d-flex align-items-center hover-pointer" onClick={handleSliderDrawerOpen}>
                            <div className="mr-4">
                                <AiFillFileImage color="rgb(0, 197, 141)" size={70}></AiFillFileImage>
                            </div>
                            <div>
                                <h2 className="settings-title">Add Slider</h2>
                                <p className="settings-para">Add slider images from here</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <CategoryDrawer isCategoryDrawerOpen={isCategoryDrawerOpen} handleCategoryDrawerClose={handleCategoryDrawerClose}></CategoryDrawer>
            <LogoDrawer isLogoDrawerOpen={isLogoDrawerOpen} handleLogoDrawerClose={handleLogoDrawerClose} setLoading={setLoading} />
            <SliderDrawer setSliderLoading={setSliderLoading} isSliderDrawerOpen={isSliderDrawerOpen} handleSliderDrawerClose={handleSliderDrawerClose} currentImages={sliderImages} setSliderChange={setSliderChange} />
            {/* <CouponDrawer isCouponDrawerOpen={isCouponDrawerOpen} handleCouponDrawerClose={handleCouponDrawerClose}></CouponDrawer> */}
        </AdminLayout>
    );
};

export default Settings;