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
        if(product.count === 1){
            dispatch(removeFromCart(product))
        }
    }

    console.log(item)
    return (
        <div className="cart-item d-flex justify-content-between align-items-center p-3 border-bottom">
            <div className="d-flex align-items-center justify-content-center">
                <div className="plus-minus d-flex flex-column bg-light p-2">
                    <button className="hover-pointer" onClick={() => dispatch(increaseCount(item))}>
                        <FontAwesomeIcon icon={faPlus} color="gray"/>
                    </button>
                    <span className="text-center">{item.count}</span>
                    <button className="hover-pointer" onClick={() => handleDecrease(item)}>
                        <FontAwesomeIcon icon={faMinus} color="gray"/>
                    </button>
                </div>
                <div className="cart-item-img ml-4">
                    <img src={item.img[0]} alt="" />
                </div>
                <div className="cart-item-desc ml-4">
                    <div className="text-dark">{item.name}</div>
                    {
                        item.sale && item.sale > 0 &&
                        <div className="theme-text">${Number(item.sale)?.toFixed(2)}</div>
                    }
                    {
                        item.sale === 0 || item.sale === null &&
                        <div className="theme-text">${Number(item.price).toFixed(2)}</div>
                    }
                </div>
            </div>
            
            <div className="cart-item-price mr-2 ml-auto">
                $
                {
                    item.sale === 0 || item.sale === null &&
                    (Number(item.price)*Number(item.count)).toFixed(2)
                }
                {
                    item.sale && item.sale > 0 &&
                    (Number(item.sale)*Number(item.count)).toFixed(2)
                }
            </div>
            <GrClose className="hover-pointer cart-item-close" size={14} onClick={()=> dispatch(removeFromCart(item))}></GrClose>
        </div>
    );
};

export default CartItem;