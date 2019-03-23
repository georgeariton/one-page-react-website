import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </div>
            </Router>
        );
    }
}

export default App;
