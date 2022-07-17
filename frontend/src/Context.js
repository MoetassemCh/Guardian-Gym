import { createContext, useContext, useReducer } from "react";

import { cartReducer, productReducer } from "./Reducers/Reducers";

import Products from "./components/Product/Products";

const Cart= createContext();


const Context = ({children}) => {


  //hook
  const [state, dispatch]= useReducer(cartReducer, {
    products: Products,//intially
    cart:[]//initially
  });

  const [productState, productDispatch]=useReducer(productReducer, {
    byStock:false,
    searchQuery:"",
  });

  return  <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>//inside cart.provider the hall react app will be raped
};


export default Context;
export const CartState=()=>{
    return useContext(Cart);
};