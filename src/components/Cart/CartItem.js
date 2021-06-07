import React from 'react';
import { GrClose } from "react-icons/gr";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { decreaseCount, increaseCount, removeFromCart } from '../../Redux/Actions/CartActions';
import { useDispatch } from 'react-redux';

const CartItem = ({item}) => {

    const dispatch = useDispatch();
    const handleDecrease = (product) => {
        dispatch(decreaseCount(product))
        if(product.count === 0){
            dispatch(removeFromCart(product))
        }
    }
    return (
        <div className="cart-item d-flex justify-content-between align-items-center p-3 border-bottom">
            <div className="d-flex align-items-center justify-content-center">
                <div className="plus-minus d-flex flex-column bg-light p-2">
                    <span className="hover-pointer" onClick={() => dispatch(increaseCount(item))}><FontAwesomeIcon icon={faPlus} size="xs" color="gray"/></span>
                    <span>{item.count}</span>
                    <span className="hover-pointer" onClick={() => handleDecrease(item)}><FontAwesomeIcon icon={faMinus} size="xs" color="gray"/></span>
                </div>
                <div className="cart-item-img ml-4">
                    <img src={item.img} alt="" />
                </div>
                <div className="cart-item-desc ml-4">
                    <div className="text-dark">{item.name}</div>
                    <div className="theme-text">${item.price.toFixed(1)}</div>
                </div>
            </div>
            
            <div className="cart-item-price mr-2 ml-auto">
                ${(item.price*item.count).toFixed(2)}
            </div>
            <GrClose className="hover-pointer cart-item-close" size={14} onClick={()=> dispatch(removeFromCart(item))}></GrClose>
        </div>
    );
};

export default CartItem;