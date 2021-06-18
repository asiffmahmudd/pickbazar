import React from 'react';
import orders from '../../../../data/orders';
import AdminLayout from '../../AdminLayout/AdminLayout';
import OrderHeader from './OrderHeader';
import './Orders.css';
import OrderStatus from './OrderStatus';

const Orders = () => {

    
    
    return (
        <AdminLayout>
            <div className="admin-orders admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <OrderHeader></OrderHeader>
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
                                        orders.map((order,index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{order.id}</th>
                                                    <td>{order.customerId}</td>
                                                    <td>{order.date}</td>
                                                    <td>{order.address}</td>
                                                    <td>{order.amount}</td>
                                                    <td>{order.paymentMethod}</td>
                                                    <td>{order.contact}</td>
                                                    <OrderStatus order={order}></OrderStatus>
                                                </tr>
                                            )
                                        })
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