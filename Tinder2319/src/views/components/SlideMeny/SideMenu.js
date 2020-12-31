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
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }


  render() {
    
    return <div>
      <CheeseburgerMenu
        isOpen={this.state.menuOpen}
        closeCallback={this.closeMenu}
        >
        <MenuContent className="ContMenu" closeCallback={this.closeMenu}/>
      </CheeseburgerMenu>
      
      <HamburgerMenu
        className="DimoMenu"
        isOpen={this.state.menuOpen}
        menuClicked={this.openMenu}
        strokeWidth={3}
        rotate={0}
        color='black'
        borderRadius={1}
        animationDuration={0.5}
      />
    </div>
  }
}

export default SideMenu;