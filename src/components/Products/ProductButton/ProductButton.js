import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCount, increaseCount, removeFromCart } from '../../../Redux/Actions/CartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const ProductButton = ({product}) => {

    const dispatch = useDispatch();
    const items = useSelector(state => {
        return state.items;
    })

    const item = items?.cartItems?.find(pd => pd._id === product?._id);
    // const [productAdded, setProductAdded] = useState(false);
    // const [count, setCount] = useState(0);
    // const addProduct = () =>{
    //     setProductAdded(true);
    //     setCount(1);
    // }

    const handleIncrease = () =>{
        dispatch(increaseCount(product))
    }

    const handleDecrease = () => {
        dispatch(decreaseCount(product))
        if(item.count === 0){
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
            item?.count &&
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