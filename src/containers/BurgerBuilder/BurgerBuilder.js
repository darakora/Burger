import React, { Component } from "react";
import Aux from "../../hoc/Auxx/auxHoc";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from '../../axios-order';

class BurgerBuilder extends Component {

    state = {
        purchasing: false
    };

    componentDidMount() {
        console.log(this.props);
        this.props.onInitIngredients();
    };

    updatePurchasableState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
               return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    // addIngredientHandler = type => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {...this.state.ingredients};
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: updatedIngredients
    //     });
    //     this.updatePurchasableState(updatedIngredients);
    // };

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount <= 0) return;
    //
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {...this.state.ingredients};
    //     updatedIngredients[type] = updatedCount;
    //     const priceDiduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDiduction;
    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: updatedIngredients
    //     });
    //     this.updatePurchasableState(updatedIngredients);
    // };

    purchaseHandler = () => {
       this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    };

    render() {
        const disableInfo = {
            ...this.props.ings
        };

        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;

        if( this.props.ings ) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disableInfo}
                        purchasable={this.updatePurchasableState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.price}/>
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}/>;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                       modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                    {burger}
            </Aux>
        );
    };
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
};

const  mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (igName) => dispatch(actions.addIngredient(igName)),
        onIngredientRemoved: (igName) => dispatch(actions.removeIngredient(igName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler( BurgerBuilder, axios));

