import {
  ADD_QUANTITY,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SUB_QUANITY,
} from "../actionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update the quantity
        const updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product doesn't exist in the cart, add it
        return {
          ...state,
          cart: [...state.cart, { product: action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
      console.log("removing");
      return {
        ...state,
        cart: updatedCart,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case ADD_QUANTITY:
      const addProductId = action.payload;
      const increasedCart = state.cart.map((item) =>
        item.product.id === addProductId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      // console.log("Adding")
      return {
        ...state,
        cart: increasedCart,
      };
    case SUB_QUANITY:
      const subProductId = action.payload;
      const decreasedCart = state.cart.map((item) =>
        item.product.id === subProductId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
      return {
        ...state,
        cart: decreasedCart,
      };
    default:
      return state;
  }
};

export { cartReducer };
