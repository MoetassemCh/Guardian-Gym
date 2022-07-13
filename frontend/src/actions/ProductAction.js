import axios from "axios";

import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from "../constants/productConstants";



export const Products=()=>async(dispatch)=>{
try{
dispatch ({type:PRODUCT_REQUEST})

const { data } = await axios.get("/products");
dispatch({
    type:PRODUCT_SUCCESS,
    payload:data
})

}

catch(error){
dispatch({
  type: PRODUCT_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});
}

}