import React from 'react';

const CustomerItem = ({customer}) => {
    return (
        <tr>
            <th scope="row">{customer.id}</th>
            <td><img src={customer.img} alt="" /></td>
            <td>{customer.name}</td>
            <td>{customer.contact}</td>
            <td>{customer.totalOrders}</td>
            <td>{customer.totalAmount}</td>
            <td>{customer.joining}</td>
        </tr>
    );
};

export default CustomerItem;