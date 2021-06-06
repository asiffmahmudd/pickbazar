import React from 'react';
import './Cart.css';
import { GiShoppingBag } from "react-icons/gi";

const Cart = () => {
    return (
        <div className="cart p-3 rounded-left ">
            <div className="count-container d-flex align-items-center justify-content-center">
                <GiShoppingBag color="white"></GiShoppingBag>
                <span className="item-count ml-1"> 5 items</span>
            </div>
            <div className="price=container d-flex justify-content-center mt-2 bg-white pt-2 pb-2 pl-4 pr-4 rounded">
                <span className="price">$0.00</span>
            </div>
        </div>
    );
};

export default Cart;