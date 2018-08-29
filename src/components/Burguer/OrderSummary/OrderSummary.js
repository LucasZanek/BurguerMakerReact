import React from 'react';
import Aux from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'
import classes from './OrderSummary.css'


const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey =>{
    return(
      <li key={igKey}>
        <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
      </li>
    )
  });

  return (
    <Aux >

      <h3 className={classes.OrderSummary}>Your Order</h3>
      <p>A delicius burguer with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p className={classes.OrderSummaryPrice}>Total Price {props.totalPrice.toFixed(2)}</p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>

    )



};


export default orderSummary;
