import React from 'react';
import classes from './Button.css'

const button = (props) => (

  <div
    onClick={props.click}
    className={classes.Button}>
    <div></div>
    <div></div>
    <div></div>
  </div>

)

export default button;
