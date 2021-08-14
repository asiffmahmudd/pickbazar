import React, { useEffect, useState } from 'react';
import { BsCheck } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useItem } from '../../../contexts/ItemContext';
import Loading from '../../Loading/Loading';

const UserOrderAccordion = ({order,index}) => {

    let barWidth;
    if(order.status === "pending"){
        barWidth = "50px"
    }
    else if(order.status === "processing"){
        barWidth = "160px"
    }
    else if(order.status === "delivered"){
        barWidth = "200px"
    }

    let textColor, bgColor
    if(order.status === "pending"){
        textColor = "rgb(32, 103, 250)"
        bgColor = "rgb(32, 103, 250, 0.1)"
    }
    else if(order.status === "processing"){
        textColor = "rgb(102, 109, 146)"
        bgColor = "rgb(102, 109, 146, 0.1)"
    }
    else if(order.status === "delivered"){
        textColor = "rgb(0, 197, 141)"
        bgColor = "rgb(0, 197, 141, 0.1)"
    }
    else if(order.status === "failed"){
        textColor = "rgb(252, 92, 99)"
        bgColor = "rgb(252, 92, 99, 0.1)"
    }

    const customStyle = {
        color: textColor,
        background: bgColor
    }
    
    const {allproducts, loading} = useItem()
    const [orderedProducts, setOrderedProducts] = useState([])

    useEffect(() => {
        setOrderedProducts(allproducts.filter(pd => {
            let exists = order?.products.find(pd2 => {
                if(pd.id === pd2.id){
                    pd.count = pd2.count
                    return pd
                }
                else 
                    return null
            })
            return exists? true : false
        }))
    }, [allproducts, order?.products])

    // let deliveryDate;
    // if(order.deliverySchedule === '90 min express delivery'){
    //     deliveryDate = order.deliverySchedule
    // }
    // else{
    //     var dayjs = require('dayjs')
    //     var localizedFormat = require('dayjs/plugin/localizedFormat')
    //     dayjs.extend(localizedFormat)
    //     let newDate = new Date(order.orderDate)
    //     newDate.setDate(newDate.getDate() + 7)
    //     deliveryDate = dayjs(newDate).format('LL')
    // }

    return (
        <>
            <Loading loading={loading}></Loading>
            <div className="card mb-4">
                <div className="card-header hover-pointer collapsed" data-toggle="collapse" data-target={"#collapse-"+index} aria-expanded="true" aria-controls={"collapse-"+index} id={"heading-"+index} style={{padding:0}}>
                    <div className="order-item-accordion" >
                        <div className="order-item-header pt-3 pl-3 pr-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <p><strong>Order</strong>#{order.orderId}</p>
                                <p className="user-order-item-status text-capitalize" style={customStyle}>{order.status}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="order-item-body pt-3 pl-3 pr-3">
                            <div className="d-flex justify-content-between">
                                <p>Order Date:</p>
                                <p>{order.orderDate}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Delivery Time:</p>
                                <p>{order.deliverySchedule}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p><strong>Total Price:</strong></p>
                                <p><strong>${(order.amount-order.discount).toFixed(2)}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={"collapse-"+index} className="collapse" aria-labelledby={"heading-"+index} data-parent="#accordion">
                    <div className="row border-top border-bottom" style={{margin:'0'}}>
                        <div className="col-lg-12 border-right p-3">
                            <p className="address-title">Delivery Address</p>
                            <p className="address-details">{order.deliveryAddress}</p>
                        </div>
                        <hr className="col-lg-12" />
                        <div className="col-lg-12 p-3">
                            <div className="d-flex justify-content-between">
                                <p className="details-title">Sub Total</p>
                                <p>${order.amount}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="details-title">Discount</p>
                                <p>${order.discount.toFixed(2)}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="details-title">Delivery Fee</p>
                                <p>$0</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="total"><strong>Total</strong></p>
                                <p><strong>${(order.amount-order.discount).toFixed(2)}</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="m-5 progressbar-container">
                        {
                            order.status !== 'failed' &&
                            <div className="progress vertical">
                                <div className="bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{height: barWidth, width:'100%', backgroundColor:'rgb(0, 158, 127)'}}>
                                </div>
                            </div>
                        }
                        <div className="progress-numbers">
                            {
                                order.status === "pending" &&
                                <>
                                    <div className="accordion-first-step check-container">
                                        <BsCheck color="white" size={20}></BsCheck>
                                    </div>
                                    <div className="accordion-second-step number-container">
                                        <span>2</span>
                                    </div>
                                    <div className="accordion-third-step number-container">
                                        <span>3</span>
                                    </div>
                                </>
                            }

                            {
                                order.status === "delivered" &&
                                <>
                                    <div className="accordion-first-step check-container">
                                        <BsCheck color="white" size={20}></BsCheck>
                                    </div>
                                    <div className="accordion-second-step check-container">
                                        <BsCheck color="white" size={20}></BsCheck>
                                    </div>
                                    <div className="accordion-third-step check-container">
                                        <BsCheck color="white" size={20}></BsCheck>
                                    </div>
                                </>
                            }

                            {
                                order.status === "processing" &&
                                <>
                                    <div className="accordion-first-step check-container">
                                        <BsCheck color="white" size={20}></BsCheck>
                                    </div>
                                    <div className="accordion-second-step check-container">
                                        <BsCheck color="white" size={20}></BsCheck>
                                    </div>
                                    <div className="accordion-third-step number-container">
                                        <span>3</span>
                                    </div>
                                </>
                            }

                            {
                                order.status !== 'failed' &&
                                <div className="d-flex accordion-order-status-text justify-content-between mt-3">
                                    <p>Order Received</p>
                                    <p>Order on the way</p>
                                    <p>Order Delivered</p>
                                </div>
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
                                    orderedProducts?.map(pd => {
                                        return (
                                            <tr>
                                                <td>
                                                    <img src={pd.img[0]} alt="" style={{height:'50px',width:'50px',}}/>
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
        </>
    );
};

export default UserOrderAccordion;