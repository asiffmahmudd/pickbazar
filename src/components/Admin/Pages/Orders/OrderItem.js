import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { VscCircleFilled } from "react-icons/vsc";
import { updateOrder } from '../../../../utils/network';
import Loading from '../../../Loading/Loading';

const OrderItem = ({order}) => {
    
    const selectColor = (status) => {
        status = status.toLowerCase()
        if(status === 'delivered'){
            return "rgb(0, 197, 141)"
        }
        else if(status === 'pending'){
            return "rgb(32, 103, 250)"
        }
        else if(status === 'cancelled'){
            return "rgb(252, 92, 99)"
        }
        else{
            return "rgb(102, 109, 146)"
        }
    }
    console.log(order.status)
    const [loading, setLoading] = useState(false)
    const [statusColor, setStatusColor] = useState(selectColor(order.status));
    const handleChange = (event) => {
        setLoading(true)
        setStatusColor(selectColor(event.target.value))
        order.status = event.target.value

        const user = JSON.parse(localStorage.getItem('user'))
        const data = {
            orders: [
                {
                    orderId: order.id,
                    status: event.target.value        
                }
            ]
        }
        updateOrder(data, user.token)
        .then(result => {
            setLoading(false)
            console.log(result)
        })

        // fetch('https://pickbazar-clone.herokuapp.com/updateOrderStatus/'+order.id, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(order)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if(data){ 
        //     }
        //     setLoading(false)
        // })
        // .catch(error => {
        //     setLoading(false)
        //     alert(error.message)
        // })
    }

    var dayjs = require('dayjs')
    var localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)
    const orderDate = dayjs(order.created_at).format('LL')
    
    useEffect(() => {
        setStatusColor(selectColor(order.status))
    }, [order])

    let identity = ""
    if(order.customerInfo[0].name)
        identity = order.customerInfo[0].name
    else if(order.customerInfo[0].email)
        identity = order.customerEmail
        
    return (
        <>
        <Loading loading={loading}></Loading>
        <tr>
            <th scope="row">{order.order_number}</th>
            <td>{identity}</td>
            <td>{orderDate}</td>
            <td>{order.address.length > 0 ? order.address[0].address : ""}</td>
            <td>৳{(Number(order.total)).toFixed(2)}</td>
            <td>{order.payment_method}</td>
            <td>{order.contact.length>0 ? order.contact[0].phone:""}</td>
            <td className="d-flex align-items-center">
                <VscCircleFilled color={statusColor}></VscCircleFilled>
                <select name="status" id="status" value={order.status.toLowerCase()} onChange={handleChange}>
                    <option value="delivered" > Delivered</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </td>
        </tr>
        </>
        
    );
};

export default OrderItem;