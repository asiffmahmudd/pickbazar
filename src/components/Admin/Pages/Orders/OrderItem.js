import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { VscCircleFilled } from "react-icons/vsc";
import Loading from '../../../Loading/Loading';

const OrderItem = ({order,index}) => {

    const selectColor = (status) => {
        if(status === 'delivered'){
            return "rgb(0, 197, 141)"
        }
        else if(status === 'pending'){
            return "rgb(32, 103, 250)"
        }
        else if(status === 'failed'){
            return "rgb(252, 92, 99)"
        }
        else{
            return "rgb(102, 109, 146)"
        }
    }
    
    const [loading, setLoading] = useState(false)
    const [statusColor, setStatusColor] = useState(selectColor(order.status));
    const handleChange = (event) => {
        setLoading(true)
        setStatusColor(selectColor(event.target.value))
        order.status = event.target.value
        fetch('https://pickbazar-clone.herokuapp.com/updateOrderStatus/'+order.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(response => response.json())
        .then(data => {
            if(data){ 
            }
            setLoading(false)
        })
        .catch(error => {
            setLoading(false)
            alert(error.message)
        })
    }
    
    useEffect(() => {
        setStatusColor(selectColor(order.status))
    }, [order])

    let identity = ""
    if(order.customerName)
        identity = order.customerName
    else if(order.customerEmail)
        identity = order.customerEmail
    else
        identity = order.customerId
        
    return (
        <>
        <Loading loading={loading}></Loading>
        <tr>
            <th scope="row">{index+1}</th>
            <td>{identity}</td>
            <td>{order.orderDate}</td>
            <td>{order.deliveryAddress}</td>
            <td>${(order.amount-order.discount).toFixed(2)}</td>
            <td>{order.paymentMethod}</td>
            <td>{order.contactNumber}</td>
            <td className="d-flex align-items-center">
                <VscCircleFilled color={statusColor}></VscCircleFilled>
                <select name="status" id="status" value={order.status} onChange={handleChange}>
                    <option value="delivered" > Delivered</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="failed">Failed</option>
                </select>
            </td>
        </tr>
        </>
        
    );
};

export default OrderItem;