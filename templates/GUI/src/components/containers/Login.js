import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadProject, authLogin, authCheckState } from '../../action/Actions';

export class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    static propTypes = {
        authCheckState: PropTypes.func.isRequired,
        authLogin: PropTypes.func,
        loadProject: PropTypes.func.isRequired,
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
    render() {
        const { username, password } = this.state;
        return (
            <section>
                <div className="container">
                    <div className="col-12 text-left section-title py-5" data-aos="fade-up">
                        <h2>Track Project</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mx-auto py-3 rounded-lg border">
                            <p className="h5"> Track Your Project</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body">
                                    <div className="form-input">
                                        <input
                                            id="username"
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            onChange={this.onChange}
                                            value={username}
                                            placeholder="Enter project ID"
                                            required
                                        />
                                    </div>
                                    <div className="form-input py-2">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={this.onChange}
                                            value={password}
                                            placeholder="Enter Tracking code"
                                            required
                                        />
                                    </div>

                                    <div className="text-right py-2">
                                        <button type="submit" id="btnspinner" className="btn btn-primary btn-sm rounded-pill">
                                            Track <i className="la la-angle-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default connect(null, { authCheckState, authLogin, loadProject })(Login);

