import React from 'react';
import { useState } from 'react';

const OrderHeader = ({orderFilter, handleSearch}) => {

    const [limit, setLimit] = useState('all')
    const [status, setStatus] = useState('all')

    const handleLimitFilter = (e) => {
        setLimit(e.target.value)
        orderFilter(status, e.target.value, true)
    }

    const handleStatusFilter = (e) => {
        setStatus(e.target.value)
        orderFilter(e.target.value, limit, true)
    }

    return (
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Orders</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="filterStatus" defaultValue="" onChange={handleStatusFilter} className="form-control">
                            <option value="" disabled >Status</option>
                            <option value="all">All</option>
                            <option value="delivered">Delivered</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="failed">Failed</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-3">
                        <select id="orderLimits" defaultValue="" onChange={handleLimitFilter} className="form-control">
                            <option value="" disabled>Order Limits</option>
                            <option value="all">All</option>
                            <option value="2">Last 7 orders</option>
                            <option value="4">Last 15 orders</option>
                            <option value="6">Last 30 orders</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-6">
                        <input type="text" id="search" onKeyUp={handleSearch} className="form-control" placeholder="Ex: Search By Address"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHeader;