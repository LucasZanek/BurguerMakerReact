import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'},

];

const buildControls = (props) => (
      <div className={classes.BuildControls}>
        <h3>Current Price : ${props.price.toFixed(2)}</h3>
        {controls.map(ctrl => (

          <BuildControl
            addIngredient={() => props.addIngredient(ctrl.type)}
            removeIngredient={() => props.removeIngredient(ctrl.type)}
            key={ctrl.label}
            label={ctrl.label}
            disabled={props.disabled[ctrl.type]}
            reset={props.resetIngredientHandler}
          />

        ))}
        <button onClick={props.reset} >RESET List</button>
        <button onClick={props.purchaseButton} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
      </div>
);

export default buildControls;
