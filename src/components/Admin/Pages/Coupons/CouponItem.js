import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { VscCircleFilled } from "react-icons/vsc";
import { useState } from 'react';
import CouponDrawer from './CouponDrawer';
import { useEffect } from 'react';
import { useItem } from '../../../../contexts/ItemContext';
import { serverUrl } from '../../../../baseURL';

const CouponItem = ({coupon, coupons, index, isAllChecked, setSelected, deselectAll, selected, handleSingleDelete}) => {

    const selectColor = (status) => {
        if(status === 'active'){
            return "rgb(0, 197, 141)"
        }
        else{
            return "rgb(252, 92, 99)"
        }
    }

    const {setCouponLoading} = useItem()

    const [statusColor, setStatusColor] = useState(selectColor(coupon.status));

    const handleChange = (event) => {
        setCouponLoading(true)
        coupon.status = event.target.value
        setStatusColor(selectColor(event.target.value))
        fetch(serverUrl + '/updateCouponStatus/'+coupon._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(coupon)
        })
        .then(response => response.json())
        .then(data => {
            if(data){ 
            }
            setCouponLoading(false)
        })
        .catch(error => {
            setCouponLoading(false)
            alert(error.message)
        })
    }

    const percentage = 100 - ((coupon.remainingCoupons*100)/coupon.totalCoupons);
    
    const [isCouponDrawerOpen, setCouponDrawerOpen] = useState(false);
    
    const handleCouponDrawerOpen = () => {
        setCouponDrawerOpen(true);  
    }

    const handleCouponDrawerClose = () => {
        setCouponDrawerOpen(false);
    }

    const [isChecked, setIsChecked] = useState(isAllChecked);

    const changeCheck = () => {
        if(!isChecked){
            const newList = [...selected, coupon]
            setSelected(newList)
        }
        else{
            const newList = selected.filter(coup => coup.id !== coupon.id)
            setSelected(newList)
        }
        setIsChecked(!isChecked)
    }

    useEffect(() => {
         if(isAllChecked){
            setSelected(coupons)
            setIsChecked(true)
         }
         if(deselectAll){
             setSelected([])
             setIsChecked(false)
         }
    }, [isAllChecked, deselectAll, setSelected, coupons])

    useEffect(() =>{
        setStatusColor(selectColor(coupon.status))
    }, [coupon])

    return (
        <>
            <tr>
                <td>
                    <input type="checkbox" className="mt-2 ml-2" checked={isChecked} onChange={changeCheck} name="coupon-item" value={coupon}/>
                </td>
                <th scope="row">{index+1}</th>
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
                {/* <td>{coupon.expiration}</td> */}
                <td>{coupon.creation}</td>
                <td>
                    <VscCircleFilled color={statusColor}></VscCircleFilled>
                    <select name="status" id="status" value={coupon.status} onChange={handleChange}>
                        <option value="active" > Active</option>
                        <option value="revoked">Revoked</option>
                    </select></td>
                <td>
                    <BiEdit color="green" onClick={()=> handleCouponDrawerOpen(coupon)} className="mr-2 hover-pointer"></BiEdit>
                    <BsTrash color='red' onClick={() => handleSingleDelete(coupon._id)} className="hover-pointer"></BsTrash>
                </td>
            </tr>
            <CouponDrawer coupon={coupon} isCouponDrawerOpen={isCouponDrawerOpen} handleCouponDrawerClose={handleCouponDrawerClose}></CouponDrawer>
        </>
    );
};

export default CouponItem;