import React from 'react';
import './navBar.css';
import MenuDrawer from './MenuDrawer';



const NavBar = () => {
    return (
        <div className ="nav">
            <div className="icon">
                <MenuDrawer/>
            </div>
            <img style = {{cursor : "pointer" }} src ="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" height='85%'/>
        </div>
    )
}

export default NavBar
