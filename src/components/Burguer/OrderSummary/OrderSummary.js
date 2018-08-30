import React , {Component} from 'react';
import Aux from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'
import classes from './OrderSummary.css'


class OrderSummary extends Component {
  //this could be a functional component , for debuggin is a statefull component

  componentWillUpdate(){
    console.log('Order summary will update  ')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey =>{
      return(
        <li key={igKey}>
          <span style={{textTransform:'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
        </li>
      )
    });
    return(
       <Aux >
        <h3 className={classes.OrderSummary}>Your Order</h3>
        <p>A delicius burguer with the following ingredients</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p className={classes.OrderSummaryPrice}>Total Price {this.props.totalPrice.toFixed(2)}</p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
      </Aux>)
  }
}




export default OrderSummary;
