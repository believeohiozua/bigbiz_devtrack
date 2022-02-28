import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authCheckState, logout } from '../../action/Actions';

export class NavBar extends Component {
    static propTypes = {
        authCheckState: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        is_authenticated: PropTypes.bool,

    };
    handleScroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("myNav").style.background = "#2c71fc";
            document.getElementById("myNav").classList.remove("border");
        } else {
            document.getElementById("myNav").style.background = "";
            document.getElementById("myNav").classList.add("border");

        }
    }
    logMeOut = (e) => {
        e.preventDefault();
        this.props.logout();
        document.getElementById("closeAfterLogout").click();
    }

    componentDidUpdate(provProps) {
        if (this.props.is_authenticated !== provProps.is_authenticated) {
            if (this.props.is_authenticated) {
                this.props.authCheckState();
            }
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        window.scrollTo(0, 0)
        this.props.authCheckState();
    }
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top border-top border-bottom" id="myNav">
                <div style={{ zIndex: 99 }} className="modal fade" id="logoutmodal" tabIndex="-1" role="dialog" aria-labelledby="logoutmodal" aria-hidden="true">
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
                <div className="container">
                    <Link className="navbar-brand" to="/">DevTrack</Link>
                    {/* <div className="navbar-brand">
                    <Link to="/"><img src="static/img/logo.png" alt="" className="logo_img"/></Link>
                        DevTrack
                        </div> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse onmob" id="main_nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link navactive" to="/"> Home </Link></li>
                            <li className="nav-item"><Link className="nav-link navactive" to="/about"> About</Link></li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link navactive  dropdown-toggle" href="#" data-toggle="dropdown" style={{ outline: "green", border: "0px" }}> Business </a> */}
                                <span to="#" onClick={(e) => { e.preventDefault() }}
                                    className="nav-link navactive  dropdown-toggle"
                                    data-toggle="dropdown"
                                    style={{ outline: "green", border: "0px" }}>
                                    Business
                                </span>
                                <ul className="dropdown-menu dropdown-menu-right col-12 text-center">
                                    <li><button className="dropdown-item rounded-pill" data-toggle="modal" data-target="#getstarted"> Start Project</button></li>
                                    <li><Link className="dropdown-item rounded-pill" to="/projects"> Track Project</Link></li>
                                    <li><Link className="dropdown-item rounded-pill" to="#" target="_blank"> Developers </Link></li>
                                    <li><Link className="dropdown-item rounded-pill" to="/invest"> Investor </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link navactive"> contact </Link>
                            </li>
                            {this.props.is_authenticated ?
                                <li className="nav-item">
                                    <Link to="#"
                                        onClick={(e) => { e.preventDefault() }}
                                        data-toggle="modal" data-target="#logoutmodal"
                                        className="nav-link navactive text-danger">
                                        <small className="bg-light p-1 rounded-pill">LogOut</small>
                                    </Link>
                                </li>

                                :
                                ""
                            }
                        </ul>
                    </div>
                    {/* <Link to="#" onClick={(e) => { e.preventDefault() }}
                                    className="nav-link navactive  dropdown-toggle"
                                    data-toggle="dropdown"
                                    style={{ outline: "green", border: "0px" }}>
                                    Business
                                </Link> */}

                </div>

            </nav>

        )
    }
}

const mapStateToProps = (state) => ({
    is_authenticated: state.mainReducer.is_authenticated,
});

export default connect(mapStateToProps, { authCheckState, logout })(NavBar);

