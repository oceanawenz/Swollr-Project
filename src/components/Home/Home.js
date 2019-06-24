import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import heroImg from '../../media/hero-img.jpg';
import Signup from '../Signup/Signup';
import signupImg from '../../media/sign-up.png';
import listImg from '../../media/build-a-list.png';
import saveImg from '../../media/save-n-workout.png';
import swollImg from '../../media/get-swoll.jpg';
import './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <section className="heroBG">
                    <div className="container">
                        <div className="heroContent">
                            <h1>WORKOUT PLANS MADE EASY</h1>
                            <p>The easiest tool online to build an exercises workout plan and save it to use whenever, wherever.</p>
                            <div className="spacer"></div>
                           <Signup/>
                            
                        </div>
                        {/* <img src={heroImg}/> */}
                    </div>
                </section>
                <div className='container'>
                    <h3 className="sectionTitle">How It Works</h3>
                    <div className="oneThird">
                        <img className="infoIcon" src={signupImg}/>
                        <h4>SIGNUP <br></br>OR LOGIN</h4>
                        <div className="spacer ten"></div>
                        <p>Create an account to get started, or you can login at the top if you're already a user.</p>
                    </div>
                    <div className="oneThird">
                        <img className="infoIcon" src={listImg}/>
                        <h4>ADD A NEW WORKOUT PLAN</h4>
                        <div className="spacer ten"></div>
                        <p>Quickly build your custom workouts simply by adjusting sets and reps and adding it to your list.</p>
                    </div>
                    <div className="oneThird">
                        <img className="infoIcon" src={saveImg}/>
                        <h4>Save to your Workouts</h4>
                        <div className="spacer ten"></div>
                        <p>Boom. Once you save your custom plan, you'll be able to view it whenever.</p>
                    </div>
                </div>
                <div className='container'>
                    <div className="lastContainer">
                        <h3>TIME TO GET SWOLL</h3>
                        <div className="spacer ten"></div>
                        <p>No more worrying about exercise routines</p> 
                    </div>
                    <img className="final" src={swollImg}/>
                </div>

            </div>
         )
    }
}


