import React from 'react';

const CustomerItem = ({customer, index}) => {

    return (
        <>
            <tr>
                <th scope="row">{index+1}</th>
                <td><img src={customer.photo} alt="" /></td>
                <td>{customer.name}</td>
                <td>{customer.contactNumber?customer.contactNumber[0].desc:""}</td>
                <td>{customer.orders}</td>
                <td>${customer.totalAmount.toFixed(2)}</td>
                <td>{customer.joiningDate}</td>
            </tr>
        </>
    );
};

export default CustomerItem;