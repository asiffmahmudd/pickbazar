import React from 'react';
import UserDashboardLayout from '../UserDashboardLayout/UserDashboardLayout';
import './UserOrders.css';
import orders from '../../../data/orders'
import UserOrderItem from './UserOrderItem';
import UserOrderDetails from './UserOrderDetails';

const UserOrders = () => {

    // const []

    return (
        <UserDashboardLayout>
            <div className="order-container container-fluid">
                <div className="row">
                    <div className="col-lg-4 cstm-col mt-4 bg-white pb-3" style={{border: '1px solid rgb(241, 241, 241)'}}>
                        <h3 className="user-order-title">My Order</h3>
                        <div className="order-item-container">

                            {
                                orders.map((order,index) => <UserOrderItem test={test} order={order} index={index+1} key={index}></UserOrderItem>)
                            }
                            
                        </div>
                    </div>
                    <div className="col-lg-8 cstm-col mt-4">
                        <UserOrderDetails></UserOrderDetails>
                    </div>
                </div>
            </div>
        </UserDashboardLayout>
    );
};

export default UserOrders;