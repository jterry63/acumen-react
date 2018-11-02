import React, { Component } from "react";
import { Icon, Button, SimpleSelect } from 'mx-react-components';
import './Admin.css';
const { Styles } = require('mx-react-components');




class Admin extends Component {

    state = {
        selectedItem: null,
        showMenu: false
      };
    
      _handleItemClick = (e, item) => {
        this._toggleMenu();
        this.setState({ selectedItem: item.text });
      };
    
      _toggleMenu = () => {
        this.setState(state => ({ showMenu: !state.showMenu }));
      };
    
  render() {
    
    
    return (
      <div>



       <nav>
        <div className="nav-wrapper" style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,.08)'}}>
          <a href="#" className="brand-logo"><img src="images/acumen3.png" /></a>
          <div className="right" style={{marginRight: "50px", marginTop: '5px'}}>
          <Button
    icon='gear'
   
    onClick={this._toggleMenu}
    type='primaryOutline'
    styles={{ base: { fill: '#959CA6' } }}
    // styles={{ menu: { backgroundColor: 'red' } }}
  >
  
  </Button>
  {this.state.showMenu ? (
    <SimpleSelect
      aria-label='Select a category'
      items={[
        { icon: 'auto', text: 'Auto', onClick: this._handleItemClick },
        { icon: 'kids', isSelected: true, text: 'Kids', onClick: this._handleItemClick },
        { icon: 'pets', text: 'Pets', onClick: this._handleItemClick }
      ]}
      onScrimClick={this._toggleMenu}
    //   styles={{ menu: { backgroundColor: 'red' } }}
    />
  ) : null}
  </div>

            
            
           
        </div>
      </nav>

<div className="sidebar"> 


</div>

<div style={{backgroundColor: 'whitesmoke', height: '100vh'}}>



</div>

    
    </div>
    
    
  );
  }
}

export default Admin;