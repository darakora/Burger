import React from "react";
import Aux from '../../hoc/auxHoc';
import classes from './Layout.css';

const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes}>
             {props.children}
        </main>
    </Aux>
);

export default Layout;