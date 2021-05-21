import React, {useEffect, useReducer} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor  from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import {endpointIngredients} from '../../utils/constants';
import {ModalContext} from  '../../services/modalContext';
import {IngredientsContext} from  '../../services/ingredientsContext';

const modalInitialState = {
  isOpen: false,
  header: '',
  content: null,
};

function modalReducer(state, action) {
  switch (action.type) {
    case 'open':
      return {
        isOpen: true,
        header: action.header,
        content: action.content,
      };
    case 'close':
      return modalInitialState;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function ingredientsReducer(state, action) {
  switch (action.type) {
    case 'load':
      return action.payload;
    case 'add':
      return state.map(ingredient => {
        // Try to find prev active bun to erase
        if (ingredient.type === 'bun' &&
            action.productType === 'bun' &&
            ingredient._id !== action.id &&
            ingredient.active
        ) {
          return {
            ...ingredient,
            active: false,
            count: 0
          }
        }

        // Look for clicked item
        if (ingredient._id === action.id) {
          return {
            ...ingredient,
            active: true,
            count: ingredient.type === 'bun' ? 2 : ingredient.count + 1
          }
        } else {
          return ingredient;
        }
      });
    case 'remove':
      return state.map(ingredient =>
        ingredient._id === action.id ? {...ingredient, active: false, count: 0} : ingredient
      );
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function App() {
  const endpoint = endpointIngredients;
  const [currentModal, modalDispatcher] = useReducer(modalReducer, modalInitialState, undefined);
  const [ingredients, ingredientsDispatcher] = useReducer(ingredientsReducer, [], undefined);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(endpoint);
        if (!response.ok) { throw new Error('Ответ сети был не ok') }
        return await response.json();
      };

      fetchData().then(ingredients => {
        const updatedIngredients = ingredients.data.map(ingredient => ({
          ...ingredient,
          active: false,
          count: 0
        }));

        ingredientsDispatcher({
          type: 'load',
          payload: updatedIngredients
        })
      });
    } catch (error) {
      throw new Error(error);
    }
  }, [endpoint]);

  return (
    <>
      <ModalContext.Provider value={{currentModal, modalDispatcher}}>
        <div className={styles.app}>
          <AppHeader />
          <main className={`container ${styles.main}`}>
            <h1 className={`text text_type_main-large mb-2`}>Соберите бургер</h1>
            <div className={styles.cols}>
              <IngredientsContext.Provider value={{ingredients, ingredientsDispatcher}}>
                <BurgerIngredients />
                <BurgerConstructor />
              </IngredientsContext.Provider>
            </div>
          </main>
        </div>
        {currentModal.isOpen && <Modal />}
      </ModalContext.Provider>
    </>
  );
}

export default App;
