/**
 * Created by balazs on 11/11/2017.
 */
import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import Footer from "./Footer";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = ({ showModal: false });
    }

    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">intro-lead-in</div>
                            <div className="intro-heading">intro-heading</div>
                            <div className="mainsearch text-center">
                                {/*<input className="form-control input-lg text-center" placeholder="Search or button"></input>*/}
                            </div>
                        </div>
                    </div>
                </header>
                <section className="bg-light-gray mainsection">
                    <h1>Sample Component</h1>

                    <h1>Some text to enable scrolling</h1>
                    <h1>Some text to enable scrolling</h1>
                    <h1>Some text to enable scrolling</h1>
                    <h1>Some text to enable scrolling</h1>
                    <h1>Some text to enable scrolling</h1>
                    <h1>Some text to enable scrolling</h1>
                    <h1>Some text to enable scrolling</h1>
                    <h1>Some text to enable scrolling</h1>
                    <h1>Some text to enable scrolling</h1>
                    <h1>Some text to enable scrolling</h1>
                </section>
                <section style={{padding: 0 + 'px'}}>
                    <Footer/>
                </section>
            </div>
        );
    }
}

export default Main;