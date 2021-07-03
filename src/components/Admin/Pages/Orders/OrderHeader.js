import React from 'react';

const OrderHeader = ({orderFilter}) => {
    return (
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Orders</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="filterStatus" defaultValue="" onChange={orderFilter} className="form-control">
                            <option value="" disabled >Status</option>
                            <option value="all">All</option>
                            <option value="delivered">Delivered</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="failed">Failed</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-3">
                        <select id="orderLimits" defaultValue="" className="form-control">
                            <option value="" disabled>Order Limits</option>
                            <option value="Last 7 orders">Last 7 orders</option>
                            <option value="Last 15 orders">Last 15 orders</option>
                            <option value="Last 30 orders">Last 30 orders</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-6">
                        <input type="text" id="search" className="form-control" placeholder="Ex: Search By Address"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHeader;