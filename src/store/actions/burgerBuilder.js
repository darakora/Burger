import * as actionType from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = (name) => {
  return {
    type:actionType.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = (name) => {
    return {
        type:actionType.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const  setIngredients = (ingredients) => {
  return {
      type: actionType.ADD_INGREDIENT,
      ingredients: ingredients
  };
};

export const fetchIngredientsFailed = (ingredients) => {
    return {
        type: actionType.FETCH_INGREDIENT_FAILED,
        ingredients: ingredients
    }
};

export const initIngredients =() => {
  return dispatch => {
      axios.get('https://react-my-burger-b4518.firebaseio.com/ingredients.json')
          .then(response => {
              dispatch(setIngredients(response.data));
          })
          .catch(error => {
              dispatch(fetchIngredientsFailed());
          });
  };
};