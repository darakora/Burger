import React from "react";
import './Burger.css';
import burgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
               return <span key={igKey + i} >{burgerIngredient(igKey)}</span>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if(transformIngredients.length === 0){
        transformIngredients = <p>Please start adding ingredients!!</p>
    }

    return (
        <div className="burger">
            {burgerIngredient('bread-top')}
            {transformIngredients}
            {burgerIngredient('bread-bottom')}
        </div>
    );
};

export default burger;