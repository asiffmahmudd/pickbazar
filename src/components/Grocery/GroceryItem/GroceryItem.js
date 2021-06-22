import React from 'react';
import './GroceryItem.css';
import ProductButton from '../ProductButton/ProductButton';
import { useHistory } from 'react-router-dom';

const GroceryItem = ({product}) => {
    const history = useHistory();
    return (
        <div className="grocery mt-4">
            <div className="card shadow-sm">
                <img className="card-img-top" src={product.img[0]} alt="" onClick={() => history.push('/product/'+product.id)} />
                <div className="card-body">
                    <h5 className="card-title">${product.price}</h5>
                    <p className="card-text">{product.name}</p>
                    <ProductButton product={product}></ProductButton>
                    
                </div>
            </div>
        </div>
    );
};

export default GroceryItem;