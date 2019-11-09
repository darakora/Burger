import React, { Component } from "react";
import Aux from '../Auxx/auxHoc';
import './Layout.css';
import ToolBar from '../../components/Navigation/Toolbar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component{
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandle = () => {
        this.setState({
            showSideDrawer: false
        });
    };

    sideDrawerToggleHandler = () => {
        this.setState(( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render(){
        return(
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandle}/>
                <main className='content'>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;