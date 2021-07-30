import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../../Loading/Loading';
import AdminLayout from '../../AdminLayout/AdminLayout';
import { useForceUpdate } from '../AdminProducts/AdminProducts';
import CustomerItem from './CustomerItem';
import CustomersHeader from './CustomersHeader';

const Customers = () => {

    const [allcustomers, setAllcustomers] = useState([])
    const [customers, setCustomers] = useState(allcustomers)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://pickbazar-clone.herokuapp.com/customers')
        .then(res => res.json())
        .then(result => {
            setLoading(false)
            setAllcustomers(result)
            setCustomers(result)
        })
        .catch(e => {
            setLoading(false)
            alert(e.message)
        })
    },[])
    
    const forceUpdate = useForceUpdate()
    const customerFilter = (value, query) => {
        let newList = allcustomers
        setCustomerFilterState(value)
        if(search && query){
            newList = customers
        }
        if(value === 'highest to lowest'){
            newList.sort((a, b) => (a.totalAmount > b.totalAmount) ? -1 : 1)
        }
        else if(value === 'lowest to highest'){
            newList.sort((a, b) => (a.totalAmount > b.totalAmount) ? 1 : -1)
        } 
        setCustomers(newList)
        forceUpdate()
    }

    const [customerFilterState, setCustomerFilterState] = useState("")
    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        if(e.target.value === ""){
            setSearch(false)
            if(customerFilterState){
                customerFilter(customerFilterState, false)
            }
            else{
                setCustomers(allcustomers.slice())
            }
        }
        else if(e.which === 13){
            setSearch(e.target.value)
            let newList = allcustomers.slice()
            const number = e.target.value
            newList = newList.filter(item => {
                const arr = item.contactNumber
                const match = arr.find(item2 => item2 === number || item2?.desc.startsWith(number))
                return match ? true : false
            })
            setCustomers(newList)
        }
    }

    useEffect(() => {
        setCustomerFilterState("")
        setCustomers(allcustomers)
    },[allcustomers])

    return (
        <AdminLayout>
            <Loading loading={loading}></Loading>
            <div className="admin-customers admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <CustomersHeader 
                            customerFilter={customerFilter}
                            handleSearch={handleSearch}
                        />
                    </div>
                    {
                        !loading && customers.length === 0 &&
                        <h2 className="text-center col-lg-12 mt-4">No customers found</h2>
                    }
                    {
                        !loading && customers.length > 0 &&
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
                                            customers?.map((customer,index) => <CustomerItem index={index} customer={customer} key={index}></CustomerItem>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </AdminLayout>
    );
};

export default Customers;