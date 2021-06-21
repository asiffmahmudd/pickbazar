import React from 'react';
import img from '../../../img/strawberry.jpg';
import { BsCheck } from "react-icons/bs";

const UserOrderDetails = () => {
    return (
        <div className="user-order-details border bg-white">
            <div className="pl-3">
                <h3 className="user-order-title">Order Details</h3>
            </div>
            <div className="row border-top border-bottom" style={{margin:'0'}}>
                <div className="col-lg-8 border-right pt-3">
                    <p className="address-title">Delivery Address</p>
                    <p className="address-details">1756 Roy Alley, GIRARDVILLE, Pennsylvania</p>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="d-flex justify-content-between">
                        <p className="details-title">Sub Total</p>
                        <p>$200</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="details-title">Delivery</p>
                        <p>$0</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="details-title">Delivery Fee</p>
                        <p>$49.7</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="total"><strong>Total</strong></p>
                        <p><strong>$249.7</strong></p>
                    </div>
                </div>
            </div>

            <div className="m-5 progressbar-container">
                <div class="progress ml-5 mr-5 mb-4" style={{height: '4px'}}>
                    <div class="progress-bar" role="progressbar" style={{width: "25%", backgroundColor:'rgb(0, 158, 127)'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress-numbers">
                    <div className="first-step check-container">
                        <BsCheck color="white" size={20}></BsCheck>
                    </div>
                    <div className="second-step number-container">
                        <span>2</span>
                    </div>
                    <div className="third-step number-container">
                        <span>3</span>
                    </div>
                    
                </div>
                <div className="d-flex order-status-text justify-content-between mt-3">
                    <p>Order Received</p>
                    <p>Order on the way</p>
                    <p>Order Delivered</p>
                </div>
            </div>

            <div className="table-responsive" style={{padding:'0'}}>
                <table className="table table-borderless">
                    <thead className="bg-light">
                        <tr>
                            <th></th>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={img} alt="" style={{height:'50px',width:'50px',}}/>
                            </td>
                            <td>
                                <p>Banana</p>
                                <p style={{color: 'rgb(0, 158, 127)'}}>$50</p>
                            </td>
                            <td>2</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={img} alt="" style={{height:'50px',width:'50px',}}/>
                            </td>
                            <td>
                                <p>Banana</p>
                                <p style={{color: 'rgb(0, 158, 127)'}}>$50</p>
                            </td>
                            <td>2</td>
                            <td>$100</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default UserOrderDetails;