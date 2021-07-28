import React from 'react';

const CustomersHeader = ({customerFilter, handleSearch}) => {

    const handleFilter = (e) => {
        customerFilter(e.target.value)
    }

    return (
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Customers</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="orderLimits" defaultValue="" onChange={handleFilter} className="form-control">
                            <option value="" disabled>Order Amount</option>
                            <option value="highest to lowest">Highest To Lowest</option>
                            <option value="lowest to highest">Lowest To Highest</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-9">
                        <input type="text" id="search" onKeyUp={handleSearch} className="form-control" placeholder="Ex: Search By Address"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersHeader;