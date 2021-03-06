
const intitialState = {
    cartItems: []
}

export const CartReducer = (state = intitialState, action) => {
    const product = action.payload;
    switch(action.type){
        case "ADD_TO_CART": {
            const newItem = {}
            newItem._id = product._id
            newItem.count = 1
            let newState = {
                cartItems: [...state.cartItems, newItem]
            }
            localStorage.setItem('cart', JSON.stringify(newState.cartItems))
            return newState;
        }

        case "REMOVE_FROM_CART": {
            let newState = {
                cartItems: state.cartItems.filter(pd=> pd._id !== product._id)
            }
            localStorage.setItem('cart', JSON.stringify(newState.cartItems))
            return newState;
        }

        case "LOAD_CART": {
            let newState ={
                cartItems: JSON.parse(localStorage.getItem('cart'))
            }
            if(!newState.cartItems){
                newState = {
                    cartItems: []
                }
            }
            return newState;
        }

        case "CLEAR_CART": {
            let newState ={
                cartItems: []
            }
            localStorage.removeItem('cart')
            return newState;
        }

        case "INCREASE_COUNT": {
            let newState = {
                cartItems: state.cartItems.map(pd => {
                    if(pd._id === product._id){
                        pd.count++;
                    }
                    return pd;
                })
            }
            localStorage.setItem('cart', JSON.stringify(newState.cartItems))
            return newState;
        }

        case "DECREASE_COUNT": {
            let newState = {
                cartItems: state.cartItems.map(pd => {
                    if(pd._id === product._id){
                        pd.count--;
                    }
                    return pd;
                })
            }
            localStorage.setItem('cart', JSON.stringify(newState.cartItems))
            return newState;
        }

        default: {
            return state;
        }
    }
}