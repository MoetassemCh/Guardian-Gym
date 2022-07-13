// import { configureStore} from "@reduxjs/toolkit";
import {
  userLoginReducer,
  userRegisterReducer,
} from "../src/Reducers/userReducers";
import { productReducer } from "./Reducers/ProductReducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  product:productReducer
});


const userInfoFromStoarge=localStorage.getItem('userInfo')
?JSON.parse(localStorage.getItem('userInfo'))
:null

const initialState = {
  userLogin: { userInfo: userInfoFromStoarge },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);




export default store;