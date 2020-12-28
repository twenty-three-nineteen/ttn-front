import React from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from './menuContent';
import './menuContent.css';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.openMenu=this.openMenu.bind(this);
    this.closeMenu=this.closeMenu.bind(this);

    this.state = {
      menuOpen: false,
    }
  }

  openMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  Hello(){
    alert("Hey");
  }

  render() {
    
    return <div>
      <CheeseburgerMenu
        topOffset={45}
        isOpen={this.state.menuOpen}
        closeCallback={this.closeMenu}
        >
        <MenuContent className="Cheese" closeCallback={this.closeMenu}/>
      </CheeseburgerMenu>
      
      <HamburgerMenu
        className="DimoMenu"
        isOpen={this.state.menuOpen}
        menuClicked={this.openMenu}
        strokeWidth={3}
        onClick={this.Hello}
        color='black'
        borderRadius={1}
        animationDuration={0.5}
      />
      
     
    </div>
  }
}

export default SideMenu;
