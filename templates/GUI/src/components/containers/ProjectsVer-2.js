import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadProject, authLogin, authCheckState, logout } from '../../action/Actions';
import { createMessage } from '../../action/alertAction';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import NavBar from '../base/NavBar';
import Footer from '../base/Footer';
import Login from './Login';
import Initilize from './projectcomp/Initilize';
import Payment from './Payment';
import RequestForm from './RequestForm';
import { appendScript, removeScript } from '../base/utils'




export class Projects extends Component {

    state = {
        username: '',
        password: '',
        usercomment: '',
    };

    static propTypes = {
        authCheckState: PropTypes.func.isRequired,
        authLogin: PropTypes.func,
        logout: PropTypes.func,
        loadProject: PropTypes.func.isRequired,
        createMessage: PropTypes.func,
        project: PropTypes.object,
        comments: PropTypes.array,
        is_authenticated: PropTypes.bool,

    };
    onSubmit = (e) => {
        var spin = document.getElementById('btnspinner');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Track";
        }, 10000);

        e.preventDefault();
        this.props.authLogin(this.state.username, this.state.password);
        // this.dataCreateForm.reset()
        this.props.authCheckState();

    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    logMeOut = () => {
        this.props.logout();
        document.getElementById("closeAfterLogout").click();
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
            document.getElementsByClassName("textcolor6")[0].style.color = "black";
            document.getElementsByClassName("textcolor7")[0].style.color = "black";
            document.getElementsByClassName("textcolor8")[0].style.color = "black";
            document.getElementsByClassName("textcolor9")[0].style.color = "black";
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
            document.getElementsByClassName("textcolor8")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor9")[0].style.color = "#ffff";

            document.getElementById("stars").style.display = "block";
        }

    }

    closer = (open) => {
        document.getElementById(open).click();
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.authCheckState();
        if (this.props.is_authenticated) {
            this.props.loadProject();
        }
    }
    componentDidUpdate(provProps) {
        if (this.props.is_authenticated !== provProps.is_authenticated) {
            if (this.props.is_authenticated) {
                this.props.loadProject();
            }
        }
    }

    render() {
        // if (this.props.is_authenticated) {
        //     this.props.loadProject();
        // }
        const { username, password, usercomment } = this.state;
        // appendScript("static/js/custom.js");
        // const Payment = () => <button className="btn btn-outline-primary btn-sm rounded-pill">Pay</button>;
        const partPayment = {
            'email': this.props.project.email,
            'amount': this.props.project.part_payment_amount,
            'payment_type': 'partpayment',
        }
        const balancePayment = {
            'email': this.props.project.email,
            'amount': this.props.project.balance_payment_amount,
            'payment_type': 'balancePayment',
        }
        const fullPayment = {
            'email': this.props.project.email,
            'amount': this.props.project.total_amount,
            'payment_type': 'fullPayment',
        }
        const progress = this.props.project.progress_bar;
        const contact_term = document.getElementById("contact_term")
        var striptags = require('striptags');
        if (contact_term) {
            var html = this.props.project.contract_terms;
            var strip = striptags(html);
            contact_term.innerHTML = strip;
        }
        console.log("this.props.comments", this.props.comments)
        return (

            <div id="major">
                <canvas id="stars" style={{ position: "absolute" }}></canvas>
                <div className="" style={{ position: "relative", top: "55px" }}>

                    <div className="px-3 text-white row" style={{ width: "100%", overflowX: "hidden" }}>

                        <div className="col-10">
                            <p className="h3 textcolor" data-aos="fade-down" data-aos-delay="50" id="textcolor">The Big Dev. Zone</p>
                            <em style={{ fontSize: "10px" }} className="animated textcolor1" id="writer" data-aos="zoom-in" data-aos-delay="150"></em>
                        </div>

                        <div className="col-2">
                            <div>
                                <em className="textcolor2">
                                    <i id="bg_switch_text" className="icofont-light-bulb h4 text-center"></i>
                                </em>
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
                <section>
                    <div className="modal fade" id="getstarted" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <RequestForm />
                    </div>
                </section>
                {!this.props.is_authenticated ?
                    <Login />
                    // <section>
                    //     <div className="container">
                    //         <div className="col-12 text-left section-title py-5" data-aos="fade-up">
                    //             <h2>Track Project</h2>
                    //         </div>
                    //         <div className="row">
                    //             <div className="col-md-6 mx-auto py-3 rounded-lg border">
                    //                 <p className="h5"> Track Your Project</p>
                    //                 <form onSubmit={this.onSubmit}>
                    //                     <div className="modal-body">
                    //                         <div className="form-input">
                    //                             <input
                    //                                 id="username"
                    //                                 type="text"
                    //                                 className="form-control"
                    //                                 name="username"
                    //                                 onChange={this.onChange}
                    //                                 value={username}
                    //                                 placeholder="Enter project ID"
                    //                                 required
                    //                             />
                    //                         </div>
                    //                         <div className="form-input py-2">
                    //                             <input
                    //                                 type="password"
                    //                                 className="form-control"
                    //                                 name="password"
                    //                                 onChange={this.onChange}
                    //                                 value={password}
                    //                                 placeholder="Enter Tracking code"
                    //                                 required
                    //                             />
                    //                         </div>

                    //                         <div className="text-right py-2">
                    //                             <button type="submit" className="btn btn-primary btn-sm rounded-pill">
                    //                                 Track <i className="la la-angle-right"></i>
                    //                             </button>
                    //                         </div>
                    //                     </div>
                    //                 </form>
                    //             </div>
                    //         </div>
                    //     </div>

                    // </section>


                    :
                    // THIS IS WHERE THE PROJECT BEGINS
                    <div>
                        <section className="container" id="project_section">
                            <div className="row">
                                <div className="col-12 text-left section-title py-5" data-aos="fade-up">
                                    <h2>Project </h2>
                                </div>
                                <div className="py-4 textcolor4 col-md-12" style={{ color: "#fff" }}>

                                    <div className="row">
                                        <ul style={{ listStyle: "none" }} className="py-2 col-md-8">
                                            <p>Project Information</p>
                                            <li>Title: {this.props.project.project_name} </li>
                                            <li>Name: {this.props.project.username} </li>
                                            <li>email: {this.props.project.email}</li>
                                            <li className="py-3">
                                                <p>
                                                    <span className="text-left">
                                                        Contract Terms
                                                </span>
                                                </p>
                                                <p id="contact_term"></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-12 pb-3">
                                    <Initilize />
                                </div>

                            </div>
                        </section>
                        <section className="container textcolor6" id="project_section" style={{ color: "#fff" }}>
                            {/* progress Bar */}

                            <div className="row border border-warning pb-3">
                                <div className="col-12 py-2">
                                    <strong className="text-left text-weight-bold">
                                        <small>Track Progress</small>
                                    </strong>
                                </div>
                                {this.props.project.project_started ?
                                    <div className="col-md-12">
                                        <div className="py-3">
                                            {this.props.project.progress_bar > 90 ?
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" style={{ width: this.props.project.progress_bar + "%" }}>{this.props.project.progress_bar}%</div>
                                                    {/* <hr />
                                                    <div className="progress md-progress primary-color-dark" style={{ height: "2px" }}>
                                                        <div className="indeterminate"></div>
                                                    </div> */}
                                                </div>
                                                :
                                                <div className="progress">
                                                    {this.props.project.progress_bar > 30 ?
                                                        <div className="progress-bar bg-warning" style={{ width: this.props.project.progress_bar + "%" }}>{this.props.project.progress_bar}%</div>
                                                        :
                                                        <div className="progress-bar bg-secondary" style={{ width: this.props.project.progress_bar + "%" }}>{this.props.project.progress_bar}%</div>
                                                    }
                                                </div>
                                            }
                                        </div>

                                        <div className="col-md-9 mx-auto text-center">
                                            <span className="h6">Report</span> <br />
                                            <small>
                                                <em>
                                                    {this.props.project.report}
                                                    {this.props.project.get_comments}

                                                </em>
                                            </small>
                                        </div>
                                    </div>
                                    :
                                    <div className="py-3 col-md-12">
                                        <div className="progress">
                                            <div className="progress-bar bg-secondary " style={{ width: "100%" }}>
                                                pending...

                                                    </div>
                                        </div>

                                    </div>

                                }
                            </div>


                        </section>


                        <section className="container  textcolor7" id="project_section" style={{ color: "#fff" }}>
                            <div className="row">
                                {/* Deliveries */}
                                <div className="col-md-12">
                                    <div className="row border border-success pb-3">
                                        <div className="col-12 py-2">
                                            <strong className="text-left text-weight-bold h6">
                                                <small>Deliveries</small>
                                            </strong>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to="#" className="btn btn-outline-secondary rounded-pill btn-sm" data-toggle="modal" data-target="#testanddeployments">
                                                Test Run  <i className="la la-angle-right"></i>
                                            </Link> {this.props.project.project_testing ? <i className="text-success la la-check"></i> : <sup title="make part payment" style={{ fontSize: "10px" }}>pending</sup>}
                                            <div className="modal fade text-dark" id="testanddeployments" tabIndex="-1" role="dialog" aria-labelledby="project-testing" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                        <div className="modal-header">
                                                            <h5 className="modal-title text-center h6" id="project-testing">
                                                                <span>Project Deployment and Testing</span>
                                                            </h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        {this.props.project.project_testing && this.props.project.Link_to_test_run ?
                                                            <div className="modal-body">
                                                                <p>
                                                                    <small>click to Test your Live Application</small>
                                                                </p>
                                                                <Link to={this.props.project.Link_to_test_run} target="_blank" className="btn btn-outline-primary btn-sm rounded-pill">Start testing <i className="la la-angle-right"></i></Link>

                                                            </div>
                                                            :
                                                            <div className="modal-body">
                                                                {this.props.project.part_payment_status ?
                                                                    <p className="text-center">
                                                                        <span className="text-info">Avalible Soon</span>
                                                                    </p>
                                                                    :
                                                                    <div className="text-center">
                                                                        <i className='las la-frown h1 text-danger'> </i>
                                                                        <br />
                                                                        <small className="text-center">
                                                                            No payments have been made! <br />
                                                                        please make payment to proceed
                                                                   </small>
                                                                    </div>
                                                                }
                                                            </div>
                                                        }
                                                        <div className="col-md-4 mx-auto text-center border-top pb-2">
                                                            <Link to="#" data-dismiss="modal" aria-label="Close" className="text-danger" >
                                                                <small> close</small>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <Link to="#" className="btn btn-outline-default rounded-pill btn-sm" data-toggle="modal" data-target="#paybalance">
                                                Pay Balance <i className="la la-angle-right"></i>
                                            </Link> {this.props.project.balance_payment_status ? <i className="text-success la la-check"></i> : <sup title="make part payment" style={{ fontSize: "10px" }}>pending</sup>}
                                            <div className="modal fade text-dark" id="paybalance" tabIndex="-1" role="dialog" aria-labelledby="balance-payment" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                        <div className="modal-header">
                                                            <h5 className="modal-title text-center" id="balance-payment">Balance Payment</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="text-center">
                                                                <small>Balance Payment</small>
                                                                <br />
                                                                <b> ₦ {this.props.project.balance_payment_amount}</b>
                                                            </div>
                                                            {this.props.project.balance_payment_status ?
                                                                <span>
                                                                    <i className='las la-smile-beam h1 text-success'> </i>
                                                                    <br />
                                                                    <i className='icofont-tick-mark text-success h4'></i>
                                                                    <br />
                                                                    <small className="text-center">
                                                                        Payment Successful
                                                                            </small>
                                                                </span>

                                                                :
                                                                <div className="modal-footer mx-auto col-md-3 text-center">
                                                                    <Payment type={balancePayment} />
                                                                </div>
                                                            }
                                                            <div className="col-md-4 mx-auto text-center border-top pb-2">
                                                                <Link to="#" data-dismiss="modal" aria-label="Close" className="text-danger" >
                                                                    <small> close</small>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <Link to="#" className="btn btn-outline-success rounded-pill btn-sm" data-toggle="modal" data-target="#downloadcodes">
                                                Download <i className="la la-arrow-down"></i>
                                            </Link> {this.props.project.project_completed ? <i className="text-success la la-check"></i> : <sup title="make part payment" style={{ fontSize: "10px" }}>pending</sup>}
                                            <div className="modal fade text-dark" id="downloadcodes" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                        <div className="modal-header">
                                                            <h5 className="modal-title text-center" id="exampleModalLabel">Download your Source Codes / project Package </h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        {this.props.project.project_completed ?
                                                            <div className="modal-body">
                                                                <p>click the Link below to Download your Source Codes </p>
                                                                <Link to={this.props.project.project_completed} target="_blank" className="btn btn-outline-success btn-sm rounded-pill">
                                                                    Download <i className="la la-arrow-down"></i>
                                                                </Link>
                                                            </div>
                                                            :
                                                            <div className="modal-body">
                                                                {this.props.project.total_amount_status ?
                                                                    <p className="text-center">
                                                                        <span className="text-info">Avalible Soon</span>
                                                                    </p>
                                                                    :
                                                                    <div className="text-center">
                                                                        <i className='las la-frown h1 text-danger'> </i>
                                                                        <br />
                                                                        <small className="text-center">
                                                                            Payment is not Completed! <br />
                                                                        please make FULL payments to proceed
                                                                   </small>
                                                                    </div>
                                                                }
                                                            </div>
                                                        }
                                                        <div className="col-md-4 mx-auto text-center border-top pb-2">
                                                            <Link to="#" data-dismiss="modal" aria-label="Close" className="text-danger" >
                                                                <small> close</small>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>


                        <section className="container textcolor8" id="project_section" style={{ color: "#fff" }}>
                            <div className="row">
                                {/* Client Section */}
                                <div className="col-md-12 pt-5">
                                    <div className="row border border-secondary pb-3">
                                        <div className="col-12 py-2">
                                            <strong className="text-left text-weight-bold h6">
                                                <small>Client Section</small>
                                            </strong>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to="#" className="btn btn-outline-light rounded-pill btn-sm" data-toggle="modal" data-target="#commentsModal">
                                                <span className="textcolor3">
                                                    Comment <i className="la la-comment"></i>
                                                </span>
                                            </Link>
                                            <div className="modal fade text-dark" id="commentsModal" tabIndex="-1" role="dialog" aria-labelledby="commentsModal" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                        <div className="modal-header">
                                                            <h5 className="modal-title text-center h6" id="commentsModal">
                                                                <span>Comments</span>
                                                            </h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>

                                                        <div className="modal-body text-center">
                                                            <form className="text-center">
                                                                <div className="form-input">
                                                                    <textarea
                                                                        className="form-control"
                                                                        placeholder="Enter Comment"
                                                                    />
                                                                </div>
                                                                <div className="mx-auto">
                                                                    <button className="btn btn-outline-primary btn-sm rounded-pill">
                                                                        send  <i className="la la-angle-right"></i>
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to="#" className="btn btn-outline-danger rounded-pill btn-sm" data-toggle="modal" data-target="#logoutmodal">
                                                Logout  <i className="la la-lock"></i>
                                            </Link>
                                            <div className="modal fade" id="logoutmodal" tabIndex="-1" role="dialog" aria-labelledby="logoutmodal" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                        <div className="modal-header">
                                                            <h5 className="modal-title text-center" id="logoutmodal">Are You  Sure You Want to LogOut?</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>

                                                        <div className="modal-body col-12 row mx-auto text-center">
                                                            <div className="col">
                                                                <Link to="#" id="closeAfterLogout" className="close" data-dismiss="modal" className="btn btn-outline-success btn-sm rounded-pill">
                                                                    No
                                                      </Link>
                                                            </div>
                                                            <div className="col">
                                                                <Link to="#" onClick={this.logMeOut} className="btn btn-outline-danger btn-sm rounded-pill">
                                                                    Yes
                                                     </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to="#" className="btn btn-outline-dark rounded-pill btn-sm" data-toggle="modal" data-target="#terminatecontract">
                                                End Contract  <i className="la la-lock"></i>
                                            </Link>
                                            <div className="modal fade" id="terminatecontract" tabIndex="-1" role="dialog" aria-labelledby="terminatecontract" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                        <div className="modal-header">
                                                            <h5 className="modal-title text-center" id="terminatecontract">Are You  Sure You Want to Terminate this Contract?</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>

                                                        <div className="modal-body col-12 row mx-auto text-center">
                                                            <div className="col">
                                                                <Link to="#" className="close" data-dismiss="modal" className="btn btn-outline-success btn-sm rounded-pill">
                                                                    No
                                                      </Link>
                                                            </div>
                                                            <div className="col">
                                                                <Link to="#" className="btn btn-outline-danger btn-sm rounded-pill">
                                                                    Yes
                                                     </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="container textcolor9" id="project_section" style={{ color: "#fff" }}>
                            <div className="row">
                                <div className="col-12 text-left section-title py-5" data-aos="fade-up">
                                    <h2>Comments</h2>
                                </div>

                                <ul className="col-md-12">
                                    {this.props.comments.length > 0 ? this.props.comments.map((get_comments, i) => {
                                        return (
                                            <li className="pb-2" key={i}>
                                                {get_comments.fields.content}
                                            </li>
                                        )
                                    })
                                        :
                                        "none"
                                    }
                                </ul>
                            </div>
                        </section>
                    </div>
                }
                <Footer />
                <Helmet>
                    <script src="static/js/custom.js" type="text/javascript" defer={false} />
                </Helmet>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    project: state.mainReducer.project,
    comments: state.mainReducer.comments,
    is_authenticated: state.mainReducer.is_authenticated,

});

export default connect(mapStateToProps, { authCheckState, authLogin, loadProject, createMessage, logout })(Projects);

