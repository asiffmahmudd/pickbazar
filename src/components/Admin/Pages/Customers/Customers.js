import React from 'react';
import { useState } from 'react';
import allcustomers from '../../../../data/customers';
import AdminLayout from '../../AdminLayout/AdminLayout';
import { useForceUpdate } from '../AdminProducts/AdminProducts';
import CustomerItem from './CustomerItem';
import CustomersHeader from './CustomersHeader';

const Customers = () => {
    const [customers, setCustomers] = useState(allcustomers.slice())
    const forceUpdate = useForceUpdate()
    const customerFilter = (e) => {
        const newList = customers
        if(e.target.value === 'highest to lowest'){
            newList.sort((a, b) => (a.totalAmount > b.totalAmount) ? -1 : 1)
        }
        else{
            newList.sort((a, b) => (a.totalAmount > b.totalAmount) ? 1 : -1)
        } 
        setCustomers(newList)
        forceUpdate()
    }

    return (
        <AdminLayout>
            <div className="admin-customers admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <CustomersHeader customerFilter={customerFilter}></CustomersHeader>
                    </div>
                    <div className="col-lg-12 admin-products-body mt-5">
                        <div className="table-responsive">
                            <table className="table bg-white border table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Total Orders</th>
                                        <th scope="col">Total Amount</th>
                                        <th scope="col">Joining Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        customers.map((customer,index) => <CustomerItem customer={customer} key={index}></CustomerItem>)
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

export default Customers;