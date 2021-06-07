import React from 'react';
import './GroceryItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCount, increaseCount, removeFromCart } from '../../../Redux/Actions/CartActions';

const GroceryItem = ({product}) => {

    const dispatch = useDispatch();
    const items = useSelector(state => {
        return state.items;
    })

    const item = items?.cartItems?.find(pd => pd.id === product.id);
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
        <div className="grocery mt-4 col-md-3">
            <div className="card shadow-sm">
                <img className="card-img-top" src={product.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">${product.price}</h5>
                    <p className="card-text">{product.name}</p>
                    {
                        !item?.count &&
                        <button onClick={() => dispatch(addToCart(product))} className="btn btn-primary">
                            <div className="btn-text">Add</div>
                            <span className="btn-plus-icon" ><FontAwesomeIcon icon={faPlus} size="sm"/></span>
                        </button>
                    }
                    
                    {
                        item?.count &&
                        <div className="counter">
                            <button className="minus" onClick={handleDecrease}><FontAwesomeIcon icon={faMinus} size="sm"/></button>
                            <span className="counter-number">{item.count}</span>
                            <button className="plus" onClick={handleIncrease}><FontAwesomeIcon icon={faPlus} size="sm"/></button>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default GroceryItem;