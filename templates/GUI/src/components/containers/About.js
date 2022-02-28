import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../base/NavBar'
import Footer from '../base/Footer'
import RequestForm from './RequestForm'

export class About extends Component {
    bgSwitch = () => {
        var switchchecker = document.getElementById("bg_switch_btn");
        if (switchchecker.checked) {
            document.getElementById("bg_switch_text").innerHTML = '<i className="icofont-light-bulb h4 text-center text-dark"></i>';
            document.getElementById("major").style.background = "#eee";
            document.getElementById("textcolor").style.color = "black";
            document.getElementsByClassName("textcolor1")[0].style.color = "black";
            document.getElementsByClassName("textcolor2")[0].style.color = "black";
            document.getElementsByClassName("textcolor3")[0].style.color = "black";
            // document.getElementsByClassName("textcolor4")[0].style.color = "black";
            // document.getElementsByClassName("textcolor5")[0].style.color = "black";
            document.getElementById("stars").style.display = "none";

        } else {
            document.getElementById("bg_switch_text").innerHTML = ' <i className="icofont-light-bulb h4 text-center"></i>';
            document.getElementById("major").style.background = "black";
            document.getElementById("textcolor").style.color = "#ffff";
            document.getElementsByClassName("textcolor1")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor2")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor3")[0].style.color = "#ffff";
            // document.getElementsByClassName("textcolor4")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor5")[0].style.color = "#ffff";
            document.getElementById("stars").style.display = "block";
        }

    }
    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/custom.js', function () {
            $(document).ready(function () {
                myTypewriter('writer', "We are your very Desire");
                limeLight("Who We Are")
                // updateStars();
            });
        })

    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
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
                    <div className="modal fade" id="getstarted" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <RequestForm />
                    </div>

                    <div className="col-12 text-left section-title py-5 wow flipInX"
                        style={{
                            visibility: 'hidden',
                            animationDuration: '1.3s',
                            animationDelay: ' 0.2s',
                            animationName: 'none'
                        }}>
                        <h2>About Us</h2>
                    </div>
                    <div className="row pt-3 textcolor3" style={{ color: "#fff" }}>
                        <div className="col-md-7 mx-auto">
                            <u className="font-weight-bold">Who We Are</u>
                            <p>We are a leading Certified Solution Architect Company Decked with the professionality to build and deploy State-of-the-Art revolutionary Tech Solutions geared towards personal, Business and Global development, Economic growth and Improved standard of Living</p>
                        </div>
                        <div className="col-md-7 mx-auto">
                            <u className="font-weight-bold">What We Do</u>
                            <ul>
                                <p>
                                    We are Known for Quality Product Delivery across
                            </p>
                                <li>Web Development </li>
                                <li>Mobile Application Development</li>
                                <li>Desktop Application Development</li>
                                <li>Ethical Hacking</li>
                                <li>Data Analysis</li>
                                <li>Artificial Intelligence</li>
                                <li>Database management</li>
                                <li>Cloud Computing</li>
                                <i>Microservices</i>
                                <li>and Lots More..</li>
                            </ul>

                        </div>
                        <div className="col-md-7 mx-auto">
                            <em><small>Request one or More of Our services by Simply clicking <b>Get Started</b> the button below</small></em>
                            <div className="text-center pb-3  wow bounceIn"
                                style={{
                                    visibility: 'hidden',
                                    animationDuration: '1.3s',
                                    animationDelay: ' 1s',
                                    animationName: 'none'
                                }}>
                                <Link to="#" data-toggle="modal" data-target="#getstarted" className="text-white btn btn-primary btn-sm rounded-pill">
                                    Get Started <i className="la la-angle-right"></i>
                                </Link>
                                <div className="modal fade" id="getstarted" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <RequestForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default About;
