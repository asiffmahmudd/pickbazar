import React from 'react';

const OrderHeader = () => {
    return (
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Orders</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="status" className="form-control">
                            <option defaultValue>Status</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Failed">Failed</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-3">
                        <select id="orderLimits" className="form-control">
                            <option defaultValue>Order Limits</option>
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