import React from 'react';
import classes from './Burguer.css'
import BurguerIngredients from './BurguerIngredients/BurguerIngredients'

const burguer = (props) => {
  let transformIngredients  = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])]
    .map((_,i) => {
      return<BurguerIngredients key={igKey + i} type={igKey}/>
    })
  })

//convierto todo a un solo array, con concat los uno
  .reduce((prev,curren) =>{
    return prev.concat(curren)
  },[])
  

  if(transformIngredients.length === 0){
    transformIngredients = <p>Please start Adding Ingredients</p>
  }

    return(
        <div className={classes.Burguer}>
          <BurguerIngredients type="bread-top"/>
          {transformIngredients}
          <BurguerIngredients type="bread-bottom"/>
        </div>
    );
};


export default burguer;
