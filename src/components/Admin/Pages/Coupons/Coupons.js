import React from 'react';
import { useState } from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import CouponItem from './CouponItem';
import CouponsHeader from './CouponsHeader';
import coupons from '../../../../data/coupons';
import { useEffect } from 'react';
import DeleteBar from '../Category/DeleteBar';

const Coupons = () => {

    const [isAllChecked, setIsAllChecked] = useState(false)
    const [deselectAll, setDeselectAll] = useState(true);
    const [selected, setSelected] = useState([])

    useEffect(() => {
        if(selected.length < coupons.length){
            setIsAllChecked(false)
        }
        else if(selected.length === coupons.length){
            setIsAllChecked(true)
        }
        if(selected.length > 0){
            setDeselectAll(false)
        }
        else if(selected.length === 0){
            setDeselectAll(true)
        }
    }, [selected])

    const handleDelete = () => {
        console.log(selected)
    }
    
    const handleAll = (e) => {
        if(e.target.checked){
            setIsAllChecked(true)
            setDeselectAll(false)
        }
        else{
            setIsAllChecked(false)
            setDeselectAll(true)
        }
    }

    return (
        <AdminLayout>
            <div className="admin-coupon admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <CouponsHeader></CouponsHeader>
                    </div>
                    {
                        selected.length > 0 &&
                        <div className="col-lg-12 mt-3" style={{padding:0}}>
                            <DeleteBar
                                handleDelete={handleDelete}
                            >
                            </DeleteBar>
                        </div>
                    }
                    <div className="col-lg-12 admin-products-body mt-5">
                        <div className="table-responsive">
                            <table className="table bg-white border table-borderless">
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" className="mt-2 ml-2" checked={isAllChecked} onChange={handleAll} name="coupon-item" value={coupons}/>
                                        </th>
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
                                                coupon={coupon}
                                                isAllChecked={isAllChecked} 
                                                setSelected={setSelected} 
                                                deselectAll={deselectAll}
                                                selected={selected}
                                            >
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