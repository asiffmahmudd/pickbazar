import React from 'react';

const CustomersHeader = ({customerFilter}) => {
    return (
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Customers</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="orderLimits" onChange={customerFilter} className="form-control">
                            <option value="" disabled selected>Order Amount</option>
                            <option value="highest to lowest">Highest To Lowest</option>
                            <option value="lowest to highest">Lowest To Highest</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-9">
                        <input type="text" id="search" className="form-control" placeholder="Ex: Search By Address"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersHeader;