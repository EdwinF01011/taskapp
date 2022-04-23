import React, { Component } from 'react';
import logo from '../logo.svg';


class navigation extends Component{
    render(){
        return(
          <nav className='navbar_nabvar-dark_bg-dark'>
          <a className='text-white'>Task</a>
          <img src={logo} className='App-logo' alt='logo'></img>
          </nav>
        )
    }
}

export default navigation;