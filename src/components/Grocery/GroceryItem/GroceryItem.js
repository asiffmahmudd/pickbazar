import React, { useState } from 'react';
import './GroceryItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const GroceryItem = ({product}) => {

    const [productAdded, setProductAdded] = useState(false);
    const [count, setCount] = useState(0);
    const addProduct = () =>{
        setProductAdded(true);
        setCount(1);
    }

    const increaseCount = () =>{
        setCount(count+1)
    }

    const decreaseCount = () => {
        setCount(count-1)
        if(count === 1){
            setProductAdded(false)
        }
    }

    return (
        <div className="grocery mt-4 col-md-3">
            <div className="card">
                <img className="card-img-top" src={product.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">$1.5</h5>
                    <p className="card-text">{product.name}</p>
                    {
                        !productAdded &&
                        <button onClick={addProduct} className="btn btn-primary">
                            <div className="btn-text">Add</div>
                            <span className="btn-plus-icon" ><FontAwesomeIcon icon={faPlus} size="sm"/></span>
                        </button>
                    }
                    
                    {
                        productAdded &&
                        <div className="counter">
                            <button className="minus" onClick={decreaseCount}><FontAwesomeIcon icon={faMinus} size="sm"/></button>
                            <span className="counter-number">{count}</span>
                            <button className="plus" onClick={increaseCount}><FontAwesomeIcon icon={faPlus} size="sm"/></button>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default GroceryItem;