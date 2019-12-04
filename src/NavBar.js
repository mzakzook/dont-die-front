import React, { Component } from 'react';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            buttons: true
        }
    }
    buttonClick = (e) => {
        // this.setState({buttons: false})
        this.props.navButtonClick(e);
    }

    drawButtons = () => {
        return (
            <div className='right'>
                <button id='signin' onClick={(e) => this.buttonClick(e)}>
                    SIGN IN
                </button> 
                <button id='signup' onClick={(e) => this.buttonClick(e)}>
                    SIGN UP
                </button>
            </div>
        )
    }

    render(){
        return (
            <div>
                <div className='left'>
                    DON'T DIE
                </div>
                    {this.state.buttons && this.drawButtons()}
                
            </div>
        )
    }

}

export default NavBar