import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postContact } from '../../action/Actions';
import NavBar from '../base/NavBar'
import Footer from '../base/Footer'
import RequestForm from './RequestForm'


export class Contact extends Component {
    state = {
        full_names: '',
        email: '',
        subject: '',
        message: '',
    };
    static propTypes = {
        contact: PropTypes.bool,

    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        var spin = document.getElementById('contactbtnspinner');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "Sending...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Request";
        }, 20000);

        this.props.postContact(
            this.state.full_names,
            this.state.email,
            this.state.subject,
            this.state.message,
        );

    };
    sendAnotherMessage = (e) => {
        e.preventDefault();
        this.dataCreateForm.reset()
        this.setState({
            full_names: '',
            email: '',
            subject: '',
            message: '',
        })
        document.getElementById("contactform").style.display = "";
        document.getElementById("ssmsg").style.display = "none";
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
            document.getElementsByClassName("textcolor5")[0].style.color = "black";
            // document.getElementsByClassName("textcolor6")[0].style.color = "black";
            document.getElementById("stars").style.display = "none";

        } else {
            document.getElementById("bg_switch_text").innerHTML = ' <i className="icofont-light-bulb h4 text-center"></i>';
            document.getElementById("major").style.background = "black";
            document.getElementById("textcolor").style.color = "#ffff";
            document.getElementsByClassName("textcolor1")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor2")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor3")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor4")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor5")[0].style.color = "#ffff";
            // document.getElementsByClassName("textcolor6")[0].style.color = "#ffff";
            document.getElementById("stars").style.display = "block";
        }

    }

    componentWillMount() {
        var loadjs = require('loadjs');
        // loadjs('static/js/preventer.js');
        loadjs('static/js/custom.js', function () {
            $(document).ready(function () {
                myTypewriter('writer', "We are eager to hear from you");
                limeLight("Contact Us")
                // updateStars();

            });
        })

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    componentDidUpdate(provProps) {
        if (this.props.contact !== provProps.contact) {
            if (this.props.contact) {
                document.getElementById("contactform").style.display = "none";
                document.getElementById("ssmsg").style.display = "";
            }
        }
    }
    render() {
        const { full_names, email, subject, message } = this.state;
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


                <section id="contact" className="contact">
                    <div className="modal fade" id="getstarted" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <RequestForm />
                    </div>
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Contact</h2>
                            {/* <p>Contact Us</p> */}
                        </div>

                        <div className="row border border-primary  py-3">

                            <div className="col-lg-4 pt-lg-4">
                                <div className="info textcolor3">
                                    <div className="address text-white">
                                        <i className="icofont-google-map"></i>
                                        <h4>Location:</h4>
                                        <p>Benin City, Edo State, Nigeria</p>
                                    </div>

                                    <div className="email textcolor4">
                                        <i className="icofont-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@devtrack.com</p>
                                    </div>

                                    <div className="phone textcolor5">
                                        <i className="icofont-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+234 703 583 4838</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0">
                                <div id="ssmsg" className="text-center py-5" style={{ display: "none" }}>
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
                                        <Link className="btn btn-outline-primary btn-sm rounded-pill" to="" onClick={this.sendAnotherMessage}>
                                            Send Another Message
                                    </Link>
                                    </p>
                                </div>
                                <form onSubmit={this.onSubmit} ref={(el) => this.dataCreateForm = el} id="contactform">
                                    <div className="border border-primary card-header shadow text-center my-3 py-2 textcolor6" style={{ color: "#2c71fc" }}>
                                        <span>We are Always Eager to Hear from You</span>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name="full_names"
                                                className="form-control form-control-2"
                                                id="my-full_names"
                                                value={full_names}
                                                onChange={this.onChange}
                                                placeholder="Your Name"
                                                data-rule="minlen:4"
                                                data-msg="Please enter at least 4 chars"
                                                required />

                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="email"
                                                className="form-control form-control-2"
                                                name="email"
                                                id="my-email"
                                                value={email}
                                                onChange={this.onChange}
                                                placeholder="Your Email"
                                                data-rule="email"
                                                data-msg="Please enter a valid email"
                                                required />

                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-2"
                                            name="subject"
                                            id="subject"
                                            value={subject}
                                            onChange={this.onChange}
                                            placeholder="Subject"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 8 chars of subject"
                                            required />

                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control form-control-2"
                                            id="message"
                                            name="message"
                                            value={message}
                                            onChange={this.onChange}
                                            rows="5"
                                            data-rule="required"
                                            data-msg="Please write something for u
                                            requireds"
                                            placeholder="Message" />

                                    </div>

                                    <div className="text-center"
                                    >
                                        <button id="contactbtnspinner"
                                            type="submit"
                                            className="btn btn-outline-primary btn-sm rounded-pill">
                                            Send Message
                                        </button>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    contact: state.mainReducer.contact,
});


export default connect(mapStateToProps, { postContact })(Contact);

