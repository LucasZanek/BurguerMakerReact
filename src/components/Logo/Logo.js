import React from 'react';
import burguerLogo from '../../asset/Images/burguerLogo.png'
import classes from './Logo.css'

const logo = (props) => (
  <div className={classes.Logo} style={{height:props.height}}>
    <img src={burguerLogo} alt="myBurguer" />
  </div>
);


export default logo;
