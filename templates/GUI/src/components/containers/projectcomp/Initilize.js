import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Initilize extends Component {
    render() {
        return (
            <div className="row border border-info pb-3 textcolor5" style={{ color: "#fff" }}>
                <div className="col-12 py-2">
                    <strong className="text-left">
                        <small>Initialize Project</small>
                    </strong>
                </div>
                <div className="col-md-4">
                    <Link to="#" id="open_this" className="btn btn-outline-primary rounded-pill btn-sm" data-toggle="modal" data-target="#makepayments">
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
                                            <button className="btn btn-primary btn-sm rounded-pill" data-toggle="modal" data-target="#makepartpayments">Proceed</button>
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
                                                            <Payment type={partPayment} />
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
                                            <button className="btn btn-primary btn-sm rounded-pill" data-toggle="modal" data-target="#makefullpayments">
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
                                                            <Payment type={fullPayment} />
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
                    <Link to="#" className="btn btn-outline-warning rounded-pill btn-sm" data-toggle="modal" data-target="#submitcontent">
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
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">
                                                    Add a Link to your Content e.g google drive
                                    <br />
                                                    <sub>Please ensure the like has both read and Write Access</sub>
                                                </label>
                                                <input type="url" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="modal-footer mx-auto text-center">
                                                <button type="button" className="btn btn-outline-primary btn-sm rounded-pill">
                                                    Send <i className="la la-angle-right"></i>
                                                </button>
                                            </div>

                                        </form>
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
                {this.props.project.project_status ?
                    <form className="col-md-4">
                        <input type="hidden" />
                        <button type="submit" className="btn btn-outline-success btn-sm rounded-pill">
                            Start Project <i className="la la-angle-right"></i>
                        </button> {this.props.project.project_started ? <i className="text-success la la-check"></i> : <sup title="make part payment" style={{ fontSize: "10px" }}>pending</sup>}
                    </form>
                    :
                    <div className="col-md-4">
                        <button className="btn btn-outline-success btn-sm rounded-pill" data-toggle="modal" data-target="#startproject">
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

        )
    }
}

export default Initilize;
