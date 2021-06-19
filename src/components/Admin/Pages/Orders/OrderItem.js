import React from 'react';
import { useState } from 'react';
import { VscCircleFilled } from "react-icons/vsc";

const OrderItem = ({order}) => {

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
    
    const [statusColor, setStatusColor] = useState(selectColor(order.status));

    const handleChange = (event) => {
        setStatusColor(selectColor(event.target.value))
        order.status = event.target.value
    }

    return (
        <tr>
            <th scope="row">{order.id}</th>
            <td>{order.customerId}</td>
            <td>{order.date}</td>
            <td>{order.address}</td>
            <td>{order.amount}</td>
            <td>{order.paymentMethod}</td>
            <td>{order.contact}</td>
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
        
    );
};

export default OrderItem;