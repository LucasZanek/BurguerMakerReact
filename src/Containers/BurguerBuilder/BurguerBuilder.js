import React, {Component} from 'react';
import Aux from '../../hoc/Auxx'
import Burguer from '../../components/Burguer/Burguer'
import BuildControls from '../../components/Burguer/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary'


const  INGREDIENT_PRICES = {
  salad:0.5,
  cheese:0.6,
  meat:2,
  bacon:0.9
};

class BurguerBuilder extends Component {

state = {
  ingredients: {
    salad:0 ,
    bacon:0,
    cheese:0,
    meat:0,
  },
  totalPrice:4.0,
  purchasable:false,
  purchaseMod:false
}

addIngredientHandler = (type) =>  {
  const oldCount = this.state.ingredients[type]; //tipo de ingrediente en oldCount
  const updateCount = oldCount +1; //sumo1
  const updatedIngredients = { //nuevoObjeto
    ...this.state.ingredients  //paso todo el contenido del viejo objeto
  };
  updatedIngredients[type] = updateCount //al nuevo obje en la posicion type le asigno el valor nuevo
  const priceAdition = INGREDIENT_PRICES[type] //precio del ipo de ingrediente
  const oldPrice = this.state.totalPrice
  const newPrice = oldPrice + priceAdition
  this.setState({totalPrice:newPrice , ingredients:updatedIngredients})
  this.updatePurchaseState(updatedIngredients);
}

removeIngredientHandler = (type) => {
if(this.state.ingredients[type] !== 0){
  const oldCount = this.state.ingredients[type]; //tipo de ingrediente en oldCount
  const updateCount = oldCount -1; //sumo1
  const updatedIngredients = { //nuevoArray
    ...this.state.ingredients  //paso todo el contenido del viejo array
  };
  updatedIngredients[type] = updateCount //al nuevo array en la posicion type le asigno el valor nuevo
  const priceAdition = INGREDIENT_PRICES[type] //precio del ipo de ingrediente
  const oldPrice = this.state.totalPrice
  const newPrice = oldPrice - priceAdition
  this.setState({totalPrice:newPrice , ingredients:updatedIngredients})
  this.updatePurchaseState(updatedIngredients);
}}

resetIngredientHandler = () => {
this.setState({
  ingredients: {
    salad:0 ,
    bacon:0,
    cheese:0,
    meat:0,
  },
  totalPrice:4.0,
  purchasable:false,
  purchaseMod:false
})
}



updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum,el) =>{
        return sum + el;
      },0);

      this.setState({purchasable:sum > 0})
}

purchaseModHandler = () => {
  this.setState({purchaseMod:true})
  console.log(this.state.purchaseMod)
}

purchaseCancelHandler = () => {
  this.setState({purchaseMod:false})
}
purchaseContinueHandler = () => {
  alert('Continue will be avaible soon')
}

  render(){
    const disableInfo = {
      ...this.state.ingredients
    };
    for(let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    console.log(disableInfo)
    return  (<Aux>
              <Modal show={this.state.purchaseMod} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary
                  purchaseCanceled={this.purchaseCancelHandler}
                  purchaseContinue={this.purchaseContinueHandler}
                  ingredients={this.state.ingredients}
                  totalPrice = {this.state.totalPrice}
                />
              </Modal>
              <Burguer ingredients={this.state.ingredients}/>
              <BuildControls
                reset={this.resetIngredientHandler}
                purchasable={this.state.purchasable}
                disabled={disableInfo}
                price={this.state.totalPrice}
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                purchaseButton={this.purchaseModHandler}
                />

            </Aux>
    )
  }
}

export default BurguerBuilder;
