import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { RiTruckLine } from "react-icons/ri";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";

import './Dashboard.css'

const Dashboard = () => {
    return (
        <AdminLayout>
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
                                <h4 className="revenue">$766.45</h4>
                                <p className="revenue-info up mt-3"><BsArrowUp color="rgb(39, 199, 183)" size={20} style={{marginTop:"-5px"}}></BsArrowUp> Revenue Up <span>(previous 30 days)</span></p> 
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
                                <h4 className="revenue">115</h4>
                                <p className="revenue-info down mt-3"><BsArrowDown color="rgb(255, 110, 110)" size={20} style={{marginTop:"-5px"}}></BsArrowDown> Order Down <span>(previous 30 days)</span></p> 
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
                                <h4 className="revenue">98</h4>
                                <p className="revenue-info up mt-3"><BsArrowUp color="rgb(39, 199, 183)" size={20} style={{marginTop:"-5px"}}></BsArrowUp> Delivery Up <span>(previous 30 days)</span></p> 
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
                                <h4 className="revenue">30</h4>
                                <p className="revenue-info up mt-3"><BsArrowUp color="rgb(39, 199, 183)" size={20} style={{marginTop:"-5px"}}></BsArrowUp> Customer Up <span>(previous 30 days)</span></p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;