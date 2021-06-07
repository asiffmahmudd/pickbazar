
const intitialState = {
    cartItems: []
}

export const CartReducer = (state = intitialState, action) => {
    const product = action.payload;
    switch(action.type){
        case "ADD_TO_CART": {
            product.count = 1;
            let newState = {
                cartItems: [...state.cartItems, product]
            }
            return newState;
        }

        case "REMOVE_FROM_CART": {
            let newState = {
                cartItems: state.cartItems.filter(pd=> pd.id !== product.id)
            }
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
            return newState;
        }

        default: {
            return state;
        }
    }
}