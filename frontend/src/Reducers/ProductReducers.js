import{
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL
} from '../constants/productConstants.js'



export const productReducer= (state = { products: [] }, action) => {

switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        // pages: action.payload.pages,
        // page: action.payload.page,
      }
    case PRODUCT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

