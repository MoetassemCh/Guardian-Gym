// import { configureStore} from "@reduxjs/toolkit";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userlistReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "../src/Reducers/userReducers";
import {
  productListReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productDetailsReducer,
} from "./Reducers/ProductReducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userlistReducer,
  userDelete: userDeleteReducer,
  userUpdate:userUpdateReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDetails: productDetailsReducer,
});

const userInfoFromStoarge = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

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
