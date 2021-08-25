import React from 'react';
const UserOrderItem = ({order,index, setOrderDetails}) => {
    
    const changeClass = (index) => {
        let items = document.querySelectorAll('.order-item.active');
        items[0].classList.remove('active');
        items = document.querySelectorAll('.order-container .order-item');
            items[index].classList.add('active')
        setOrderDetails(order)
    }

    let textColor, bgColor
    if(order.status.toLowerCase() === "pending"){
        textColor = "rgb(32, 103, 250)"
        bgColor = "rgb(32, 103, 250, 0.1)"
    }
    else if(order.status.toLowerCase() === "processing"){
        textColor = "rgb(102, 109, 146)"
        bgColor = "rgb(102, 109, 146, 0.1)"
    }
    else if(order.status.toLowerCase() === "delivered"){
        textColor = "rgb(0, 197, 141)"
        bgColor = "rgb(0, 197, 141, 0.1)"
    }
    else if(order.status.toLowerCase() === "failed"){
        textColor = "rgb(252, 92, 99)"
        bgColor = "rgb(252, 92, 99, 0.1)"
    }

    const customStyle = {
        color: textColor,
        background: bgColor
    }
    
    // let deliveryDate;
    // if(order.deliverySchedule === '90 min express delivery'){
    //     deliveryDate = order.deliverySchedule
    // }
    // else{
    //     var dayjs = require('dayjs')
    //     var localizedFormat = require('dayjs/plugin/localizedFormat')
    //     dayjs.extend(localizedFormat)
    //     let newDate = new Date(order.orderDate)
    //     newDate.setDate(newDate.getDate() + 7)
    //     deliveryDate = dayjs(newDate).format('LL')
    // }

    const dayjs = require('dayjs')
    const localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)
    let newDate = new Date(order.created_at)
    const orderDate = dayjs(newDate).format('LLL')
    const discount_amount = order.discount_amount?order.discount_amount:0

    return (
        <div className={"order-item mt-3 "+(index === 0?"active":"")} onClick={() => changeClass(index)}>
            <div className="order-item-header pt-3 pl-3 pr-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p><strong>Order</strong>#{order.order_number}</p>
                    <p className="user-order-item-status text-capitalize" style={customStyle}>{order.status}</p>
                </div>
            </div>
            <hr />
            <div className="order-item-body pt-3 pl-3 pr-3">
                <div className="d-flex justify-content-between">
                    <p>Order Date:</p>
                    <p>{orderDate}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Delivery Time:</p>
                    <p className="text-capitalize">{order.delivery_time}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p><strong>Total Price:</strong></p>
                    <p><strong>${(order.total-discount_amount).toFixed(2)}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default UserOrderItem;