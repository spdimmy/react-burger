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
    case 'add':
      return action.payload;
    case 'update':
      // Update state of item and count
      return state.map(ingredient => {
        // Find clicked item
        if (ingredient._id === action.id) {
          // Check if it's a bun
          if (ingredient.type === 'bun') {
            // Try to find prev bun
            const prevBun = state.find(ingredient => ingredient.type === 'bun' && ingredient.active);
            // If exist remove count and state, only one bun could be active at once
            if (prevBun) {
              prevBun.active = false;
              prevBun.count = 0;
            }
            // Set active bun
            ingredient.count = 2;
            ingredient.active = true;
          } else {
            // Process other items
            ingredient.active = true;
            ingredient.count += 1;
          }
        }

        return ingredient;
      });
    case 'remove':
      return state.map(ingredient => {
        // Find clicked item
        if (ingredient._id === action.id) {
          ingredient.active = false;
          ingredient.count = 0;
        }

        return ingredient;
      });
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
        const updatedIngredients = ingredients.data.map(ingredient => {
          ingredient.active = false;
          ingredient.count = 0;

          return ingredient;
        });

        ingredientsDispatcher({
          type: 'add',
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
