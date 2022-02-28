import React, { Component } from 'react';
import NavBar from '../base/NavBar';
import Footer from '../base/Footer';
import { Link } from 'react-router-dom';
import RequestForm from './RequestForm';

export class Invest extends Component {
    bgSwitch = () => {
        var switchchecker = document.getElementById("bg_switch_btn");
        if (switchchecker.checked) {
            document.getElementById("bg_switch_text").innerHTML = '<i className="icofont-light-bulb h4 text-center text-dark"></i>';
            document.getElementById("major").style.background = "#eee";
            document.getElementById("textcolor").style.color = "black";
            document.getElementsByClassName("textcolor1")[0].style.color = "black";
            document.getElementsByClassName("textcolor2")[0].style.color = "black";
            // document.getElementsByClassName("textcolor3")[0].style.color = "black";
            // document.getElementsByClassName("textcolor4")[0].style.color = "black";
            // document.getElementsByClassName("textcolor5")[0].style.color = "black";
            document.getElementById("stars").style.display = "none";

        } else {
            document.getElementById("bg_switch_text").innerHTML = ' <i className="icofont-light-bulb h4 text-center"></i>';
            document.getElementById("major").style.background = "black";
            document.getElementById("textcolor").style.color = "#ffff";
            document.getElementsByClassName("textcolor1")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor2")[0].style.color = "#ffff";
            // document.getElementsByClassName("textcolor3")[0].style.color = "#ffff";
            // document.getElementsByClassName("textcolor4")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor5")[0].style.color = "#ffff";
            document.getElementById("stars").style.display = "block";
        }

    }
    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/custom.js', function () {
            $(document).ready(function () {
                myTypewriter('writer', "We are the Future, Secure us today!!!");
                limeLight("Invest in Us")
                // updateStars();
            });
        })

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
                <div className="modal fade" id="getstarted" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <RequestForm />
                </div>
                <section className="container">
                    <div className="row">
                        <div className="col-12 text-left section-title py-5  wow flipInX"
                            style={{
                                visibility: 'hidden',
                                animationDuration: '1.3s',
                                animationDelay: ' 0.2s',
                                animationName: 'none'
                            }}>
                            <h2>Aistrides</h2>
                        </div>
                        <div className="col-md-8 mx-auto">
                            AiStrides is a project that is geared towards making Machine learning wares avalible.
                            These products and services cuts across all the major classes of Machine Learning such as Natural language processing (NLTK)
                            convolutional and Deep Neural Network (CNN and DNN) etc.
                           
                            <ol>
                            <p>production that will be made avalibe on the AiStrides Platform Inclcudes:</p>
                            <li>
                                Web and Text summation with avalible API endpoints
                            </li>
                            <li>
                                Speech-to-text and text-to-speech
                            </li>
                            <li>
                                Load defaulter detector (for financial institutions)
                            </li>
                            <li>
                                Image recongnition 
                            </li>
                            <li>
                                Finger print dectection 
                            </li>
                            <li>
                                A nigerian Route related self Driving car model (avalible for downloads)
                            </li>
                            <li>
                                and lots more....
                            </li>
                            </ol>
                            <div className="row">
    <div className="col-6">
    <Link to=""> visit Houseliners </Link>
    </div>
    <div className="col-6">
    <Link to=""> Invest in this project </Link>
    </div>
</div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-12 text-left section-title py-5  wow flipInX"
                            style={{
                                visibility: 'hidden',
                                animationDuration: '1.3s',
                                animationDelay: ' 0.2s',
                                animationName: 'none'
                            }}>
                            <h2>Talsearena</h2>
                        </div>
                        <div className="col-md-8 mx-auto">
                            Talesarena is a Super blog created for people to read and share the tales of their 
                            real life real life experinces so as to inpire and be inspired respectively
                            The Talesarea platform is built upon a block Artificial Intelligence (A.I)
                            which help users to summarise the blog post by picking out the most tangible words with respect to 
                            a choiced number of sentences.
                            <div className="row">
    <div className="col-6">
    <Link to=""> visit Houseliners </Link>
    </div>
    <div className="col-6">
    <Link to=""> Invest in this project </Link>
    </div>
</div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-12 text-left section-title py-5  wow flipInX"
                            style={{
                                visibility: 'hidden',
                                animationDuration: '1.3s',
                                animationDelay: ' 0.2s',
                                animationName: 'none'
                            }}>
                            <h2>Houseliners</h2>
                        </div>
                        <div className="col-md-8 mx-auto">
This is a super project created to drive the ease of accquiring an accommondation, land, stores, 
office spaces and other propertices alike lease, rent or purchase 
this platform also creates the avenue for users to become trusted 
agents and earn commission on the accquisition of any of their valid entries 
<div className="row">
    <div className="col-6">
    <Link to=""> visit Houseliners </Link>
    </div>
    <div className="col-6">
    <Link to=""> Invest in this project </Link>
    </div>
</div>
                            {/* <marquee> Coming Soon....</marquee> */}
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-12 text-left section-title py-5  wow flipInX"
                            style={{
                                visibility: 'hidden',
                                animationDuration: '1.3s',
                                animationDelay: ' 0.2s',
                                animationName: 'none'
                            }}>
                            <h2>Exams</h2>
                        </div>
                        <div className="col-md-8 mx-auto">
                            <marquee> Coming Soon....</marquee>
                            <p>be the first to be notifed of this products</p>
                           <form>
                               <div className="input-group">
                               <input type="email" className="form-control"/>
                               <input type="submit" className="" value="alert me"/>
                               </div>
                           </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>

        )
    }
}

export default Invest;
