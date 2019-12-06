import React, { Component } from 'react';
import './Landing.css'
import googlepic from './pics/googleplay.png'
import applepic from './pics/App-store-button.png'
import topPic from './pics/LearnandDiscover.png'
import middlePic from './pics/TrackYourPlants.png'
import bottomPic from './pics/GetNotified.png'

class Landing extends Component {

    render() {

        return (
            <div className='landingWrapper'>
                <div className='landingLeft'>
                    
                    <img className ='landingImg' src={topPic} alt='' />
                    <div className='landingContent'>
                        <h2>Learn & Discover</h2>
                        Determine which plants you are least prone to kill.
                    </div>
                </div>

                <div className='landingRight'>
                    <div className='landingContent'>
                        <h2>Create Catalog</h2>
                        Up your plant game.  Add new plant members and keep track of their 
                        progress and watering schedule.
                    </div>
                    <img className ='landingImg' src={middlePic} alt='' />

                </div>

                <div className='landingLeft'>
                    <img className='landingImg' src={bottomPic} alt='' />
                    <div className='landingContent'>
                        <h2>Get Notified</h2>
                        Thirsty plants are not a good look.  Create water schedules for 
                        each plant and recieve reminders to keep them properly hydrated 
                        and happy.
                    </div>
                </div>
                <div className='landingFooter'>
                    <h2>Download DON'T DIE App</h2>
                    <img className='appButton' src={applepic} alt='' />
                    <img className='appButton' src={googlepic} alt='' />
                </div>
            </div>
        )
    }
}
export default Landing;