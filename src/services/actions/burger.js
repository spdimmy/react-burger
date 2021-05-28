import {endpointIngredients, endpointOrders} from "../../utils/constants";
import OrderDetails from "../../components/order-details/order-details";
import React from "react";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const UPDATE_CONSTRUCTOR_ORDER = 'UPDATE_CONSTRUCTOR_ORDER';

export function getIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });

    try {
      const fetchData = async () => {
        const response = await fetch(endpointIngredients);
        if (!response.ok) {
          dispatch({
            type: GET_INGREDIENTS_FAILED
          });
        }
        return await response.json();
      };

      fetchData().then(ingredients => {
        const updatedIngredients = ingredients.data.map(ingredient => ({
          ...ingredient,
          count: 0
        }));

        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          items: updatedIngredients
        });
      });
    } catch (error) {
      dispatch({
        type: GET_INGREDIENTS_FAILED
      });
    }
  };
}

export function getOrder(activeIngredientsIds) {
  return function(dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    });

    try {
      const fetchData = async () => {
        const response = await fetch(endpointOrders, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ingredients: activeIngredientsIds
          }),
        });

        if (!response.ok) {
          dispatch({
            type: GET_ORDER_FAILED
          });
        }

        return await response.json();
      };

      fetchData().then(data => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: data.order.number,
        });

        dispatch({
          type: OPEN_MODAL,
          header: '',
          content: <OrderDetails order={data.order.number} />,
        });
      });
    } catch(error) {
      dispatch({
        type: GET_ORDER_FAILED
      });
    }
  };
}