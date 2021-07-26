import React from 'react';
import './ProductItem.css';
import ProductButton from '../ProductButton/ProductButton';
import { useHistory } from 'react-router-dom';

const ProductItem = ({product}) => {
    const history = useHistory();
    return (
        <div className="product-item mt-4">
            <div className="card shadow-sm">
                <div className="product-img-container">
                    {
                        product.quantity === 0 &&
                        <span className="stockout-container">Out of stock</span>
                    }
                    <img className="card-img-top" src={product?.img[0]} alt="" onClick={() => history.push('/product/'+product._id)} />
                    {
                        product.discount > 0 &&
                        <p className="product-item-discount">{product.discount}%</p>
                    }
                </div>
                <div className="card-body">
                    {
                        product.discount > 0 &&
                        <>
                            <h5 className="card-title">${product.sale}</h5> 
                            <span className="discount-price">${product.price}</span>
                            
                        </>
                    }
                    {
                        product.discount === 0 &&
                        <h5 className="card-title">${product.price}</h5>
                    }
                    <p className="card-text">{product.name}</p>
                    <ProductButton product={product}></ProductButton>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductItem;