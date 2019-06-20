import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import heroImg from '../../media/hero-img.jpg';
import Signup from '../Signup/Signup';
import './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div>
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
                        <img className="infoIcon" src={heroImg}/>
                        <h4>Easy to Customize</h4>
                        <div className="spacer ten"></div>
                        <p>The easiest tool online to build an exercises workout plan and save it to use whenever, wherever.</p>
                    </div>
                    <div className="oneThird">
                        <img className="infoIcon" src={heroImg}/>
                        <h4>Easy to Customize</h4>
                        <div className="spacer ten"></div>
                        <p>The easiest tool online to build an exercises workout plan and save it to use whenever, wherever.</p>
                    </div>
                    <div className="oneThird">
                        <img className="infoIcon" src={heroImg}/>
                        <h4>Easy to Customize</h4>
                        <div className="spacer ten"></div>
                        <p>The easiest tool online to build an exercises workout plan and save it to use whenever, wherever.</p>
                    </div>
                </div>
                <div className='container'>
                    <div className="lastContainer">
                        <h3>I like to eat green eggs and ham</h3>
                        <div className="spacer ten"></div>
                        <p>The easiest tool online to build an exercises workout plan and save it to use whenever, wherever.</p> 
                    </div>
                    <img className="final" src={heroImg}/>
                </div>

            </div>
         )
    }
}


