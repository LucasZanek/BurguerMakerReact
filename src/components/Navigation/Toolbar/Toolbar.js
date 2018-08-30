import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Button from '../Button/Button'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
      <Button click={props.menuClicked}/>
      <Logo height="80%"/>
      <nav className={classes.DesktopOnly}>
        <NavigationItems/>
      </nav>

    </header>
);

export default toolbar;
