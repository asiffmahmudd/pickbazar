import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { VscCircleFilled } from "react-icons/vsc";
import { useState } from 'react';

const CouponItem = ({coupon, handleCouponDrawerOpen, handleCouponDelete}) => {

    const selectColor = (status) => {
        if(status === 'active'){
            return "rgb(0, 197, 141)"
        }
        else{
            return "rgb(252, 92, 99)"
        }
    }

    const [statusColor, setStatusColor] = useState(selectColor(coupon.status));

    const handleChange = (event) => {
        setStatusColor(selectColor(event.target.value))
        coupon.status = event.target.value
    }

    const percentage = (coupon.remainingCoupons*100)/coupon.totalCoupons;
    
    return (
        <tr>
            <th scope="row">{coupon.id}</th>
            <td>{coupon.name}</td>
            <td>{coupon.code}</td>
            <td className="pt-3 pb-3">
                
                <div className="progress" style={{height:'4px'}}>
                    <div className="progress-bar" role="progressbar" style={{width: `${percentage}%`, background:'rgb(0, 197, 141)'}} aria-valuenow={coupon.remainingCoupons} aria-valuemin="0" aria-valuemax={coupon.totalCoupons}></div>
                </div>
                <div className="coupon-td-info">
                    {coupon.remainingCoupons} of {coupon.totalCoupons} coupons remaining
                </div>
            
            </td>
            <td>{coupon.expiration}</td>
            <td>{coupon.creation}</td>
            <td>
                <VscCircleFilled color={statusColor}></VscCircleFilled>
                <select name="status" id="status" value={coupon.status} onChange={handleChange}>
                    <option value="active" > Active</option>
                    <option value="revoked">Revoked</option>
                </select></td>
            <td>
                <BiEdit color="green" onClick={()=> handleCouponDrawerOpen(coupon)} className="mr-2 hover-pointer"></BiEdit>
                <BsTrash color='red' onClick={() => handleCouponDelete(coupon)} className="hover-pointer"></BsTrash>
            </td>
        </tr>
    );
};

export default CouponItem;