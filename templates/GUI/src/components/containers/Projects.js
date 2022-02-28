import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { loadProject, authLogin, authCheckState, logout, sendClientData } from '../../action/Actions';
import { createMessage } from '../../action/alertAction';
import { Link } from 'react-router-dom';
import NavBar from '../base/NavBar';
import Footer from '../base/Footer';
import Login from './Login';
import Comment from './projectcomp/Comment';
import Payment from './Payment';
import RequestForm from './RequestForm';
import { appendScript, removeScript } from '../base/utils'




export class Projects extends Component {

    state = {
        label: '',
        formData: '',

    };

    static propTypes = {
        authCheckState: PropTypes.func.isRequired,
        authLogin: PropTypes.func,
        logout: PropTypes.func,
        sendClientData: PropTypes.func,
        loadProject: PropTypes.func.isRequired,
        createMessage: PropTypes.func,
        project: PropTypes.object,
        is_authenticated: PropTypes.bool,

    };
    sendContent = (e) => {
        e.preventDefault();
        var spin = document.getElementById('sendcontentbtn');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Send";
        }, 10000);

        this.state.label = "project_content";
        const newData = this.state;
        this.props.sendClientData(newData);
        document.querySelector("textarea[name=formData]").value = '';
        this.dataCreateForm.reset()
        this.props.authCheckState();
        if (this.props.is_authenticated) {
            document.getElementById("contentsent").style.display = "";
            document.getElementById("sendcontentform").style.display = "none";
            this.props.loadProject();
        }

    };

    startProject = (e) => {
        e.preventDefault();
        var spin = document.getElementById('startprojectbtn');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Project Started";
        }, 10000);

        this.state.label = "project_start";
        const newData = this.state;
        this.props.sendClientData(newData);
        this.props.authCheckState();
        if (this.props.is_authenticated) {
            createMessage({ generalSuccessMessage: "Project Started" })
            this.props.loadProject();
        }

    };

    endContract = (e) => {
        e.preventDefault();
        this.state.label = "project_end_contract";
        const newData = this.state;
        this.props.sendClientData(newData);
        this.props.authCheckState();
        if (this.props.is_authenticated) {
            createMessage({ generalSuccessMessage: "Request Sent!" })
            this.props.logout();
            document.getElementById("closeterminationmodal").click();
        }

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
            // document.getElementsByClassName("textcolor3")[0].style.color = "black";
            document.getElementsByClassName("textcolor4")[0].style.color = "black";
            document.getElementsByClassName("textcolor5")[0].style.color = "black";
            document.getElementsByClassName("textcolor6")[0].style.color = "black";
            document.getElementsByClassName("textcolor7")[0].style.color = "black";
            document.getElementsByClassName("textcolor8")[0].style.color = "black";
            // document.getElementsByClassName("textcolor9")[0].style.color = "black";
            document.getElementById("stars").style.display = "none";

        } else {
            document.getElementById("bg_switch_text").innerHTML = ' <i className="icofont-light-bulb h4 text-center"></i>';
            document.getElementById("major").style.background = "black";
            document.getElementById("textcolor").style.color = "#ffff";
            document.getElementsByClassName("textcolor1")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor2")[0].style.color = "#ffff";
            // document.getElementsByClassName("textcolor3")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor4")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor5")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor6")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor7")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor8")[0].style.color = "#ffff";
            // document.getElementsByClassName("textcolor9")[0].style.color = "#ffff";

            document.getElementById("stars").style.display = "block";
        }

    }

    closer = (open) => {
        document.getElementById(open).click();
    }

    createMarkup = () => {
        return { __html: this.props.project.contract_terms };
    }
    componentWillMount() {
        var loadjs = require('loadjs');
        // loadjs('static/js/preventer.js');
        loadjs('static/js/custom.js', function () {
            $(document).ready(function () {
                myTypewriter('writer', "Only Perfection is Permitted here! ");
                limeLight("Project Track")
                // updateStars();

            });
        })

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
        const { label, formData } = this.state;
        // appendScript("static/js/custom.js");
        // const Payment = () => <button className="btn btn-outline-primary btn-sm rounded-pill">Pay</button>;

        const progress = this.props.project.progress_bar;
        const contact_term = document.getElementById("contact_term")
        var striptags = require('striptags');
        if (contact_term) {
            var html = this.props.project.contract_terms;
            var strip = striptags(html);
            contact_term.innerHTML = strip;
        }

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
                <section className="project_section">
                    <div className="modal fade" id="getstarted" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <RequestForm />
                    </div>
                </section>
                {!this.props.is_authenticated ?
                    <Login />
                    :
                    // THIS IS WHERE THE PROJECT BEGINS

                    <div>
                        {this.props.project.publish ?
                            <div>
                                <section className="container project_section" id="project_section">
                                    <div className="row">
                                        <div className="col-md-12 text-left section-title py-5 wow flipInX"
                                            style={{
                                                // visibility: 'hidden',
                                                animationDuration: '1.3s',
                                                animationDelay: ' 0.2s',
                                                animationName: 'none'
                                            }}>
                                            <h2>Project </h2>
                                        </div>
                                        <div className="col-md-12 py-4 textcolor4" style={{ color: "#fff" }}>
                                            <ul style={{ listStyle: "none" }} className="py-2 col-md-12">
                                                <p className="text-left">
                                                    <u>
                                                        PROJECT INFORMATION
                                                </u>
                                                </p>
                                                <li>Title: {this.props.project.project_name} </li>
                                                <li>Name: {this.props.project.username} </li>
                                                <li>email: {this.props.project.email}</li>
                                                <li className="py-3">
                                                    <p className="text-left">
                                                        <u>
                                                            CONTRACT TERMS
                                                </u>
                                                    </p>
                                                    <div className='border'>
                                                        <div
                                                            dangerouslySetInnerHTML={this.createMarkup()}
                                                            className='editorb card-header text-white col-md-12'>

                                                        </div>
                                                    </div>
                                                    {/* <p id="contact_term"></p> */}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="container">
                                    <div className="row border border-info textcolor5" style={{ color: "#fff" }}>
                                        <div className="col-12 py-2">
                                            <strong className="text-left">
                                                <small>Initialize Project</small>
                                            </strong>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to="#" id="open_this" className="btn btn-outline-primary rounded-pill btn-sm" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#makepayments">
                                                Down Payments <i className="la la-angle-right"></i>
                                            </Link>{this.props.project.part_payment_status ? <i className="text-success la la-check"></i> : <sup title="make part payment" style={{ fontSize: "10px" }}>pending</sup>
                                            }
                                            <div className="modal fade" id="makepayments" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                        <div className="modal-header text-dark">
                                                            <h5 className="modal-title text-center" id="exampleModalLabel">Make Payments</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body row text-dark">
                                                            <div className="col-6 mx-auto text-center border-right">
                                                                <small>Part-Payment</small>
                                                                <p> ₦ {this.props.project.part_payment_amount}</p>
                                                                {this.props.project.part_payment_status ?
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
                                                                    <button className="btn btn-primary btn-sm rounded-pill" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#makepartpayments">Proceed</button>
                                                                }

                                                                <div className="col-md-12 modal fade" id="makepartpayments" tabIndex="-1" role="dialog" aria-labelledby="part-payment" aria-hidden="true">
                                                                    <div className="modal-dialog" role="document">
                                                                        <div className="pb-3 modal-content" style={{ borderRadius: "1em" }}>
                                                                            <div className="modal-header">
                                                                                <p className="modal-title text-center h6" id="part-payment">
                                                                                    Part-Payment
                                                                                    </p>
                                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                    <span aria-hidden="true">&times;</span>
                                                                                </button>
                                                                            </div>
                                                                            <div className="modal-body h6">
                                                                                <div>
                                                                                    <span>{this.props.project.project_name}</span>
                                                                                    <br />
                                                                                    <span>
                                                                                        <b>Amount: ₦ {this.props.project.part_payment_amount}</b>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 row mx-auto text-center">
                                                                                <div className="col">
                                                                                    <Link to="#" className="btn btn-outline-danger btn-sm rounded-pill"
                                                                                        onClick={(e) => this.closer('makepartpayments')}>
                                                                                        <i className="la la-angle-left"></i>  Back
                                                                            </Link>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <Payment email={this.props.project.email} amt={this.props.project.part_payment_amount} />
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6 mx-auto text-center">
                                                                <small>Full-Payment</small>
                                                                <p> ₦ {this.props.project.total_amount}</p>
                                                                {this.props.project.total_amount_status ?
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
                                                                    <button className="btn btn-primary btn-sm rounded-pill" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#makefullpayments">
                                                                        Proceed
                                                                 </button>
                                                                }
                                                                <div className="modal fade" id="makefullpayments" tabIndex="-1" role="dialog" aria-labelledby="full-payment" aria-hidden="true">
                                                                    <div className="modal-dialog" role="document">
                                                                        <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                                            <div className="modal-header">
                                                                                <p className="modal-title text-center h6" id="full-payment">
                                                                                    Full Payment
                                                                                    </p>
                                                                                <button type="button" id="close_this" className="close" data-dismiss="modal" aria-label="Close">
                                                                                    <span aria-hidden="true">&times;</span>
                                                                                </button>
                                                                            </div>
                                                                            <div className="h6 modal-body">
                                                                                <div>
                                                                                    <span>{this.props.project.project_name}</span>
                                                                                    <br />
                                                                                    <span>
                                                                                        <b> Amount: ₦ {this.props.project.total_amount}</b>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 row mx-auto text-center mb-3">
                                                                                <div className="col">
                                                                                    <Link to="#" className="btn btn-outline-danger btn-sm rounded-pill"
                                                                                        onClick={(e) => this.closer('makefullpayments')}>
                                                                                        <i className="la la-angle-left"></i>  Back
                                                                            </Link>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <Payment email={this.props.project.email} amt={this.props.project.total_amount} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 mx-auto text-center border-top">
                                                                <Link to="#" data-dismiss="modal" aria-label="Close" className="text-danger" >
                                                                    close
                                                                            </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to="#" className="btn btn-outline-warning rounded-pill btn-sm" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#submitcontent">
                                                Submit Contents <i className="la la-arrow-up"></i>
                                            </Link> {this.props.project.part_payment_status ? <i className="text-success la la-check"></i> : <sup title="make part payment" style={{ fontSize: "10px" }}>pending</sup>}
                                            <div className="modal fade" id="submitcontent" tabIndex="-1" role="dialog" aria-labelledby="submit-dev-content" aria-hidden="true">
                                                <div className="modal-dialog text-dark" role="document">
                                                    <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                        <div className="modal-header">
                                                            <p className="modal-title text-center h6" id="submit-dev-content">
                                                                Submit Development Content
                                                                </p>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p className="text-center h6">
                                                                <small>Send cloud storage link to content</small>
                                                            </p>
                                                            {this.props.project.part_payment_status || this.props.total_amount_status || this.props.balance_payment_status ?
                                                                <div>
                                                                    {this.props.project.link_to_content_status ?
                                                                        <div className="text-center text-success">
                                                                            <small> Content Submited</small> <i className="text-success la la-check"></i>
                                                                        </div>
                                                                        :
                                                                        <form
                                                                            onSubmit={this.sendContent}
                                                                            ref={(el) => this.dataCreateForm = el}
                                                                            id="sendcontentform"
                                                                        >
                                                                            <div className="form-group">
                                                                                <label htmlFor="recipient-name" className="col-form-label">
                                                                                    Add a Link to your Content e.g google drive
                                                                <br />
                                                                                    <sub>Please ensure the like has both read and Write Access</sub>
                                                                                </label>
                                                                                <input
                                                                                    type="hidden"
                                                                                    name="label"
                                                                                    id="label"
                                                                                    onChange={this.onChange}
                                                                                />
                                                                                <input
                                                                                    type="url"
                                                                                    name="formData"
                                                                                    className="form-control"
                                                                                    id="contentformData"
                                                                                    onChange={this.onChange}
                                                                                    required />

                                                                            </div>
                                                                            <div className="modal-footer mx-auto text-center">
                                                                                <button
                                                                                    type="submit"
                                                                                    id="sendcontentbtn"
                                                                                    className="btn btn-outline-primary btn-sm rounded-pill">
                                                                                    Send <i className="la la-angle-right"></i>
                                                                                </button>
                                                                            </div>

                                                                        </form>
                                                                    }
                                                                    <div className="text-center text-success" id="contentsent" style={{ display: "none" }}>
                                                                        <i className="las la-thumbs-up"></i>
                                                                        <br />
                                                                        <small>content Sent!</small>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="mx-auto text-center">
                                                                    <i className='las la-frown h1 text-danger'> </i>
                                                                    <br />
                                                                    <small className="text-center">
                                                                        No payments have been made! <br />
                                                                        please make payment to proceed
                                                                   </small>


                                                                </div>

                                                            }
                                                            <div className="col-md-4 mx-auto text-center border-top">
                                                                <Link to="#" data-dismiss="modal" aria-label="Close" className="text-danger" >
                                                                    <small> close</small>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {this.props.project.part_payment_status ?
                                            <div className="col-md-4">
                                                {this.props.project.project_started ?
                                                    <span>
                                                        <button className="btn btn-outline-success btn-sm rounded-pill disabled" disabled>
                                                            Project Started <i className="la la-angle-right"></i>
                                                        </button> <i className="text-success la la-check"></i>
                                                    </span>
                                                    :
                                                    <form onSubmit={this.startProject} ref={(el) => this.dataCreateForm = el} id="startprojectform">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-outline-success btn-sm rounded-pill"
                                                            id="startprojectbtn">
                                                            Start Project <i className="la la-angle-right"></i>
                                                        </button> {this.props.project.project_started ? <i className="text-success la la-check"></i> : <sup title="make part payment" style={{ fontSize: "10px" }}>pending</sup>}
                                                    </form>
                                                }
                                            </div>

                                            :
                                            <div className="col-md-4">
                                                <button className="btn btn-outline-success btn-sm rounded-pill" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#startproject">
                                                    Start Project  <i className="la la-angle-right"></i>
                                                </button> {this.props.project.project_started ? <i className="text-success la la-check"></i> : <sup title="make part payment" style={{ fontSize: "10px" }}>pending</sup>}

                                                <div className="modal fade" id="startproject" tabIndex="-1" role="dialog" aria-labelledby="start-project" aria-hidden="true">
                                                    <div className="modal-dialog text-dark" role="document">
                                                        <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                            <div className="modal-header">
                                                                <p className="modal-title text-center h6" id="start-project">
                                                                    Start Project
                                                                 </p>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <p className="text-center h6">
                                                                    <small>To Start your project, Please Make Payment and Submit content  <br />Thanks </small>
                                                                </p>
                                                                <div className="col-md-4 mx-auto text-center border-top">
                                                                    <Link to="#" data-dismiss="modal" aria-label="Close" className="text-danger" >
                                                                        <small> close</small>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
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
                                                    <Link to="#" className="btn btn-outline-secondary rounded-pill btn-sm" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#testanddeployments">
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
                                                    <Link to="#" className="btn btn-outline-default rounded-pill btn-sm" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#paybalance">
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
                                                                        <div className="text-center">
                                                                            <i className='las la-smile-beam h1 text-success'> </i>
                                                                            <br />
                                                                            <i className='icofont-tick-mark text-success h4'></i>
                                                                            <br />
                                                                            <small className="text-center">
                                                                                Payment Successful
                                                                            </small>
                                                                        </div>

                                                                        :
                                                                        <div className="modal-footer mx-auto col-md-3 text-center">
                                                                            <Payment email={this.props.project.email} amt={this.props.project.balance_payment_amount} />
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
                                                    <Link to="#" className="btn btn-outline-success rounded-pill btn-sm" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#downloadcodes">
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
                                                                {this.props.project.project_completed && this.props.project.Link_to_downlaod_project ?
                                                                    <div className="modal-body text-center">
                                                                        <p><small>click the Link below to Download your Source Codes / project Package</small> </p>
                                                                        <Link to={this.props.project.Link_to_downlaod_project} target="_blank" className="btn btn-outline-success btn-sm rounded-pill">
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
                                    <div className="row border border-secondary pb-3">
                                        <div className="col-12 py-2 text-center">
                                            <strong className="text-weight-bold h6">
                                                <small>Client Section</small>
                                            </strong>
                                        </div>
                                        {/* Client Section */}
                                        <div className="col-12 text-left section-title" data-aos="fade-up">
                                            <h2>Comments</h2>
                                        </div>
                                        <Comment />
                                        <div className="col-md-4">
                                            <Link to="#" className="btn btn-outline-dark rounded-pill btn-sm text-secondary" onClick={(e) => { e.preventDefault() }} data-toggle="modal" data-target="#terminatecontract">
                                                End Contract  <i className="la la-times"></i>
                                            </Link>
                                            <div className="modal fade text-dark" id="terminatecontract" tabIndex="-1" role="dialog" aria-labelledby="terminatecontract" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content" style={{ borderRadius: "1em" }}>
                                                        <div className="modal-header text-center">
                                                            <p className="modal-title text-center h6 text-center" id="terminatecontract">
                                                                <small>Are You  Sure You Want to Terminate this Contract?</small>
                                                            </p>
                                                            <button id="closeterminationmodal" type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                                                <Link to="#" className="btn btn-outline-danger btn-sm rounded-pill" onClick={this.endContract}>
                                                                    Yes
                                                     </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4 mx-auto text-center pt-4">
                                        <Link to="/testimony" className="text-info">
                                            <em>
                                                <small>
                                                    Tell Us How you feel About us &ensp;
                                                    <i className="la la-comments"></i>
                                                </small>
                                            </em>
                                        </Link>
                                        <br />
                                        <sub>
                                            We will review and Publish it for the world to see
                                                </sub>
                                    </div>

                                </section>


                            </div>

                            :
                            <div className="container">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center">
                                        <marquee className="text-warning">Project Loading...</marquee>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
                <Footer />
                <Helmet>
                        <script src="static/js/preventer.js" defer={false} type="text/javascript" />
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

export default connect(mapStateToProps,
    {
        authCheckState,
        authLogin,
        loadProject,
        createMessage,
        logout,
        sendClientData
    })(Projects);

