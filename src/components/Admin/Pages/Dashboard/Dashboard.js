import React, { useEffect, useState } from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { RiTruckLine } from "react-icons/ri";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import './Dashboard.css';
import Loading from '../../../Loading/Loading';
import { getAdminOrders, getCustomers } from '../../../../utils/network';

const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('user')) 

    useEffect(() => {
        setLoading(true)
        getAdminOrders(user.token)
        .then(orders => {
            getCustomers(user.token)
            .then(customers => {
                calculate(orders, customers)
                setLoading(false)
            })
        })
    }, [])
    
    // useEffect(() => {
    //     setLoading(true)
    //     fetch('https://pickbazar-clone.herokuapp.com/orders')
    //     .then(res => res.json())
    //     .then(orders =>{
    //         fetch('https://pickbazar-clone.herokuapp.com/customers')
    //         .then(res => res.json())
    //         .then(customers => {
    //             calculate(orders, customers)
    //         })
    //     })
    // },[])

    const [previousRevenue, setPreviousRevenue] = useState(0)
    const [currentRevenue, setCurrentRevenue] = useState(0)
    const [previousOrders, setPreviousOrders] = useState(0)
    const [currentOrders, setCurrentOrders] = useState(0);
    const [previousDelivered, setPreviousDelivered] = useState(0)
    const [currentDelivered, setCurrentDelivered] = useState(0);
    const [previousCustomers, setPreviousCustomers] = useState(0);
    const [currentCustomers, setCurrentCustomers] = useState(0);

    const calculate = (orders, customers) => {
        let previousRevenue = 0, currentRevenue = 0;
        let previousOrders = 0, currentOrders = 0;
        let previousDelivered = 0, currentDelivered = 0;
        let previousCustomers = 0, currentCustomers = 0;

        let currentTimelineStart = new Date(new Date().toDateString())
        let currentTimelineEnd = new Date(new Date().toDateString())
        currentTimelineStart.setDate(currentTimelineStart.getDate() - 30)
        currentTimelineEnd.setHours(23, 59, 59, 999)
        let previousTimelineStart = new Date(new Date().toDateString())
        let previousTimelineEnd = new Date(new Date().toDateString())
        previousTimelineStart.setDate(previousTimelineStart.getDate() - 60)
        previousTimelineEnd.setDate(currentTimelineStart.getDate() - 1)
        previousTimelineEnd.setHours(23, 59, 59, 999)

        orders.map(item => {
            let orderDate = new Date(item.created_at)
            if(orderDate >= currentTimelineStart && orderDate <= currentTimelineEnd){
                currentRevenue += Number(item.total);
                currentOrders++
                if(item.status.toLowerCase() === "delivered"){
                    currentDelivered++
                }
            }
            else if(orderDate >= previousTimelineStart && orderDate <= previousTimelineEnd){
                previousRevenue += Number(item.total);
                previousOrders++
                if(item.status.toLowerCase() === "delivered"){
                    previousDelivered++
                }
            }
            return 0;
        })
        customers.map(item => {
            let joiningDate = new Date(item.joining_date)
            if(joiningDate >= currentTimelineStart && joiningDate <= currentTimelineEnd){
                currentCustomers++;
            }
            else if(joiningDate >= previousTimelineStart && joiningDate <= previousTimelineEnd){
                previousCustomers++;
            }
            return 0;
        })
        setPreviousRevenue(previousRevenue)
        setCurrentRevenue(currentRevenue)
        setPreviousOrders(previousOrders)
        setCurrentOrders(currentOrders)
        setPreviousDelivered(previousDelivered)
        setCurrentDelivered(currentDelivered)
        setPreviousCustomers(previousCustomers)
        setCurrentCustomers(currentCustomers)
        setLoading(false)
    }

    return (
        <AdminLayout>
            <Loading loading={loading}></Loading>
            <div className="dashboard w-100">
                <div className="row mt-4">
                    <div className="col-md-3 mt-4">
                        <div className="bg-white p-4 rounded ">
                            <div className="d-flex justify-content-between ">
                                <div>
                                    <h5 className="card-title">Total Revenue</h5>
                                    <p className="card-para">(Last 30 Days)</p>
                                </div>
                                <div className="card-icon revenue-icon">
                                    <AiOutlineDollarCircle color="goldenrod" size={25}></AiOutlineDollarCircle>
                                </div>
                            </div>
                            <div className="card-info mt-5">
                                <h4 className="revenue">৳{currentRevenue.toFixed(2)}</h4>
                                <p className={"revenue-info mt-3 "+(previousRevenue <= currentRevenue ?"up":"down")}>
                                    {
                                        previousRevenue <= currentRevenue ?
                                        <>
                                            <BsArrowUp color="rgb(39, 199, 183)" size={20} style={{marginTop:"-5px"}}></BsArrowUp> 
                                             Revenue Up 
                                        </>
                                        :
                                        <>
                                            <BsArrowDown color="rgb(255, 110, 110)" size={20} style={{marginTop:"-5px"}}></BsArrowDown> 
                                             Revenue  Down
                                        </>
                                    }
                                    <span> (previous 30 days)</span>
                                </p> 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mt-4">
                        <div className="bg-white p-4 rounded ">
                            <div className="d-flex justify-content-between ">
                                <div>
                                    <h5 className="card-title">Total Order</h5>
                                    <p className="card-para">(Last 30 Days)</p>
                                </div>
                                <div className="card-icon order-icon">
                                    <MdAddShoppingCart color="rgb(255, 110, 110)" size={25}></MdAddShoppingCart>
                                </div>
                            </div>
                            <div className="card-info mt-5">
                                <h4 className="revenue">{currentOrders}</h4>
                                <p className={"revenue-info mt-3 "+(previousOrders <= currentOrders ?"up":"down")}>
                                    {
                                        previousOrders <= currentOrders ?
                                        <>
                                            <BsArrowUp color="rgb(39, 199, 183)" size={20} style={{marginTop:"-5px"}}></BsArrowUp> 
                                             Order Up 
                                        </>
                                        :
                                        <>
                                            <BsArrowDown color="rgb(255, 110, 110)" size={20} style={{marginTop:"-5px"}}></BsArrowDown> 
                                             Order  Down
                                        </>
                                    }<span> (previous 30 days)</span>
                                </p> 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mt-4">
                        <div className="bg-white p-4 rounded ">
                            <div className="d-flex justify-content-between ">
                                <div>
                                    <h5 className="card-title">Total Delivery</h5>
                                    <p className="card-para">(Last 30 Days)</p>
                                </div>
                                <div className="card-icon delivery-icon">
                                    <RiTruckLine color="rgb(255, 129, 29)" size={25}></RiTruckLine>
                                </div>
                            </div>
                            <div className="card-info mt-5">
                                <h4 className="revenue">{currentDelivered}</h4>
                                <p className={"revenue-info mt-3 "+(previousDelivered <= currentDelivered ?"up":"down")}>
                                    {
                                        previousDelivered <= currentDelivered ?
                                        <>
                                            <BsArrowUp color="rgb(39, 199, 183)" size={20} style={{marginTop:"-5px"}}></BsArrowUp> 
                                            Delivery Up 
                                        </>
                                        :
                                        <>
                                            <BsArrowDown color="rgb(255, 110, 110)" size={20} style={{marginTop:"-5px"}}></BsArrowDown> 
                                             Delivery  Down
                                        </>
                                    }<span> (previous 30 days)</span>
                                </p> 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mt-4">
                        <div className="bg-white p-4 rounded ">
                            <div className="d-flex justify-content-between ">
                                <div>
                                    <h5 className="card-title">New Customer</h5>
                                    <p className="card-para">(Last 30 Days)</p>
                                </div>
                                <div className="card-icon customer-icon">
                                    <BiUserCircle color="rgb(39, 199, 183)" size={25}></BiUserCircle>
                                </div>
                            </div>
                            <div className="card-info mt-5">
                                <h4 className="revenue">{currentCustomers}</h4>
                                <p className={"revenue-info mt-3 "+(previousCustomers <= currentCustomers ?"up":"down")}>
                                    {
                                        previousCustomers <= currentCustomers ?
                                        <>
                                            <BsArrowUp color="rgb(39, 199, 183)" size={20} style={{marginTop:"-5px"}}></BsArrowUp> 
                                             Customers Up 
                                        </>
                                        :
                                        <>
                                            <BsArrowDown color="rgb(255, 110, 110)" size={20} style={{marginTop:"-5px"}}></BsArrowDown> 
                                             Customers  Down
                                        </>
                                    }<span> (previous 30 days)</span>
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;