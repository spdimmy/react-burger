import { combineReducers } from 'redux';
import {
  ingredientsReducer,
  orderReducer,
  modalReducer
} from './burger';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer
});