import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className='navigationItems'>
        <NavigationItem link="/" active={true}>
            Burger Builder
        </NavigationItem>
        <NavigationItem link="/" >
            Checkout
        </NavigationItem>
    </ul>
);

export default navigationItems;