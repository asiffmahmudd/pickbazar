import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { useItem } from '../../../../contexts/ItemContext';

const CouponDrawer = ({coupon, isCouponDrawerOpen, handleCouponDrawerClose}) => {

    const { register, handleSubmit, reset } = useForm();
    
    var dayjs = require('dayjs')
    var localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)

    const {setCouponLoading, setCouponChange} = useItem()
    const onSubmit = data => {
        setCouponLoading(true)
        data.status="active"
        if(!coupon){
            data.remainingCoupons = data.totalCoupons
        }
        data.creation = dayjs().format('LL')
        console.log(data)
        let apiURL = ""
        if(!coupon){
            apiURL = 'http://localhost:4000/addCoupon'
        }
        else{
            apiURL = 'http://localhost:4000/updateCoupon/'+coupon._id
        }

        fetch(apiURL, {
            method: coupon? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                reset()
                setCouponChange(true)
                setCouponChange(false)
            }
            setCouponLoading(false)
        })
        .catch(error => {
            setCouponLoading(false)
            alert(error.message)
        })
        closeDrawer()
    }

    const closeDrawer = () => {
        reset()
        handleCouponDrawerClose();
    }


    
    return (
        <div>
            <Drawer className="coupon-drawer drawer" anchor={"right"} open={isCouponDrawerOpen} onClose={closeDrawer}> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="drawer-container">
                    
                    <div className="drawer-header">
                    <GrClose className="drawer-close hover-pointer" onClick={closeDrawer}></GrClose>
                        <h3>
                            {
                                coupon ? 'Update Coupon':'Add Coupon'
                            }
                        </h3>
                    </div>
                    
                    <div className="drawer-body">

                        <div className="row">
                            <div className="col-lg-4">
                                <p className="drawer-body-section-title">Add your coupon description and necessary information from here</p>
                            </div>
                            <div className="col-lg-8 bg-white product-info">
                                <div className="form-group">
                                    <label htmlFor="name">Campaign Name</label>
                                    <input type="text" className="form-control" {...register("name")} name="name" id="name" aria-describedby="name" defaultValue={coupon?coupon.name:""} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="discount">Discount Percent</label>
                                    <input type="number" className="form-control" {...register("discount")} name="discount" id="discount" defaultValue={coupon?coupon.discount:""} step="any" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="code">Discount Code</label>
                                    <input type="text" className="form-control" {...register("code")} name="code" id="code" defaultValue={coupon?coupon.code:""}  required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="totalCoupons">Number Of Coupon</label>
                                    <input type="number" className="form-control" {...register("totalCoupons")} name="totalCoupons" id="totalCoupons" defaultValue={coupon?coupon.totalCoupons:""} step="any" required/>
                                </div>
                                {
                                    coupon && 
                                    <div className="form-group">
                                        <label htmlFor="remainingCoupons">Remaining Coupon</label>
                                        <input type="number" className="form-control" {...register("remainingCoupons")} name="remainingCoupons" id="remainingCoupons" defaultValue={coupon?coupon.remainingCoupons:""} step="any" required/>
                                    </div>
                                }
                                <div className="form-group">
                                    <label htmlFor="couponCategory">Category</label>
                                    <select type="text" className="form-control" {...register("couponCategory")} name="couponCategory" id="couponCategory" defaultValue={coupon?coupon.category:""} aria-describedby="categoryParent" required>
                                        <option value="All">All</option>
                                        <option value="Grocery">Grocery</option>
                                        <option value="Make Up">Make Up</option>
                                        <option value="home">Home</option>
                                        <option value="meat">Meat</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="minimumAmount">Minimun Amount Required</label>
                                    <input type="number" className="form-control" {...register("minimumAmount")} name="minimumAmount" id="minimumAmount" defaultValue={coupon?coupon.minimumAmount:""}  required/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="drawer-footer bg-white row">
                        <div className="col-6">
                            <div className="cancel-btn btn w-100" onClick={closeDrawer}>Cancel</div>
                        </div>
                        <div className="col-6">
                            <button type="submit" id="couponDrawerFormBtn" className="update-btn btn w-100">{coupon ? 'Update Campaign':'Add Campaign'}</button>
                        </div>
                    </div>
                    
                </div>
                </form>
            </Drawer>
        </div>
    );
};

export default CouponDrawer;