import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class NavBar extends Component {
    
    
    
    buttonClick = (e) => {
        this.props.history.push(`/${e.target.name}`)
    }

    drawButtons = () => {
        return (
            <div className='right'>
                <button id='signin' name="login" onClick={(e) => this.buttonClick(e)}>
                    SIGN IN
                </button> 
                <button id='signup' name="signup" onClick={(e) => this.buttonClick(e)}>
                    SIGN UP
                </button>
            </div>
        )
    }

    drawLogout = () => {
        return (
            <div className='right'>
                <button id='logout' name="logout" onClick={this.props.logout}>
                    LOG OUT
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
                    {this.props.currentUser ? (this.drawLogout()) : (this.drawButtons())}
                    {/* {this.state.buttons && this.drawButtons()} */}
                



            </div>
        )
    }

}

export default withRouter(NavBar)