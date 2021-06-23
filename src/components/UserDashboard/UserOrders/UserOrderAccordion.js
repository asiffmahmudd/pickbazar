import React from 'react';
import { BsCheck } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const UserOrderAccordion = ({order,index}) => {

    let barWidth;
    if(order.status === "pending"){
        barWidth = "25%"
    }
    else if(order.status === "processing"){
        barWidth = "75%"
    }
    else if(order.status === "delivered"){
        barWidth = "100%"
    }

    return (
        <div class="card mb-4">
            <div class="card-header hover-pointer collapsed" data-toggle="collapse" data-target={"#collapse-"+index} aria-expanded="true" aria-controls={"collapse-"+index} id={"heading-"+index} style={{padding:0}}>
                <div className="order-item-accordion" >
                    <div className="order-item-header pt-3 pl-3 pr-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <p><strong>Order</strong>#{index+1}</p>
                            <p className="user-order-item-status">Order on the way</p>
                        </div>
                    </div>
                    <hr />
                    <div className="order-item-body pt-3 pl-3 pr-3">
                        <div className="d-flex justify-content-between">
                            <p>Order Date:</p>
                            <p>{order.date}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Delivery Time:</p>
                            <p>17th April</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p><strong>Total Price:</strong></p>
                            <p><strong>${order.amount}</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <div id={"collapse-"+index} class="collapse" aria-labelledby={"heading-"+index} data-parent="#accordion">
                <div className="row border-top border-bottom" style={{margin:'0'}}>
                    <div className="col-lg-12 border-right p-3">
                        <p className="address-title">Delivery Address</p>
                        <p className="address-details">{order.address}</p>
                    </div>
                    <hr className="col-lg-12" />
                    <div className="col-lg-12 p-3">
                        <div className="d-flex justify-content-between">
                            <p className="details-title">Sub Total</p>
                            <p>${order.amount}</p>
                        </div>
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
                            <p><strong>${order.amount}</strong></p>
                        </div>
                    </div>
                </div>

                <div className="m-5 progressbar-container">
                    {
                        order.status !== 'failed' &&
                        <>
                        <div class="progress vertical">
                            <div class="bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{height: barWidth, backgroundColor:'rgb(0, 158, 127)'}}>
                            </div>
                        </div>
                        {/* <div className="progress ml-5 mr-5 mb-4" style={{height: '4px'}}>
                            <div className="progress-bar" role="progressbar" style={{width: barWidth, backgroundColor:'rgb(0, 158, 127)'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                        </>
                    }
                    <div className="progress-numbers">
                        {
                            order.status === "pending" &&
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
                            order.status === "delivered" &&
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
                            order.status === "processing" &&
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
                            order.status === "failed" &&
                            <>
                                <div className="text-center">
                                    <ImCross color="red" size={20}></ImCross>
                                </div>
                            </>
                        }
                        
                        
                    </div>
                    {
                        order.status === 'failed' &&
                        <h4 className="text-center mt-3">
                            Delivery Failed
                        </h4>
                    }
                    {
                        !order.status === 'failed' &&
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
                                order.products.map(pd => {
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
        </div>
    );
};

export default UserOrderAccordion;