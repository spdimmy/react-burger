import { combineReducers } from 'redux';
import {
  ingredientsReducer,
  orderReducer,
  modalReducer
} from './burger';
import { authReducer } from "./auth";
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  auth: authReducer,
  router: connectRouter(history),
});