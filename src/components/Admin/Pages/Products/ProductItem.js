import React from 'react';

const ProductItem = ({product, handleOpen}) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3 mb-2" onClick={() => handleOpen(product)}>
            <div className="card border-0">
                <img className="card-img-top" src={product.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;