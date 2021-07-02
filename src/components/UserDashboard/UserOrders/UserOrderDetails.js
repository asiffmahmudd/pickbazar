import React from 'react';
import { BsCheck } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const UserOrderDetails = ({orderDetails}) => {

    let barWidth;
    if(orderDetails.status === "pending"){
        barWidth = "25%"
    }
    else if(orderDetails.status === "processing"){
        barWidth = "75%"
    }
    else if(orderDetails.status === "delivered"){
        barWidth = "100%"
    }

    return (
        <div className="user-order-details border bg-white">
            <div className="pl-3">
                <h3 className="user-order-title">Order Details</h3>
            </div>
            <div className="row border-top border-bottom" style={{margin:'0'}}>
                <div className="col-lg-8 border-right pt-3">
                    <p className="address-title">Delivery Address</p>
                    <p className="address-details">{orderDetails.address}</p>
                </div>
                <div className="col-lg-4 p-3">
                    <div className="d-flex justify-content-between">
                        <p className="details-title">Sub Total</p>
                        <p>${orderDetails.amount}</p>
                    </div>
                    {
                        orderDetails.discount &&
                        <div className="d-flex justify-content-between">
                            <p className="details-title">Discount</p>
                            <p>${orderDetails.discount}</p>
                        </div>
                    }
                    <div className="d-flex justify-content-between">
                        <p className="details-title">Delivery</p>
                        <p>$0</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="details-title">Delivery Fee</p>
                        <p>$0</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="total"><strong>Total</strong></p>
                        <p>
                            <strong>
                                $
                                {
                                    orderDetails.discount &&
                                    (orderDetails.amount-orderDetails.discount).toFixed(2)
                                }
                                {
                                    !orderDetails.discount &&
                                    orderDetails.amount
                                }
                            </strong>
                        </p>
                    </div>
                </div>
            </div>

            <div className="m-5 progressbar-container">
                {
                    orderDetails.status !== 'failed' &&
                    <div className="progress ml-5 mr-5 mb-4" style={{height: '4px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: barWidth, backgroundColor:'rgb(0, 158, 127)'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                }
                <div className="progress-numbers">
                    {
                        orderDetails.status === "pending" &&
                        <>
                            <div className="first-step check-container">
                                <BsCheck color="white" size={20}></BsCheck>
                            </div>
                            <div className="second-step number-container">
                                <span>2</span>
                            </div>
                            <div className="third-step number-container">
                                <span>3</span>
                            </div>
                        </>
                    }

                    {
                        orderDetails.status === "delivered" &&
                        <>
                            <div className="first-step check-container">
                                <BsCheck color="white" size={20}></BsCheck>
                            </div>
                            <div className="second-step check-container">
                                <BsCheck color="white" size={20}></BsCheck>
                            </div>
                            <div className="third-step check-container">
                                <BsCheck color="white" size={20}></BsCheck>
                            </div>
                        </>
                    }

                    {
                        orderDetails.status === "processing" &&
                        <>
                            <div className="first-step check-container">
                                <BsCheck color="white" size={20}></BsCheck>
                            </div>
                            <div className="second-step check-container">
                                <BsCheck color="white" size={20}></BsCheck>
                            </div>
                            <div className="third-step number-container">
                                <span>3</span>
                            </div>
                        </>
                    }

                    {
                        orderDetails.status === "failed" &&
                        <>
                            <div className="text-center">
                                <ImCross color="red" size={20}></ImCross>
                            </div>
                        </>
                    }
                    
                    
                </div>
                {
                    orderDetails.status === 'failed' &&
                    <h4 className="text-center mt-3">
                        Delivery Failed
                    </h4>
                }
                {
                    orderDetails.status !== 'failed' &&
                    <div className="d-flex order-status-text justify-content-between mt-3">
                        <p>Order Received</p>
                        <p>Order on the way</p>
                        <p>Order Delivered</p>
                    </div>
                }
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
                        {
                            orderDetails.products.map(pd => {
                                return (
                                    <tr>
                                        <td>
                                            <img src={pd.img} alt="" style={{height:'50px',width:'50px',}}/>
                                        </td>
                                        <td>
                                            <p>{pd.name}</p>
                                            <p style={{color: 'rgb(0, 158, 127)'}}>${pd.price}</p>
                                        </td>
                                        <td>{pd.count}</td>
                                        <td>${(pd.count*pd.price).toFixed(2)}</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default UserOrderDetails;