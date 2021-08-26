import React from 'react';

const ProductHeader = () => {
    return (
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Products</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="category" defaultValue="" className="form-control">
                            <option value="" disabled >Category</option>
                            <option value="grocery">Grocery</option>
                            <option value="Dairy">Dairy</option>
                            <option value="home">Home</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-3">
                        <select id="price" defaultValue="" className="form-control">
                            <option value="" disabled >Price</option>
                            <option value="lowest to highest">Lowest to highest</option>
                            <option value="highest to lowest">Highest to lowest</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-6">
                        <input type="text" id="search" className="form-control" placeholder="Ex: Search By Name"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductHeader;