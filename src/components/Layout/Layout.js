import React , {Component} from 'react';
import Aux from '../../hoc/Auxx'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    showSideDrawer:false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer:false})
  }

  sideDrawerOpenHandler = () => {
    
    this.setState({showSideDrawer:true})
  }

  render() {
    return(
      <Aux>
        <Toolbar menuClicked={this.sideDrawerOpenHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div> Toolbar , SideDrawer , BackDrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>

    )
  }
}


export default Layout;
