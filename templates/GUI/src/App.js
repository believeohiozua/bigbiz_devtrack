import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
// import { Helmet } from "react-helmet";
// import AlertTemplate from 'react-alert-template-basic';
import store from './store';
import Urls from "./components/base/Urls"
import Alerts from "./components/base/Alerts"
import './App.css';
// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
};


function closeAlert(e) {
    e.preventDefault();
    document.getElementById('alerter').style.display = "none";
}

const AlertTemplate = ({ style, options, message, close }) => (
    < div style={{ margin: "5em" }} className="text-center mx-auto" id="alerter">
        <div className="">
            {options.type === 'info' && <div className="text-info rounded-pill px-2 animated fadeUp" style={{ animationDelay: '.3s' }} data-aos="zoom-in"> {message}  </div>}
            {options.type === 'success' && <div className="text-success rounded-pill px-2 animated fadeUp" style={{ animationDelay: '.3s' }} data-aos="zoom-in"> {message}  </div>}
            {options.type === 'error' && <div className="text-danger rounded-pill px-2 animated fadeUp" style={{ animationDelay: '.3s' }} data-aos="zoom-in"> {message}  </div>}
            {/* <button style={{ zIndex: 999999 }} onClick={closeAlert} type="button" className="ml-2 mb-1 close">
                <span>&times;</span>
            </button> */}
        </div>
    </div >
)


class App extends Component {

    render() {

        return (
            <Provider store={store}>
                {/* <AlertProvider template={AlertTemplate} {...alertOptions}> */}
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <div >
                            <Alerts />
                        </div>
                        <Urls />

                    </Fragment>
                </AlertProvider>
                {/* <Helmet>
                    <script src="static/js/popper.min.js" type="text/javascript" defer={false} />
                    <script src="static/js/bootstrap.min.js" type="text/javascript" defer={false} />
                    <script src="static/js/jquery.magnific-popup.min.js" type="text/javascript" defer={false} />
                    <script src="static/js/wow.min.js" type="text/javascript" defer={false} />
                    <script src="static/js/main.js" type="text/javascript" defer={false} />
                    <script src="static/js/script.js" type="text/javascript" defer={false} />
                </Helmet> */}
            </Provider>
        )
    }
}
// var loadjs = require('loadjs');
// loadjs('static/js/popper.min.js');
// loadjs('static/js/bootstrap.min.js');
// loadjs('static/js/jquery.magnific-popup.min.js');
// loadjs('static/js/wow.min.js');
// loadjs('static/js/main.js');
// loadjs('static/js/script.js');

// loadjs('static/js/custom.js');
// var loadjs = require('loadjs');
// loadjs('static/js/custom.js', function () {
//     $(document).ready(function () {
//         // setupStars();
//         // updateStars();
//     });
// })
ReactDOM.render(<App />, document.getElementById('core'));