import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, Switch, StaticRouter, Route } from 'react-router-dom';
import About from '../containers/About'
import Contact from '../containers/Contact'
import Projects from "../containers/Projects"
import Testimony from "../containers/Testimony"
import Invest from "../containers/Invest"
// Containers
import Home from "../containers/Home";


export class Urls extends Component {

    render() {

        return (
            <div>
                <div className="loader">
                    <i className="spinner-grow text-primary h1"></i>
                </div>
                {/* forceRefresh={true} */}
                <BrowserRouter>
                    {/* <Router> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/invest" component={Invest} />
                        <Route exact path="/testimony" component={Testimony} />

                    </Switch>
                    {/* </Router> */}
                </BrowserRouter>

                <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
                <div id="preloader"></div>
            </div>
        )
    }
}
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
});

export default Urls;

