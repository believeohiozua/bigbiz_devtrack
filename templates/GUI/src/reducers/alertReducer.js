import * as actionTypes from '../action/types';;
import { updateObject } from './utility';

const initialState = {
    msg: {},
    status: null,
}


const getErrors = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        status: action.payload.status,
    });
}

const createMsg = (state, action) => {
    return updateObject(state, { state: action.payload });
}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ERRORS: return getErrors(state, action);
        case actionTypes.CREATE_MESSAGE: return createMsg(state, action);
        default:
            return state;
    }
}

export default alertReducer;