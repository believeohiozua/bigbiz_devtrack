import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadProject, authLogin, authCheckState, sendClientData } from '../../../action/Actions';
import { createMessage } from '../../../action/alertAction';

export class Comment extends Component {
    state = {
        label: '',
        formData: '',

    };

    static propTypes = {
        authCheckState: PropTypes.func.isRequired,
        loadProject: PropTypes.func.isRequired,
        sendClientData: PropTypes.func.isRequired,
        createMessage: PropTypes.func,
        project: PropTypes.object,
        comments: PropTypes.array,
        is_authenticated: PropTypes.bool,

    };


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        var spin = document.getElementById('commentbtn');
        var loading = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        spin.innerHTML = loading;
        setTimeout(function () {
            spin.innerHTML = "Comment"
        }, 10000);

        this.state.label = "comment";
        const newData = this.state;
        this.props.sendClientData(newData);
        document.querySelector("textarea[name=formData]").value = '';
        this.dataCreateForm.reset()
        this.props.authCheckState();
        if (this.props.is_authenticated) {
            document.getElementById("commentbtn").innerHTML = "Comment";
            this.props.loadProject();
        }
    };
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

        return (

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <ul className="">
                            {this.props.comments.length > 0 ? this.props.comments.map((get_comments, i) => {
                                return (
                                    <li className="" key={i}>
                                        <small>{get_comments.fields.content}</small>
                                    </li>
                                )
                            })
                                :
                                <em>
                                    <small>No Comments</small>
                                </em>
                            }
                        </ul>
                    </div>
                    <div className="col-md-8 mx-auto text-center">
                        <form onSubmit={this.onSubmit} ref={(el) => this.dataCreateForm = el} id="commentform">
                            <p className="h6"><small>Add a Comment</small></p>
                            <div className="form-input">
                                <input
                                    type="hidden"
                                    name="label"
                                    id="label"
                                    onChange={this.onChange}
                                />
                                <textarea
                                    className="form-control form-control-2"
                                    placeholder="add comment"
                                    id="formData"
                                    name="formData"
                                    rows="5"

                                    onChange={this.onChange}
                                    required

                                />
                            </div>
                            <div className="py-2">
                                <button
                                    id="commentbtn"
                                    type="submit"
                                    className="btn btn-outline-info btn-sm rounded-pill">
                                    Comment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    project: state.mainReducer.project,
    comments: state.mainReducer.comments,
    is_authenticated: state.mainReducer.is_authenticated,

});

export default connect(mapStateToProps, { authCheckState, authLogin, loadProject, createMessage, sendClientData })(Comment);

