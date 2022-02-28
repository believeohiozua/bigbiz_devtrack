import axios from 'axios';
import * as actionTypes from './types';
import { returnErrors, createMessage } from './alertAction';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}


export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/rest-auth/login/', {
            username: username,
            password: password
        })
            .then(res => {
                const token = res.data.key;
                // console.log("this is set token", token)
                localStorage.setItem('token', token);
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                dispatch(createMessage({ authSignup: 'Welcome Back!' }));
            })
            .catch(error => {
                dispatch(authFail(error))
                // console.log(error)
                dispatch(returnErrors(error.response.data, error.response.status));
            })
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        // console.log('authCheckState ', token, ' ---- ', localStorage.getItem('token'))
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}

// POST APPLICATION METHOD
export const application = (
    full_names,
    email,
    phone_number,
    service,
    decription,
) => {
    return dispatch => {
        axios.post('/tech/api/application/', {
            full_names: full_names,
            email: email,
            phone_number: phone_number,
            service: service,
            decription: decription,
        })
            .then(res => {
                dispatch(createMessage({ generalSuccessMessage: 'Message Sent!' }));
                dispatch({
                    type: actionTypes.RQ_SENT,
                    payload: res.data,
                });
            })
            .catch(error => {
                dispatch(returnErrors(error.response.data, error.response.status));
            })
    }
}

// LOAD PROJECT
export const loadProject = () => (dispatch, getState) => {

    axios
        .get('/tech/api/project/', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: actionTypes.PROJECT_LOADED,
                payload: res.data.project,
                comments: res.data.comments,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: actionTypes.PROJECT_LOAD_FAILED,
            });
        });
};
// REG_DATA
export const sendClientData = (newData) => (dispatch, getState) => {
    axios
        .post('/tech/api/project/', newData, tokenConfig(getState))
        .then((res) => {
            // console.log(newData, "res.data")
            dispatch({
                type: actionTypes.POST_COMMENT,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const postContact = (
    full_names,
    email,
    subject,
    message,

) => {
    return dispatch => {
        axios.post('/tech/api/contact/', {
            full_names: full_names,
            email: email,
            subject: subject,
            message: message,
        })
            .then(res => {
                dispatch(createMessage({ generalSuccessMessage: 'Thanks Message Sent!' }));
                dispatch({
                    type: actionTypes.CONTACT_SENT,
                    payload: res.data.contact,
                });
            })
            .catch(error => {
                dispatch(returnErrors(error.response.data, error.response.status));
            })
    }
}

export const getTestimonies = () => {
    return dispatch => {
        axios.get('/tech/api/testimonies/', {
        })
            .then(res => {
                dispatch({
                    type: actionTypes.GET_TESTIMONIES,
                    payload: res.data.testimonies,
                });
            })
            .catch(error => {
                dispatch(returnErrors(error.response.data, error.response.status));
            })
    }
}

export const postTestimony = (
    testimony,
    full_names,
    company,
) => {
    return dispatch => {
        axios.post('/tech/api/testimonies/', {
            testimony: testimony,
            full_names: full_names,
            company: company,

        })
            .then(res => {
                dispatch(createMessage({ generalSuccessMessage: 'Thanks Message Sent!' }));
                dispatch({
                    type: actionTypes.POST_TESTIMONIES,
                    payload: res.data.testimony,
                });
            })
            .catch(error => {
                dispatch(returnErrors(error.response.data, error.response.status));
            })
    }
}
// Setup config with token - helper function 
export const tokenConfig = (getState) => {
    // Get token from state
    // const token = getState().mainReducer.token;
    const token = localStorage.getItem('token');


    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If token, add to headers config
    if (token !== undefined || token !== null) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};
