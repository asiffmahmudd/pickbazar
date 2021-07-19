import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCount, increaseCount, removeFromCart } from '../../../Redux/Actions/CartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useItem } from '../../../contexts/ItemContext';

const ProductButton = ({product}) => {

    const dispatch = useDispatch();

    const {allproducts} = useItem()
    const cartItems = useSelector(state => {
        return state.items.cartItems;
    })
    
    const items = allproducts.filter(pd => {
        let exists = cartItems.find(cartPd => {
            if(pd._id === cartPd._id){
                pd.count = cartPd.count
                return pd
            }
            else 
                return null
        })
        return exists? true : false
    })
    
    const item = items?.find(pd => pd._id === product?._id);
    const handleIncrease = () =>{
        dispatch(increaseCount(product))
    }

    const handleDecrease = () => {
        dispatch(decreaseCount(product))
        console.log(item, item.count)
        if(item.count === 1){
            console.log('here')
            dispatch(removeFromCart(product))
        }
    }

    return (
        <>
        {
            !item?.count &&
            <button onClick={() => dispatch(addToCart(product))} className="single-product-btn btn btn-primary">
                <div className="btn-text">Add</div>
                <span className="btn-plus-icon" ><FontAwesomeIcon icon={faPlus} size="sm"/></span>
            </button>
        }
        
        {
            item?.count > 0 &&
            <div className="counter">
                <button className="single-minus-btn minus" onClick={handleDecrease}><FontAwesomeIcon icon={faMinus} size="sm"/></button>
                <span className="counter-number">{item.count}</span>
                <button className="single-plus-btn  plus" onClick={handleIncrease}><FontAwesomeIcon icon={faPlus} size="sm"/></button>
            </div>
        }
        </>
    );
};

export default ProductButton;