import React from 'react';
import UserDashboardLayout from '../UserDashboardLayout/UserDashboardLayout';
import './UserOrders.css';
import UserOrderItem from './UserOrderItem';
import UserOrderDetails from './UserOrderDetails';
import { useState } from 'react';
import UserOrderAccordion from './UserOrderAccordion';
import { useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import Loading from '../../Loading/Loading';

const UserOrders = () => {
    const {loggedInUser} = useAuth()
    const userId = loggedInUser.uid
    const [orders, setOrders] = useState()
    const [orderDetails, setOrderDetails] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        fetch(`http://localhost:4000/orders/`+userId)
        .then(res => res.json())
        .then(data => {
            if(data){
                setOrders(data)
                setOrderDetails(data[0])
            }
            setLoading(false)
        })
        .catch(e => {
            setLoading(false)
            alert(e.message)
        })
    },[userId])

    return (
        <UserDashboardLayout>
            <Loading loading={loading}></Loading>
            <div className="order-container container-fluid">
                <div className="row">
                    {
                        orders?.length > 0 &&
                        <>
                            <div className="col-lg-4 cstm-col bg-white pb-3" style={{border: '1px solid rgb(241, 241, 241)'}}>
                                <h3 className="user-order-title">My Order</h3>
                                <div className="order-item-container">
                                    <div className="user-order-item-container">
                                        {
                                            orders?.map((order,index) => <UserOrderItem setOrderDetails={setOrderDetails} order={order} index={index} key={index}></UserOrderItem>)
                                        }
                                    </div>
                                    <div id="accordion" className="user-order-item-accordion">
                                            {
                                                orders?.map((order,index) =><UserOrderAccordion order={order} index={index}></UserOrderAccordion>)
                                            }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 cstm-col user-order-details-container">
                                <UserOrderDetails orderDetails={orderDetails}></UserOrderDetails>
                            </div>
                        </>
                    }
                    {
                        orders?.length === 0 &&
                        <h2 className="mt-4 text-center col-lg-12">No orders found</h2>
                    }
                </div>
            </div>
        </UserDashboardLayout>
    );
};

export default UserOrders;