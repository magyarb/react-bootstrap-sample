/**
 * Created by balazs on 11/11/2017.
 */
/**
 * Created by balazs on 11/11/2017.
 */
import React from 'react';
import './App.css';
import './agency.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';

import Main from './Main';
import Other from './Other';
import Other2 from './Other2';
import Error404 from './Error404';

class ContentWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ showModal: false });
    }

    render() {
        const {match, location, history} = this.props;
        return (
            <div>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                    >
                        <Route
                            location={location}
                            key='2'
                            path='/other'
                            component={Other}
                        />
                        <Route
                            location={location}
                            key='4'
                            path='/other2'
                            component={Other2}
                        />
                        <Route
                            location={location}
                            key='3'
                            path='*'
                            component={Error404}
                        />
                    </AnimatedSwitch>
            </div>
        );
    }
}


export default ContentWrapper;