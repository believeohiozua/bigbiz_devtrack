import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postTestimony } from '../../action/Actions';
import NavBar from '../base/NavBar'
import Footer from '../base/Footer'
import RequestForm from './RequestForm'

export class Testimony extends Component {
    state = {
        testimony: '',
        full_names: '',
        company: '',

    };

    static propTypes = {
        postTestimony: PropTypes.func.isRequired,
        testimony: PropTypes.bool,
    };


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        var spin = document.getElementById('testimonybtn');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "Sending...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Send";
        }, 20000);


        console.log(this.state)

        this.props.postTestimony(
            this.state.testimony,
            this.state.full_names,
            this.state.company,
        );

    };
    sendAnotherMessage = (e) => {
        e.preventDefault();
        this.dataCreateForm.reset()
        this.setState({
            testimony: '',
            full_names: '',
            company: '',
        })
        document.getElementById("testimonyform").style.display = "";
        document.getElementById("tssmsg").style.display = "none";
    }
    bgSwitch = () => {
        var switchchecker = document.getElementById("bg_switch_btn");
        if (switchchecker.checked) {
            document.getElementById("bg_switch_text").innerHTML = '<i className="icofont-light-bulb h4 text-center text-dark"></i>';
            document.getElementById("major").style.background = "#eee";
            document.getElementById("textcolor").style.color = "black";
            document.getElementsByClassName("textcolor1")[0].style.color = "black";
            document.getElementsByClassName("textcolor2")[0].style.color = "black";
            document.getElementsByClassName("textcolor3")[0].style.color = "black";
            document.getElementsByClassName("textcolor4")[0].style.color = "black";
            ;
            document.getElementById("stars").style.display = "none";

        } else {
            document.getElementById("bg_switch_text").innerHTML = ' <i className="icofont-light-bulb h4 text-center"></i>';
            document.getElementById("major").style.background = "black";
            document.getElementById("textcolor").style.color = "#ffff";
            document.getElementsByClassName("textcolor1")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor2")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor3")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor4")[0].style.color = "#ffff";

            document.getElementById("stars").style.display = "block";
        }

    }
    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/custom.js', function () {
            $(document).ready(function () {
                myTypewriter('writer', "Whatever you say is Right!");
                limeLight("show Some Love")
                // updateStars();
            });
        })

    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentDidUpdate(provProps) {
        if (this.props.testimony !== provProps.testimony) {
            if (this.props.testimony) {
                document.getElementById("testimonyform").style.display = "none";
                document.getElementById("tssmsg").style.display = "";
            }
        }
    }
    render() {
        const { testimony, full_names, company } = this.state;
        return (
            <div id="major">
                <canvas id="stars" style={{ position: "absolute" }}></canvas>
                <div className="" style={{ position: "relative", top: "55px" }}>
                    <div className="px-3 text-white row  wow flipInX" id="top_sec">
                        <div className="col-9 text-left">
                            <div id="textcolor"
                                className="h5 textcolor">
                                <canvas className="text-white text-center" id="canvas"></canvas>
                            </div>
                            <em style={{ fontSize: "12px", fontFamily: "cursive" }} className="animated textcolor1 text-center" id="writer"></em>
                        </div>
                        <div className="col-3">
                            <div className="push_light_right">
                                <small>
                                    <em className="textcolor2 text-center">
                                        <i id="bg_switch_text" className="icofont-light-bulb h5 text-center"></i>
                                    </em>
                                </small>
                                <label className="switch flat">
                                    <input
                                        id="bg_switch_btn"
                                        type="checkbox"
                                        onChange={this.bgSwitch}
                                    />
                                    <span className="slider border"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <svg className="hero-waves"
                        xmlns=""
                        xmlnsXlink=""
                        viewBox="0 24 200 28 "
                        preserveAspectRatio="none">
                        <defs>
                            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="wave1">
                            <use xlinkHref="#wave-path" x="50" y="3" fill="#b57afc" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="#2c71fc" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#62c8f8" />
                        </g>
                    </svg>
                </div>
                <NavBar />
                <section className="container">
                    <div className="row">
                        <div className="modal fade"
                            id="getstarted"
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <RequestForm />
                        </div>

                        <div className="col-md-10 mx-auto">
                            <div id="tssmsg" className="text-center py-5" style={{ display: "none" }}>
                                <span>
                                    <i className='las la-smile-beam h1 text-primary'> </i>
                                    <br />
                                    <i className='icofont-tick-mark text-primary h4'></i>
                                    <br />
                                    <strong className="h5 text-center text-primary">
                                        Message sent!
                                 </strong>
                                </span>
                                <p className="text-center">
                                    <Link className="btn btn-outline-primary btn-sm rounded-pill"
                                        to=""
                                        onClick={this.sendAnotherMessage}>
                                        <small>Send Another Message</small>
                                    </Link>
                                </p>
                            </div>

                            <form onSubmit={this.onSubmit} ref={(el) => this.dataCreateForm = el} id="testimonyform">
                                <p className="h6 card-body shadow text-center textcolor3" style={{ color: "#ffff" }}
                                ><span>
                                        Please tell us What you feel about us
                                        <br />
                                        <sub>Whatever you say is Right!</sub>
                                    </span>
                                </p>
                                <div className="form-input py-3">
                                    <textarea
                                        className="form-control form-control-2"
                                        placeholder="Enter Report"
                                        id="testimony"
                                        name="testimony"
                                        rows="5"
                                        value={testimony}
                                        onChange={this.onChange}
                                        required

                                    />
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="full_names"
                                            className="form-control form-control-2"
                                            id="full_name"
                                            value={full_names}
                                            onChange={this.onChange}
                                            placeholder="Your Name"
                                            required />

                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-2"
                                            name="company"
                                            id="company"
                                            value={company}
                                            onChange={this.onChange}
                                            placeholder="Your Company"
                                            required />

                                    </div>
                                </div>

                                <div className="py-2 text-center">
                                    <button
                                        id="testimonybtn"
                                        type="submit"
                                        className="btn btn-outline-primary btn-sm rounded-pill">
                                        Send
                                </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 mx-auto text-center pt-4 textcolor4 wow flipInX"
                            style={{
                                visibility: 'hidden',
                                animationDuration: '1.3s',
                                animationDelay: ' 1s',
                                animationName: 'none',
                                color: "#ffff",
                            }}>

                            <sub>
                                We will review and Publish it for the world to see
                                                </sub>
                            <Link to="/testimony" className="text-info">
                                <em> <br />
                                    <small>
                                        Please see our privacy policy  &ensp;
                                                    <i className="la la-eye"></i>
                                    </small>
                                </em>
                            </Link>

                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    testimony: state.mainReducer.testimony,


});

export default connect(mapStateToProps, { postTestimony })(Testimony);

