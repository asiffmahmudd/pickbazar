import React from 'react';
import UserDashboardLayout from '../UserDashboardLayout/UserDashboardLayout';
import './UserOrders.css';
import orders from '../../../data/orders'
import UserOrderItem from './UserOrderItem';
import UserOrderDetails from './UserOrderDetails';
import { useState } from 'react';
import UserOrderAccordion from './UserOrderAccordion';

const UserOrders = () => {

    const [orderDetails, setOrderDetails] = useState(orders[0])

    return (
        <UserDashboardLayout>
            <div className="order-container container-fluid">
                <div className="row">
                    <div className="col-lg-4 cstm-col bg-white pb-3" style={{border: '1px solid rgb(241, 241, 241)'}}>
                        <h3 className="user-order-title">My Order</h3>
                        <div className="order-item-container">
                            <div className="user-order-item-container">
                                {
                                    orders.map((order,index) => <UserOrderItem setOrderDetails={setOrderDetails} order={order} index={index} key={index}></UserOrderItem>)
                                }
                            </div>
                            <div id="accordion" className="user-order-item-accordion">
                                    {
                                        orders.map((order,index) =><UserOrderAccordion order={order} index={index}></UserOrderAccordion>)
                                    }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 cstm-col user-order-details-container">
                        <UserOrderDetails orderDetails={orderDetails}></UserOrderDetails>
                    </div>
                </div>
            </div>
        </UserDashboardLayout>
    );
};

export default UserOrders;