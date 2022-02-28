import * as actionTypes from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    is_authenticated: false,
    project: {},
    comments: [],
    applied_successful: false,
    contact: false,
    testimonies: [],
    testimony: false,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.AUTH_SUCCESS:
            localStorage.setItem('token', action.token);
            var authcheck;
            if (action.token === undefined || action.token == null) {
                authcheck = false
            } else {
                authcheck = true
            }
            return {
                ...state,
                ...action.payload,
                is_authenticated: authcheck,
            };
        case actionTypes.RQ_SENT:
            return {
                ...state,
                ...action.payload,
                applied_successful: true,
            };
        case actionTypes.PROJECT_LOADED:
            // console.log("from reducer ", action.payload)
            return {
                ...state,
                ...action.payload,
                project: action.payload,
                comments: action.comments,
            };
        case actionTypes.CONTACT_SENT:
            return {
                ...state,
                ...action.payload,
                contact: action.payload,
            };
        case actionTypes.GET_TESTIMONIES:
            return {
                ...state,
                ...action.payload,
                testimonies: action.payload,
            };
        case actionTypes.POST_TESTIMONIES:
            return {
                ...state,
                ...action.payload,
                testimony: action.payload,
            };
        case actionTypes.AUTH_FAIL:
        case actionTypes.AUTH_LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                is_authenticated: false,
                comments: {},
                project: {},
            };
        default:
            return state;
    }
}
