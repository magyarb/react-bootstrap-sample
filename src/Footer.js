/**
 * Created by balazs on 11/12/2017.
 */
import React, { Component } from 'react';
const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <span className="copyright">&copy; appname 2017</span>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline">
                        <li><a href="https://www.facebook.com/app/"><i
                            className="fa fa-facebook infobutton"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li><a href="#">TOS</a>
                        </li>
                        <li><a href="#">Privacy policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)
export default Footer