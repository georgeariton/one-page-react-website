import React, {Component} from 'react';
import { Link } from  'react-router-dom';

class FooterLinks extends Component {
    render() {
        return (
            <footer className="bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5 pb-5">
                            <h5>SOME LINKS</h5>
                            <ul className="footer-link-list m-0 p-0 list-unstyled">
                                <li>
                                    <Link className="text-light" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="text-light" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center copyright pb-3">
                            Copyright <i className="text-light">There's no copyright</i><sup>&copy;</sup> 2019
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterLinks;
