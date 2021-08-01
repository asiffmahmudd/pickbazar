import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import OrderHeader from './OrderHeader';
import './Orders.css';
import OrderItem from './OrderItem';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../../Loading/Loading';

const Orders = () => {
    
    const [orders, setOrders] = useState([])
    const [allorders, setAllOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        fetch('https://pickbazar-clone.herokuapp.com/orders')
        .then(res => res.json())
        .then(result => {
            setAllOrders(result)
            setOrders(result)
            setLoading(false)
        })
        .catch(e => {
            setLoading(false)
            alert(e.message)
        })
    },[])

    const sortByDate = (orderList) => {
        let d1,d2;
        const newList = orderList
        newList.sort((a,b) => {
            d1 = new Date(a.orderDate)
            d2 = new Date(b.orderDate)
            if(d1 > d2){
                return -1
            }
            else if(d1 < d2){
                return 1
            } 
            else
                return 0 
        })
        return newList
    }

    
    const [limitFilter, setLimitFilter] = useState("")
    const [statusFilter, setStatusFilter] = useState("")
    
    const [limitState, setLimitState] = useState("")
    const limitFilterFunc = (list, limitnumber) => {
        setLimitState(limitnumber)
        if(limitnumber === "all" || limitnumber === ""){
            setOrders(list)
        }
        else{
            let newList = sortByDate(list.slice())
            setOrders(newList.slice(0, parseInt(limitnumber)))
        }
    }

    const [orderFilterState, setOrderFilterState] = useState("");
    const orderFilter = (status, limitnumber, query) => {
        setOrderFilterState(status)
        if(search && query){
            let newList = handleSearchWithValue(search)
            if(status === 'all' || status === ""){
                limitFilterFunc(newList, limitnumber)
            }
            else{
                newList = newList.filter(item => item.status === status)
                limitFilterFunc(newList, limitnumber)
            }
        }
        else if(status === 'all' || status === ""){
            const newList = allorders.slice()
            limitFilterFunc(newList, limitnumber)
        }
        else{
            let newList = allorders.filter(item => item.status === status)
            limitFilterFunc(newList, limitnumber)
        }
    }

    const handleSearchWithValue = (search) => {
        let newList = allorders.slice()
        const word = search
        newList = newList.filter(item => {
            const arr = item.deliveryAddress.toLowerCase().split(" ")
            const match = arr.find(item2 => item2 === word.toLowerCase() || item2.startsWith(word))
            return match ? true : false
        })
        return newList
    }

    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        if(e.target.value === ""){
            setSearch(null)
            if(orderFilterState !== "" || limitState !== ""){
                orderFilter(orderFilterState, limitState, false)
            }
            else{
                setOrders(allorders.slice())
            }
        }
        else if(e.which === 13){
            setSearch(e.target.value)
            let newList = allorders.slice()
            const word = e.target.value
            newList = newList.filter(item => {
                const arr = item.deliveryAddress.toLowerCase().split(" ")
                const match = arr.find(item2 => item2 === word.toLowerCase() || item2.startsWith(word))
                return match ? true : false
            })
            setLimitState("")
            setOrderFilterState("")
            setLimitFilter("")
            setStatusFilter("")
            setOrders(newList)
        }
    }

    useState(() => {
        setLimitState("")
        setOrderFilterState("")
        setOrders(allorders)
    },[])

    return (
        <AdminLayout>
            <Loading loading={loading}></Loading>
            <div className="admin-orders admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <OrderHeader 
                            orderFilter={orderFilter} 
                            handleSearch={handleSearch} 
                            setLimitFilter={setLimitFilter}
                            limitFilter={limitFilter}
                            setStatusFilter={setStatusFilter}
                            statusFilter={statusFilter}
                        />
                    </div>
                    {
                        !loading && orders?.length === 0 &&
                        <h2 className="text-center col-lg-12 mt-4">No orders found</h2>
                    }
                    {
                        orders?.length > 0 &&
                        <div className="col-lg-12 admin-products-body mt-5">
                            <div className="table-responsive">
                                <table className="table bg-white border table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Customer Identity</th>
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
                                            orders?.map((order,index) => {
                                                return (
                                                    <OrderItem 
                                                        index={index} 
                                                        order={order} 
                                                        key={index}
                                                    />
                                                )
                                            })
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

export default Orders;