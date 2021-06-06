
const intitialState = {
    cartItems: []
}

export const CartReducer = (state = intitialState, action) => {
    switch(action.type){
        case "ADD_TO_CART": {
            let newState = {
                cartItems: [...state.cartItems, action.payload]
            }
            return newState;
        }
    }
}