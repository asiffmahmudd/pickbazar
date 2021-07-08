import React from 'react';
import { useState } from 'react';
import categories from '../../../../data/categories';

const AdminProductHeader = ({productFilter}) => {

    const [categoryFilter, setCategoryFilter] = useState("all")
    const [priceFilter, setPriceFilter] = useState("")

    const handleCategory = (e) => {
        setCategoryFilter(e.target.value)
        productFilter(e.target.value, priceFilter)
    }
    const handlePrice = (e) =>{ 
        setPriceFilter(e.target.value)
        productFilter(categoryFilter, e.target.value)
    }

    return (
        <>
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Products</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="category" defaultValue="" onChange={handleCategory} className="form-control">
                            <option value="" disabled >Category</option>
                            <option value="all">All</option>
                            {
                                categories.map((category,index) => (
                                    <option key={index} value={category.name}>{category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group col-lg-3">
                        <select id="price" defaultValue="" onChange={handlePrice}  className="form-control">
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
        </>
    );
};

export default AdminProductHeader;