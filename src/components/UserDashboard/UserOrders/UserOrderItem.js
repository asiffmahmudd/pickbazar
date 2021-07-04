import React from 'react';
const UserOrderItem = ({order,index, setOrderDetails}) => {
    
    const changeClass = (index) => {
        let items = document.querySelectorAll('.order-item.active');
        items[0].classList.remove('active');
        items = document.querySelectorAll('.order-container .order-item');
            items[index].classList.add('active')
        setOrderDetails(order)
    }

    return (
        <div className={"order-item mt-3 "+(index === 0?"active":"")} onClick={() => changeClass(index)}>
            <div className="order-item-header pt-3 pl-3 pr-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p><strong>Order</strong>#{index+1}</p>
                    <p className="user-order-item-status">Order on the way</p>
                </div>
            </div>
            <hr />
            <div className="order-item-body pt-3 pl-3 pr-3">
                <div className="d-flex justify-content-between">
                    <p>Order Date:</p>
                    <p>{order.orderDate}</p>
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