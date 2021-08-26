import React from 'react';
import { useItem } from '../../../../contexts/ItemContext';
import { getProducts } from '../../../../utils/network';

const AdminProductHeader = ({forceUpdate,setProducts, productFilter, handleSearch, categoryFilter, setCategoryFilter, priceFilter, setPriceFilter}) => {
    const {categories} = useItem()
    
    const handleCategory = (e) => {
        let filter = ""
        if(e.target.value === 'all'){
            setCategoryFilter("")
        }
        else{
            setCategoryFilter(e.target.value)
            filter = e.target.value
        }
        getProducts(filter, "", priceFilter)
        .then(result => {
            setProducts(result)
            forceUpdate()
        })
        // productFilter(e.target.value, priceFilter , true)
    }
    const handlePrice = (e) =>{ 
        setPriceFilter(e.target.value)
        getProducts(categoryFilter,"", e.target.value)
        .then(result => {
            setProducts(result)
            forceUpdate()
        })
        // productFilter(categoryFilter, e.target.value, true)
    }

    return (
        <>
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Products</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="category" value={categoryFilter} onChange={handleCategory} className="form-control">
                            <option value="" disabled >Category</option>
                            <option value="all">All</option>
                            {
                                categories.map((category,index) => (
                                    <option key={index} value={category.id}>{category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group col-lg-3">
                        <select id="price" value={priceFilter} onChange={handlePrice}  className="form-control">
                            <option value="" disabled >Price</option>
                            <option value="ASC">Lowest to highest</option>
                            <option value="DESC">Highest to lowest</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-6">
                        <input type="text" id="search" className="form-control" onKeyUp={handleSearch} placeholder="Ex: Search By Name"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AdminProductHeader;