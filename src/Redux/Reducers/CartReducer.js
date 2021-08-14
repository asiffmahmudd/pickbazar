
const intitialState = {
    cartItems: []
}

export const CartReducer = (state = intitialState, action) => {
    const product = action.payload;
    switch(action.type){
        case "ADD_TO_CART": {
            const newItem = {}
            newItem.id = product.id
            newItem.count = 1
            let newState = {
                cartItems: [...state.cartItems, newItem]
            }
            localStorage.setItem('cart', JSON.stringify(newState.cartItems))
            return newState;
        }

        case "REMOVE_FROM_CART": {
            let newState = {
                cartItems: state.cartItems.filter(pd=> pd.id !== product.id)
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
                    if(pd.id === product.id){
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
                    if(pd.id === product.id){
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