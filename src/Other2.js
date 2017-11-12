/**
 * Created by balazs on 11/11/2017.
 */
/**
 * Created by balazs on 11/11/2017.
 */
import React, { Component } from 'react';
import Footer from "./Footer";

class Other2 extends Component {
    constructor(props) {
        super(props);
        this.state = ({ showModal: false });
    }

    render() {
        return (
            <div className="fading-page">
                <section  className="bg-light-gray mainsection">

                    <h1>some animated text</h1>
                    <h1>some animated text</h1>
                    <h1>some animated text</h1>
                    <h1>some animated text</h1>
                    <h1>some animated text</h1>

                </section>
                <section style={{padding: 0 + 'px'}}>
                    <Footer/>
                </section>

            </div>

        );
    }
}

export default Other2;