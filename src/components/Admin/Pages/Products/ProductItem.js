import React from 'react';

const ProductItem = ({product}) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3 mb-2">
            <div class="card border-0">
                <img class="card-img-top" src={product.img} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">${product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;