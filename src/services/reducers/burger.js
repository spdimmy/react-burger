import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_CONSTRUCTOR_ORDER
} from '../actions/burger';
import {v4 as uuidv4} from "uuid";

const ingredientsInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  activeIngredients: []
};

const orderInitialState = {
  order: Number,
  orderRequest: false,
  orderFailed: false,
};

const modalInitialState = {
  isOpen: false,
  header: '',
  content: null,
};

export const ingredientsReducer = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.items,
        ingredientsFailed: false,
        ingredientsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }
    case ADD_INGREDIENT: {
      let newState = state.ingredients.map(ingredient => {
        // Try to find prev active bun to erase
        if (ingredient.type === 'bun' &&
          action.productType === 'bun' &&
          ingredient._id !== action.id
        ) {
          return {
            ...ingredient,
            count: 0
          }
        }

        // Look for clicked item
        if (ingredient._id === action.id) {
          return {
            ...ingredient,
            count: ingredient.type === 'bun' ? 2 : ingredient.count + 1
          }
        } else {
          return ingredient
        }
      });

      const prevActiveUpdated = action.productType === 'bun'
        ? state.activeIngredients.filter(el => el.type !== 'bun')
        : state.activeIngredients;

      const newActive = {
        ...state.ingredients.find(ingredient => ingredient._id === action.id),
        activeId: uuidv4(),
      };

      return {
        ...state,
        ingredients: newState,
        activeIngredients: [
          ...prevActiveUpdated,
          newActive
        ],
      };
    }
    case REMOVE_INGREDIENT: {
      let newState = [...state.ingredients].map(ingredient => ingredient._id === action.id ? {...ingredient, count: ingredient.count - 1} : ingredient);

      return {
        ...state,
        ingredients: newState,
        activeIngredients: state.activeIngredients.filter(ingredient => ingredient.activeId !== action.activeId)
      };
    }
    case UPDATE_CONSTRUCTOR_ORDER: {
      const activeIngredients = [...state.activeIngredients];

      activeIngredients.splice(action.to, 0, activeIngredients.splice(action.from, 1)[0]);

      return {
        ...state,
        activeIngredients
      }
    }
    default: {
      return state;
    }
  }
};

export const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderFailed: false,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        order: orderInitialState.order,
        orderFailed: true,
        orderRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const modalReducer = (state = modalInitialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        isOpen: true,
        header: action.header,
        content: action.content,
      };
    }
    case CLOSE_MODAL: {
      return modalInitialState;
    }
    default: {
      return state;
    }
  }
};
