import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, SUB_QUANITY } from "../actionTypes"


const addToCart = (product)=>{
    return {
        type:ADD_TO_CART,
        payload:product
    }
}

const removeFromCart = (id)=>{
    return {
        type:REMOVE_FROM_CART,
        payload:id
    }
}

const clearCart = ()=>{
    return {
        type:CLEAR_CART,
    }
}

const addQuantity = (product)=>{
    return {
        type:ADD_QUANTITY,
        payload:product
    }
}


const subQuantity = (product)=>{
    return {
        type:SUB_QUANITY,
        payload:product
    }
}


export{addToCart, addQuantity, removeFromCart, subQuantity, clearCart}