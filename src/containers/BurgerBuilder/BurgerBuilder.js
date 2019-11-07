import React, { Component } from "react";
import Aux from "../../hoc/auxHoc";
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Burger controls</div>
                <div>Burger controls</div>

            </Aux>
        );
    };
}

export default BurgerBuilder;
