import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from '../base/NavBar'
import Footer from '../base/Footer'
import RequestForm from './RequestForm';
import { getTestimonies } from '../../action/Actions';


export class Home extends Component {
    static propTypes = {
        getTestimonies: PropTypes.func,
        testimonies: PropTypes.array,
    };


    bgSwitch = () => {
        var switchchecker = document.getElementById("bg_switch_btn");
        if (switchchecker.checked) {
            document.getElementById("bg_switch_text").innerHTML = '<i className="icofont-light-bulb h4 text-center text-dark"></i>';
            document.getElementById("major").style.background = "#ffff";
            document.getElementById("textcolor").style.color = "black";
            document.getElementsByClassName("textcolor1")[0].style.color = "black";
            document.getElementsByClassName("textcolor2")[0].style.color = "black";
            document.getElementsByClassName("textcolor3")[0].style.color = "black";
            document.getElementsByClassName("textcolor4")[0].style.color = "black";
            document.getElementsByClassName("textcolor5")[0].style.color = "black";
            document.getElementsByClassName("textcolor6")[0].style.color = "black";
            document.getElementsByClassName("textcolor7")[0].style.color = "black";
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
            document.getElementsByClassName("textcolor6")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor7")[0].style.color = "#ffff";
            document.getElementById("stars").style.display = "block";
        }

    }






    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/custom.js', function () {
            $(document).ready(function () {
                myTypewriter('writer', "Nothing is Impossible..! ");
                limeLight("Welcome To DevTrack")
                // updateStars();
            });
        })
        this.props.getTestimonies()
    }
    componentDidMount() {
        window.scrollTo(0, 0)

    }
    render() {

        return (
            <div id="major" className="" ref={el => (this.div = el)}>
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
                {/* </div> */}
                <section className="section-content py-5">

                    <div className="modal fade" id="getstarted" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <RequestForm />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mx-auto text-center textcolor7 wow FadeInUp"
                                style={{
                                    visibility: 'hidden',
                                    animationDuration: '1.3s',
                                    animationDelay: ' 0.6s',
                                    animationName: 'none',
                                    color: "#fff"
                                }}>



                                <div id="slide_indicator" className="carousel slide carousel-fade text-center" data-ride="carousel" data-interval="4000">
                                    {/* <div className="clearfix" style={{ zIndex: "999", position: "relative", top: "1em" }}>
                                        <a className="float-left border rounded-circle" href="#slide_indicator" role="button" data-slide="prev">
                                            <i className="la la-arrow-left text-white"></i>
                                        </a>

                                        <a className="float-right border rounded-circle" href="#slide_indicator" role="button" data-slide="next">
                                            <i className="la la-arrow-right text-white"></i>
                                        </a>
                                    </div> */}
                                    <div className="carousel-inner mx-auto" role="listbox" style={{ position: "relative", top: "-15px" }}>
                                        <div className="carousel-item active wow flipInX" id="carousel_item_gist">
                                            <article className="row single-post no-gutters border-top border-bottom">
                                                <div className="col-md-10">
                                                    <blockquote className="blockquote text-center mx-auto" id="slide_font_size">
                                                        Devtrack is the best thing that could ever happen to this world..!
                                                            <footer className="blockquote-footer text-right">
                                                            <i>Queen Bliz - <sub>Olo-Bliz Concept</sub></i>
                                                        </footer>
                                                    </blockquote>
                                                </div>
                                            </article>
                                        </div>
                                        {this.props.testimonies.length > 0 ? this.props.testimonies.map((get_testimonies, i) => {
                                            return (
                                                <div className="carousel-item wow flipInX" id="carousel_item_gist" key={i}>
                                                    <article className="row single-post no-gutters border-top border-bottom">
                                                        <div className="col-md-10">
                                                            <blockquote className="blockquote text-center mx-auto" id="slide_font_size">
                                                                {get_testimonies.fields.testimony}
                                                                <footer className="blockquote-footer text-right">
                                                                    <i> {get_testimonies.fields.full_names} - <sub> {get_testimonies.fields.company}</sub></i>
                                                                </footer>
                                                            </blockquote>
                                                        </div>
                                                    </article>
                                                </div>
                                            )
                                        })
                                            :
                                            ""
                                        }

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-8 col-md-7  order-2 order-lg-1 order-md-1">
                                <div className="col-12 text-left section-title py-5 wow fadeInLeft"
                                    style={{
                                        visibility: 'hidden',
                                        animationDuration: '1.3s',
                                        animationDelay: ' 0.2s',
                                        animationName: 'none'
                                    }}>
                                    <h2 className="">Get Started</h2>
                                </div>
                                <div>
                                    <div id="" className="faq section-bg " id="homecolaps">
                                        <div className="faq-list p-2">
                                            <ul>
                                                <li data-aos="border shadow" id="homecolaps_sub_sec"
                                                    className="wow fadeInUp"
                                                    style={{
                                                        visibility: 'hidden',
                                                        animationDuration: '1.3s',
                                                        animationDelay: ' 0.2s',
                                                        animationName: 'none'
                                                    }}>
                                                    <a data-toggle="collapse" className="collapse" href="#faq-list-1">
                                                        <div className="h4 border-bottom">
                                                            <p className="h4"><i className="la la-cog text-primary"></i>&ensp;<small>Who We Are</small></p>
                                                        </div>
                                                        <i className="bx bx-chevron-down icon-show"></i>
                                                        <i className="bx bx-chevron-up icon-close"></i>
                                                    </a>
                                                    <div id="faq-list-1"
                                                        className="collapse show"
                                                        data-parent=".faq-list">
                                                        <div className="d-block p-lg-4 textcolor3">
                                                            <p className="text-justify">
                                                                We are a leading Certified Solution Architect Company Decked with the professionality
                                                                to build and deploy State-of-the-Art revolutionary Tech Solutions geared towards personal,
                                                                Business and Global development, Economic growth as well as Improved standard of Living.
                                                           </p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li id="homecolaps_sub_sec"
                                                    className="wow fadeInUp"
                                                    style={{
                                                        visibility: 'hidden',
                                                        animationDuration: '1s',
                                                        animationDelay: ' 0.6s',
                                                        animationName: 'none'
                                                    }}>
                                                    <a data-toggle="collapse" href="#faq-list-2" className="collapsed">
                                                        <div className="h4 border-bottom">
                                                            <p className="h4"><i className="la la-cog text-primary"></i>&ensp;<small>What We Do</small></p>
                                                        </div>
                                                        <i className="bx bx-chevron-down icon-show"></i>
                                                        <i className="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                                        <div className="d-block p-lg-4 textcolor4">
                                                            <div className="row">
                                                                <div className="col-12 mx-auto pb-3">
                                                                    <p className="text-center">
                                                                        <em>
                                                                            <small>We are Known for Quality Product Delivery across:</small>
                                                                        </em>
                                                                    </p>
                                                                </div>
                                                                <div className="col-lg-9 col-md-10 mx-auto">
                                                                    <div className="row">
                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Web Development</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">                                                                            
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Mobile Apps</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>

                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Desktop Apps</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pb-3 col-md-4 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Ethical Hacking</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>

                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Data Analysis</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Machine Learning</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>

                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Cloud Computing</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Microservices</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">BlockChain</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">DevOps</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Digital Marketing</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pb-3 col-md-4 col-6 mx-auto">
                                                                            <div className="img-container border rounded-lg p-1">
                                                                                <img src="static/img/logo/logo-2.png" className="img-fluid rounded-pill" id="what_we_do_img" />
                                                                                <div className="overlay">
                                                                                    <span>
                                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="overlay_text text-center btn btn-sm btn-info rounded-pill">
                                                                                            Request
                                                                                    </Link>
                                                                                    </span>
                                                                                </div>
                                                                                <figcaption className="text-center">
                                                                                    <sub id="service_text_tag">Content Mngmt</sub>
                                                                                </figcaption>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12 text-center mx-auto">
                                                                    <p className="text-center">
                                                                        <em>
                                                                            <small>
                                                                                <Link className="text-primary" to="#" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted">And Lots More...</Link>
                                                                            </small>
                                                                        </em>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li id="homecolaps_sub_sec"
                                                    className="wow fadeInUp"
                                                    style={{
                                                        visibility: 'hidden',
                                                        animationDuration: '1.3s',
                                                        animationDelay: ' 0.9s',
                                                        animationName: 'none'
                                                    }}>
                                                    <a data-toggle="collapse" href="#faq-list-5" className="collapsed">
                                                        <div className="h4 border-bottom">
                                                            <p className="h4"><i className="la la-cog"></i>&ensp;<small>Lets Get You Started</small></p>
                                                        </div>

                                                        <i className="bx bx-chevron-down icon-show"></i>
                                                        <i className="bx bx-chevron-up icon-close"></i>
                                                    </a>
                                                    <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                                                        <div className="text-center">
                                                            <p>
                                                                <em>
                                                                    <small>
                                                                        Lunch your Project with Us in Just Three Steps
                                                                    </small>
                                                                </em>
                                                            </p>
                                                        </div>
                                                        <div className="d-block p-lg-4 textcolor5">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <div className="text-center border rounded-lg p-3">
                                                                        <span className="border text-white rounded-circle bg-danger p-2">1</span>
                                                                        <p className="py-3"> <small>Request Project</small></p>
                                                                        <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted">
                                                                            <i className="text-danger la la-angle-right border rounded-circle p-1"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="text-center border rounded-lg p-3">
                                                                        <span className="border text-white rounded-circle bg-warning p-2">2</span>
                                                                        <p className="py-3"> <small>Track Project</small></p>
                                                                        <Link to="/projects">
                                                                            <i className="text-warning la la-angle-right border rounded-circle p-1"></i>
                                                                        </Link>

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="text-center border rounded-lg p-3">
                                                                        <span className="border text-white rounded-circle bg-success p-2">3</span>
                                                                        <p className="py-3"> <small>Deploy Project</small></p>
                                                                        <Link to="/project">
                                                                            <i className="text-success la la-angle-right border rounded-circle p-1"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="text-center pb-3  wow bounceIn"
                                            style={{
                                                visibility: 'hidden',
                                                animationDuration: '1.3s',
                                                animationDelay: ' 1.1s',
                                                animationName: 'none'
                                            }}>
                                            <Link to="" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#getstarted" className="text-white btn btn-primary btn-sm rounded-pill">
                                                Get Started <i className="la la-angle-right"></i>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                                <img src="static/img/bizcert.jpg" className="img-fluid animated" alt="" />
                            </div> */}
                            <div className="pt-2 col-lg-4 col-md-5  order-1 order-lg-2 order-md-2 mx-auto text-center home_img wow fadeInUp"
                                style={{
                                    visibility: 'hidden',
                                    animationDuration: '1.3s',
                                    animationDelay: ' 0.2s',
                                    animationName: 'none'
                                }}>
                                <div className="">
                                    <div>
                                        <p className="textcolor6" style={{ color: "#fff" }}>
                                            <sub>DevTrack is Proudly Endorsed by:</sub> </p>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* wow fadeInUp"
                                    style={{
                                        visibility: 'hidden',
                                        animationDuration: '1.3s',
                                        animationDelay: ' 0.2s',
                                        animationName: 'none'
                                    }}> */}

                                    <div className="col-md-6 col">

                                        <div className="mb-5" id="endorse">
                                            <img src="static/img/bizcert.jpg" className="img-fluid" alt="" />
                                            <figcaption>
                                                <small><Link to="" target="_blank">company Name</Link></small>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col">
                                        <div className="mb-5" id="endorse">
                                            <img src="static/img/bizcert.jpg" className="img-fluid" alt="" />
                                            <figcaption>
                                                <small><Link to="" target="_blank">company Name</Link></small>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col">
                                        <div className="mb-5" id="endorse">
                                            <img src="static/img/bizcert.jpg" className="img-fluid" alt="" />
                                            <figcaption>
                                                <small><Link to="" target="_blank">company Name</Link></small>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col">
                                        <div className="mb-5" id="endorse">
                                            <img src="static/img/bizcert.jpg" className="img-fluid" alt="" />
                                            <figcaption>
                                                <small><Link to="" target="_blank">company Name</Link></small>
                                            </figcaption>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <Footer />
            </div >


        )
    }
}
const mapStateToProps = (state) => ({
    testimonies: state.mainReducer.testimonies,

});

export default connect(mapStateToProps, { getTestimonies })(Home);

