import React, { Component } from 'react';
import imgsrc from './pics/Header_img.png'

class HeaderImg extends Component {
    render() {
        return (
            <div>
                <img src={imgsrc} width='100%' alt='' />
            </div>
        )
    }
}
export default HeaderImg