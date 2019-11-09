import React, { Component } from 'react';
import Aux from '../../../hoc/Auxx/auxHoc';
import Button from '../../UI/Button/Button';

class OlderSummary extends Component {

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey, i) => {
                return (
                    <li key={igKey + i}>
                        <span style={{textTransform: "capitalize"}}>{igKey}</span>:{" "}
                        {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A del burger with the following ing:</p>
                <ul>{ingredientSummary}</ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType='success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    };
}
export default OlderSummary;
