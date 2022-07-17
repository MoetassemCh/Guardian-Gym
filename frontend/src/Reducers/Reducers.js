export const cartReducer=(state, action)=>{//action takes 2 things:type & payload the contains the data that we want to put it in the state
    switch(action.type){
       case "ADD_TO_CART":
       return {...state, cart: [...state.cart, {...action.payload, qty:1}]};//return all state,and manipulate the cart state by getting data quantity  1 by action payload
        
       case "REMOVE_FROM_CART":
       return {...state, cart: state.cart.filter((c)=>c.id !== action.payload.id)};

       case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };//if the prod in the cart let its qty equal to the action qty other wise let it be as the default value
       default:
            return state;
    }
};

export const productReducer=(state,action)=>{
    switch(action.type){
       case "SORT_BY_PRICE":
         return {...state, sort:action.payload};//coming from our app action

         case "FILTER_BY_STOCK":
            return{...state, byStock:!state.byStock};

        case "FILTER_BY_SEARCH":
            return  {...state, searchQuery:action.payload};

        case "CLEAR_FILTERS":
            return {//when clearing let all be in their default values as defined in the context
                byStock:false,
                
            }

    default:
        return state;
}
};

