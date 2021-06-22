import React from 'react';
import { useState } from 'react';

const UserOrderItem = ({order,index}) => {
    
    const changeClass = (index) => {
        index--;
        let items = document.querySelectorAll('.order-item.active');
        if(items.length)
            items[0].classList.remove('active');
        items = document.querySelectorAll('.order-container .order-item');
            items[index].classList.add('active')
        
    }

    return (
        <div className={"order-item mt-3 "} onClick={() => changeClass(index)}>
            <div className="order-item-header pt-3 pl-3 pr-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p><strong>Order</strong>#{index}</p>
                    <p className="user-order-item-status">Order on the way</p>
                </div>
            </div>
            <hr />
            <div className="order-item-body pt-3 pl-3 pr-3">
                <div className="d-flex justify-content-between">
                    <p>Order Date:</p>
                    <p>{order.date}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Delivery Time:</p>
                    <p>17th April</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p><strong>Total Price:</strong></p>
                    <p><strong>${order.amount}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default UserOrderItem;