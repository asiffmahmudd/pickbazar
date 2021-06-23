import React from 'react';
import { useProductDrawer } from '../../../../contexts/ProductDrawerContext';

const ProductItem = ({product}) => {

    const {handleProductDrawerOpen} = useProductDrawer()
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3 mb-2 hover-pointer" onClick={() => handleProductDrawerOpen(product)}>
            <div className="card border-0">
                <img className="card-img-top" src={product.img[0]} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;