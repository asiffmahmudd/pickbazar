import React from 'react';
import user from '../../../../img/user.png'

const CustomerItem = ({customer, index}) => {

    let identity = ""
    if(customer.name)
        identity = customer.name
    else if(customer.email)
        identity = customer.email
    
    var dayjs = require('dayjs')
    var localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)
    const joiningDate = dayjs(customer.joining_date).format('LL')

    return (
        <>
            <tr>
                <th scope="row">{index+1}</th>
                {/* <td><img src={customer.photo?customer.photo:user} alt="" /></td> */}
                <td>{identity}</td>
                <td>{customer.contact.length > 0 ? customer.contact[0].phone : ""}</td>
                <td>{customer.orderSummary[0].total_order}</td>
                <td>৳{customer.orderSummary[0].total_amount}</td>
                <td>{joiningDate}</td>
            </tr>
        </>
    );
};

export default CustomerItem;