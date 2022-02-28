import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {    
    FacebookShareButton,
    FacebookShareCount,
    TwitterIcon,
    FacebookIcon,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    
    
    
    
    
    
    
    
    TwitterShareButton,
    
    
    WhatsappShareButton,
    
  } from "react-share";
export class Footer extends Component {
    render() {
        return (
            <div>
                <section className="section-content py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-left section-title wow fadeInLeft"
                                style={{
                                    visibility: 'hidden',
                                    animationDuration: '1.3s',
                                    animationDelay: ' 0.2s',
                                    animationName: 'none'
                                }}>
                                <h2>Business</h2>
                            </div>
                            <div className="col-md-3 py-2">
                                <div className="border border-success text-center p-2" id="foot-biz">
                                    <Link data-toggle="modal" data-target="#getstarted" to="#" className="text-success">Start Project   <i className="las la-briefcase"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-3 py-2">
                                <div className="border border-warning text-center p-2" id="foot-biz">
                                    <Link to="/projects" className="text-warning">Track Project
                                    <i className="las la-search-location"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-3 py-2">
                                <div className="border border-primary text-center p-2" id="foot-biz">
                                    <Link to="" target="_blank" className="text-primary"> Join Our Team <i className="las la-handshake"></i></Link>
                                </div>
                            </div>
                            <div className="col-md-3 py-2">
                                <div className="border border-secondary text-center p-2" id="foot-biz">
                                    <Link to="/invest" className="text-secondary"> Invest In Us <i className="las la-money-check"></i></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section-content border">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-12 text-left section-title py-5 wow fadeInLeft"
                                        style={{
                                            visibility: 'hidden',
                                            animationDuration: '1.3s',
                                            animationDelay: ' 0.2s',
                                            animationName: 'none'
                                        }}>
                                        <h2>Our Products</h2>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row mx-auto">
                                            <div className="col text-center">
                                                <div className="">
                                                    <Link to="http://www.aistrides.com" className="text-white" target="_blank">
                                                        <span className="bg-warning border border-white rounded-circle text-white p-2">AS</span>
                                                        <br />
                                                        <sub>AiStrides</sub>
                                                    </Link>
                                                </div>

                                            </div>
                                            <div className="col text-center">
                                                <div className="">
                                                    <Link to="" className="text-white" target="_blank">
                                                        <span className="bg-info border border-white rounded-circle text-white p-2">HS</span>
                                                        <br />
                                                        <sub>Liners</sub>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col text-center">
                                                <div className="">
                                                    <Link to="" className="text-white" target="_blank">
                                                        <span className="bg-secondary border border-white rounded-circle text-white p-2">EA</span>
                                                        <br />
                                                        <sub>Exams</sub>
                                                    </Link>

                                                </div>

                                            </div>
                                            <div className="col text-center">
                                                <div className="">
                                                    <Link to="https://talesarena.herokuapp.com/" className="text-white" target="_blank">
                                                        <span className="bg-primary border border-white rounded-circle text-prmary p-2">TA</span>
                                                        <br />
                                                        <sub>Arena</sub>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-12 text-left section-title py-5 wow fadeInLeft"
                                        style={{
                                            visibility: 'hidden',
                                            animationDuration: '1.3s',
                                            animationDelay: ' 0.2s',
                                            animationName: 'none'
                                        }}>
                                        <h2>Share <i className="la la-share"></i> </h2>
                                    </div>


                                    <div className="col-3 mx-auto">
                                        <div className="px-2">
                                            <Link                                         
                                            to="" 
                                            target="_blank" className="text-white">
                                                <i className="bg-primary border rounded-circle p-2 mx-auto la la-facebook text-prmary">
                                                    </i>
                                                    </Link>
                                        </div>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <div className="px-2">
                                            <Link to="" target="_blank" className="text-white"><i className="bg-info border rounded-circle p-2 mx-auto la la-twitter text-prmary"></i></Link>
                                        </div>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <div className="px-2">                                    
                                            <Link target="_blank" to="" className="text-primary"><i className="border border-primary rounded-circle p-2 mx-auto la la-linkedin text-prmary"></i></Link>
                                        </div>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <div className="px-2">
                                            <Link to="" target="_blank" className="text-success"><i className="border border-success rounded-circle p-2 mx-auto la la-whatsapp text-success"></i></Link>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="border-top col-md-12 mx-auto text-center pt-1">
                    <div className="col">
                        <Link to="https://www.websitepolicies.com/policies/view/tewjy0tO" target="_blank"><sub><i>Devtrack Privacy Policy</i></sub></Link>
                    </div>
                    <div className="copyright col">
                        <small>&copy; Copyright <strong><span>devtrack.me</span></strong>. All Rights
                                    Reserved</small>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer
