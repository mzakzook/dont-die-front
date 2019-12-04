import React, { Component } from 'react';
import './Landing.css'
import googlepic from './pics/googleplay.png'
import applepic from './pics/App-store-button.png'

class Landing extends Component {

    render() {

        return (
            <div className='landingWrapper'>
                <div className='landingLeft'>
                    
                    <img className ='landingImg' src="https://image.shutterstock.com/image-photo/young-plant-pomelo-soil-humus-260nw-748350841.jpg" alt='' />
                    <div className='landingContent'>
                        <h2>Research & Discover</h2>
                        This is testing any text below the sections heading.  What will lots of text look like?  Many 
                        people would like to know!  Such people may also want tot know that the first word in the last 
                        sentence (i.e. "Many") has a carriage return after it.  As well as "last" in the last sentence.
                    </div>
                </div>

                <div className='landingRight'>
                    <div className='landingContent'>
                        <h2>Create Catalog</h2>
                        This might very well be another example of what a good number or words, placed together in 
                        sentences, will look like when rendered inside of a div, in another div, in another div, drawn
                        by the return function of this class component.
                    </div>
                    <img className ='landingImg' src="https://image.shutterstock.com/image-photo/young-plant-pomelo-soil-humus-260nw-748350841.jpg" alt='' />

                </div>

                <div className='landingLeft'>
                    <img className='landingImg' src="https://image.shutterstock.com/image-photo/young-plant-pomelo-soil-humus-260nw-748350841.jpg" alt='' />
                    <div className='landingContent'>
                        <h2>Get Notified</h2>
                        You get the idea.
                    </div>
                </div>
                <div className='landingFooter'>
                    <h2>DOWNLOAD APP</h2>
                    <img className='appButton' src={applepic} alt='' />
                    <img className='appButton' src={googlepic} alt='' />
                </div>
            </div>
        )
    }
}
export default Landing;