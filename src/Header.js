import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/SearchTwoTone';
import VideoCallIcon from '@material-ui/icons/VideoCallTwoTone';
import AppsIcon from '@material-ui/icons/AppsTwoTone'
import NotificationsIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />      
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>  
            </div>

            <div className="header__input">
                <input type="text" />
                <SearchIcon className="header__inputButton"/>
            </div>

            <div className="header__icons">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar alt="Felipe Acosta" src="https://avatars.githubusercontent.com/u/nadie3"/>
            </div>            
            
            
        </div>
    );
}

export default Header
