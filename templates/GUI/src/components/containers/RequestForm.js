import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { application } from '../../action/Actions';
import { createMessage } from '../../action/alertAction';
export class RequestForm extends Component {
    state = {
        full_names: '',
        email: '',
        phone_number: '',
        service: '',
        decription: '',
    };
    static propTypes = {
        application: PropTypes.func.isRequired,
        createMessage: PropTypes.func,
        applied_successful: PropTypes.bool,

    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        var spin = document.getElementById('appformbtnspinner');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "Sending...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Request";
        }, 20000);

        const { full_names, email, phone_number, service, decription } = this.state;
        var array = []
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        var x = array.toString();
        this.state.service = x;

        console.log(this.state.service)

        this.props.application(
            this.state.full_names,
            this.state.email,
            this.state.phone_number,
            this.state.service,
            this.state.decription,
        );

    };
    componentDidUpdate(provProps) {
        if (this.props.applied_successful !== provProps.applied_successful) {
            this.dataCreateForm.reset()
            this.props.createMessage({ generalSuccessMessage: "sent!" })
            document.getElementById('successmsg').style.display = "";
            document.getElementById('rqform').style.display = "none";
            console.log(this.props.applied_successful)
        }

    }
    render() {

        const { full_names, email, phone_number, service, decription } = this.state;
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ borderRadius: "1em" }}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><small>Service Request Form</small></h5>
                        <button id="autoclose" type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" id="modal_body">
                        <div className="text-center text-success" id="successmsg" style={{ display: "none" }}>
                            <i className='las la-smile-beam h1 text-success'> </i>
                            <br />
                            <i className='icofont-tick-mark text-success h4'></i>
                            <br />
                            <small className="text-center">
                                Request Sent! <br />
                                We will reachout to you in a moment<br />
                                Thank you
                             </small>
                            <div className="pt-2 col-12 mx-auto text-center">
                                <Link to="#" data-dismiss="modal"
                                    aria-label="Close"
                                    className="rounded-pill text-danger">
                                    <small> close</small>
                                </Link>
                            </div>

                        </div>
                        <form onSubmit={this.onSubmit} ref={(el) => this.dataCreateForm = el} id="rqform">
                            <div className="form-group">
                                <label htmlFor="full_names" className="col-form-label">Full names:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="full_names"
                                    name="full_names"
                                    value={full_names}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone_number" className="col-form-label">Phone Number:</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone_number"
                                        name="phone_number"
                                        value={phone_number}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row border rounded-lg">
                                <div className="col-12 mx-auto text-center py-2">
                                    Service Required
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="webdev"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"web Development"}

                                    />
                                    <label className="form-check-label" htmlFor="webdev">
                                        <sup className="">Web-Development</sup>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="mobiledev"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"Mobile App"}

                                    />
                                    <label className="form-check-label" htmlFor="mobiledev">
                                        <sup>Mobile App</sup>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="desktop-app"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"Desktop App"}

                                    />
                                    <label className="form-check-label" htmlFor="desktop-app">
                                        <sup>Desktop App</sup>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="data-anaysis"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"Data Analysis"}

                                    />
                                    <label className="form-check-label" htmlFor="data-anaysis">
                                        <sup>Data Analysis</sup>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="machne-learning"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"Machine Learning"}

                                    />
                                    <label className="form-check-label" htmlFor="machne-learning">
                                        <sup>Machine Learning</sup>
                                    </label>
                                </div>

                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="ethical-hacking"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"Ethical Hacking"}

                                    />
                                    <label className="form-check-label" htmlFor="ethical-hacking">
                                        <sup>Ethical Hacking</sup>
                                    </label>
                                </div>

                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="cloud-computing"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"Cloud Computing"}

                                    />
                                    <label className="form-check-label" htmlFor="cloud-computing">
                                        <sup>Cloud Computing</sup>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="Digital Marketing"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"Digital Marketing"}

                                    />
                                    <label className="form-check-label" htmlFor="Digital Marketing">
                                        <sup>Digital Marketing</sup>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="Content Management"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"Content Management"}

                                    />
                                    <label className="form-check-label" htmlFor="Content Management">
                                        <sup>Content Management</sup>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="BlockChain"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"BlockChain"}

                                    />
                                    <label className="form-check-label" htmlFor="BlockChain">
                                        <sup>BlockChain</sup>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="Microservices"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"Microservices"}

                                    />
                                    <label className="form-check-label" htmlFor="Microservices">
                                        <sup>Microservices</sup>
                                    </label>
                                </div>
                                <div className="form-check d-flex justify-content-center col-4" id="servicecheckinput">
                                    <input
                                        className="form-check-input mb-2"
                                        type="checkbox"
                                        value=""
                                        id="DevOps"
                                        name="service"
                                        onChange={this.onChange}
                                        value={"DevOps"}

                                    />
                                    <label className="form-check-label" htmlFor="DevOps">
                                        <sup>DevOps</sup>
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <em>
                                    <sub>
                                        If your required service is not listed please state it in the Desription Below
                                    </sub>
                                </em>
                            </div>
                            <div className="form-group">
                                <label htmlFor="decription" className="col-form-label">Description:</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    id="decription"
                                    name="decription"
                                    value={decription}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>

                            <div className="mx-auto text-center">
                                <button id="appformbtnspinner" type="submit" className="btn btn-outline-primary btn-sm rounded-pill">
                                    Request <i className="la la-angle-right"></i>
                                </button>
                            </div>
                            <div>
                                <button id="autoclose" type="button" className="close btn btn-outline-danger btn-sm rounded-pill" data-dismiss="modal" aria-label="Close">
                                    close
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    applied_successful: state.mainReducer.applied_successful,
});

export default connect(mapStateToProps, { application, createMessage })(RequestForm);

