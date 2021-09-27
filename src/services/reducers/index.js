import { combineReducers } from 'redux';
import {
  ingredientsReducer,
  orderReducer,
  modalReducer
} from './burger';
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  auth: authReducer,
});