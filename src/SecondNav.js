import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class SecondNav extends Component {
    
    reroute = (e) => {
        this.props.history.push(`/${e.target.id}`)
    }
    
    

    render(){

        return (
            <div>
                <div className='left' id="discover" onClick={this.reroute}>
                    DISCOVER
                </div>
                <div className='right' id="my-plants" onClick={this.reroute}>
                    MY PLANTS
                </div>



            </div>
        )
    }

}

export default withRouter(SecondNav)