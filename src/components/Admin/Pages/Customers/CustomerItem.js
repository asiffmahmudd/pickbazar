import React from 'react';
import user from '../../../../img/user.png'

const CustomerItem = ({customer, index}) => {

    let identity = ""
    if(customer.name)
        identity = customer.name
    else if(customer.email)
        identity = customer.email
    else
        identity = customer.uid
    
    let contact = ""
    if(customer.contactNumber && customer.contactNumber.length > 0){
        contact = customer.contactNumber[0].desc
    }

    return (
        <>
            <tr>
                <th scope="row">{index+1}</th>
                <td><img src={customer.photo?customer.photo:user} alt="" /></td>
                <td>{identity}</td>
                <td>{contact}</td>
                <td>{customer.orders}</td>
                <td>${customer.totalAmount.toFixed(2)}</td>
                <td>{customer.joiningDate}</td>
            </tr>
        </>
    );
};

export default CustomerItem;