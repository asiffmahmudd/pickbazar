import React from 'react';

const OrderHeader = ({orderFilter, handleSearch, limitFilter, setLimitFilter, statusFilter, setStatusFilter}) => {

    const handleLimitFilter = (e) => {
        setLimitFilter(e.target.value)
        orderFilter(statusFilter, e.target.value, true)
    }

    const handleStatusFilter = (e) => {
        setStatusFilter(e.target.value)
        orderFilter(e.target.value, limitFilter, true)
    }

    return (
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Orders</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="filterStatus" value={statusFilter} onChange={handleStatusFilter} className="form-control">
                            <option value="" disabled >Status</option>
                            <option value="all">All</option>
                            <option value="delivered">Delivered</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-3">
                        <select id="orderLimits" value={limitFilter} onChange={handleLimitFilter} className="form-control">
                            <option value="" disabled>Order Limits</option>
                            <option value="all">All</option>
                            <option value="7">Last 7 orders</option>
                            <option value="15">Last 15 orders</option>
                            <option value="30">Last 30 orders</option>
                        </select>
                    </div>
                    {/* <div className="form-group col-lg-6">
                        <input type="text" id="search" onKeyUp={handleSearch} className="form-control" placeholder="Ex: Search By Address"/>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default OrderHeader;