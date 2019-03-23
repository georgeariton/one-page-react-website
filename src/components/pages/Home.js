import React, {Component} from 'react';
import Navigation from "./header/Navigation";
import FooterLinks from "./footer/FooterLinks";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        return (
            <div className="page home-page">
                <header>
                    <Navigation/>
                    <div className="masthead">
                        <h2>Welcome to this Demo!</h2>
                        <h1>It's fantabulous!</h1>
                    </div>
                </header>
                <section className="section bg-light text-center text-sm-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 py-5">
                                <h2 className="pb-3">How is "this" the intro?</h2>
                                <p>
                                    Well, it's the first block in the content of the home page... so there's that...
                                </p>
                                <p>
                                    And there is this link
                                    <span className="d-block d-sm-inline">
                                        <Link className="ml-sm-3 nav-link btn-info rounded d-inline-block" to="/about">About</Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterLinks/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
