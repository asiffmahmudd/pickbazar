export const addToCart = (payload) => {
    return {
        type: "ADD_TO_CART",
        payload: payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: payload
    }
}

export const loadCart = (payload) => {
    return {
        type: "LOAD_CART",
    }
}

export const clearCart = () => {
    return{
        type: 'CLEAR_CART'
    }
}

export const increaseCount = (payload) => {
    return {
        type: "INCREASE_COUNT",
        payload: payload
    }
}

export const decreaseCount = (payload) => {
    return {
        type: "DECREASE_COUNT",
        payload: payload
    }
}