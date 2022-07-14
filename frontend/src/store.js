// import { configureStore} from "@reduxjs/toolkit";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "../src/Reducers/userReducers";
import { productReducer } from "./Reducers/ProductReducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  product: productReducer,
});


const userInfoFromStoarge=localStorage.getItem('userInfo')
?JSON.parse(localStorage.getItem('userInfo'))
:null

const initialState = {
  userLogin: { userInfo: userInfoFromStoarge },
    userUpdateProfile: userUpdateProfileReducer,

};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);




export default store;