import React from 'react';
import './Ttoolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className='toolbar'>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className='logo'>
            <Logo />
        </div>
        <nav className='desktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;