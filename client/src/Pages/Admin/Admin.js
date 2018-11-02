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
        { text: 'Settings', onClick: this._handleItemClick },
        { text: 'Logout', onClick: this._handleItemClick }
      ]}
      onScrimClick={this._toggleMenu}
    //   styles={{ menu: { backgroundColor: 'red' } }}
    />
  ) : null}
  </div>

            
            
           
        </div>
      </nav>

<div className="sidebar"> 
<br></br>
 <div style={{backgroundColor: '#9ae2e6', borderRadius: 6, height: 6, marginLeft: 15, marginRight: 15, width: 6, boxShadow: 'rgb(161,237,214) 0px 0px 10px'}} />
 

</div>

<div style={{backgroundColor: 'whitesmoke', height: '100vh'}}>



</div>



    
    </div>
    
    
  );
  }
}

export default Admin;