//{ Component } is the same as:
//const Component = React.component;
import React, { Component } from 'react';
import logo from './logo.svg';

//class and header need to match
class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
        );
    }
}


export default Header;