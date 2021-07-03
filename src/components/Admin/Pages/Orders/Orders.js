import React from 'react';
import allorders from '../../../../data/orders';
import AdminLayout from '../../AdminLayout/AdminLayout';
import OrderHeader from './OrderHeader';
import './Orders.css';
import OrderItem from './OrderItem';
import { useState } from 'react';

const Orders = () => {

    const [orders, setOrders] = useState(allorders)

    const orderFilter = (e) => {
        if(e.target.value === 'all'){
            setOrders(allorders)
        }
        else{
            const newList = allorders.filter(item => item.status === e.target.value)
            setOrders(newList)
        }
    }

    return (
        <AdminLayout>
            <div className="admin-orders admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <OrderHeader orderFilter={orderFilter}></OrderHeader>
                    </div>
                    <div className="col-lg-12 admin-products-body mt-5">
                        <div className="table-responsive">
                            <table className="table bg-white border table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Customer ID</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Delivery Address</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Payment Method</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order,index) => <OrderItem order={order} key={index}></OrderItem>)
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

export default Orders;