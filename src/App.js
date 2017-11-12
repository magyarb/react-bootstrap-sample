import React from 'react';
import './App.css';
import './agency.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Main from './Main';
import ContentWrapper from "./ContentWrapper";

class App extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.location.pathname === "/") {
            this.state = {
                affix: false,
                user: "",
                inny: false,
                showModal: false
            };
        }
        else {
            this.state = {
                affix: true,
                user: "",
                inny: false,
                showModal: false
            };
        }
    }

    //Adds event listener for scrolling (navbar design change)
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if (this.props.location.pathname === "/") {
            var offset = 1;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            if (!this.state.affix && scrollTop >= offset) {
                this.setState({
                    affix: true
                });
            }

            if (this.state.affix && scrollTop < offset) {
                this.setState({
                    affix: false
                });
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({inny: false});
        if (nextProps.location.pathname === "/") {
            this.setState({
                affix: false
            });
            window.scrollTo(0, 0);
        }
        else {
            this.setState({
                affix: true
            });
        }

        //console.log(this.state);
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    toggleIn(e) {
        if (this.state.inny === false) {
            this.setState({inny: true});
        }
        else {
            this.setState({inny: false});
        }

    }


    render() {

        var affix = this.state.affix ? 'affix' : '';
        var className = "navbar navbar-default navbar-custom navbar-fixed-top";
        var inny = this.state.inny ? 'in' : '';
        var collName = "collapse navbar-collapse";
        const {match, location, history} = this.props;
        return (

            <div className="App">

                <nav id="mainNav" className={className + ' ' + affix}>
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" onClick={this.toggleIn.bind(this)}>
                                <span className="sr-only">Toggle navigation</span><i className="fa fa-bars"></i>
                            </button>
                            <Link to="/" className="navbar-brand page-scroll">AppName</Link>
                        </div>
                        <div className={collName + ' ' + inny} id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/other">other1</Link></li>
                                <li><Link to="/other2">other2</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                    <Switch>
                        <Route
                            location={location}
                            key='1'
                            exact path='/'
                            component={Main}
                        />
                        <Route
                            location={location}
                            key='3'
                            path='*'
                            component={ContentWrapper}
                        />
                    </Switch>
            </div>
        );

    }
}

export default App
